// Directive to mark this file's exports as Server Actions
"use server";

// Import validation library
import { z } from "zod";
// Import the Supabase client instance we created
import { supabase } from "@/lib/supabaseClient"; // Adjust path if necessary

// Define state type for useFormState hook
export interface FormState {
  success: boolean;
  message: string | null;
  errors?: Record<string, string[] | undefined>; // For field-specific errors (optional enhancement)
}

// --- Contact Form Action ---

// Define validation schema for the contact form using Zod
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(), // Optional field
  contactTime: z.string().optional(), // Optional field
});

// Server Action to handle contact form submission
export async function submitContactForm(
  prevState: FormState | null, // Previous state from useFormState
  formData: FormData, // Data submitted by the form
): Promise<FormState> {
  // Validate form data using the Zod schema
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    contactTime: formData.get("contactTime"),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    console.error(
      "Contact Form Validation Failed:",
      validatedFields.error.flatten().fieldErrors,
    );
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the fields.",
    };
  }

  // If validation passes, attempt to insert data into Supabase
  try {
    const { data, error } = await supabase
      .from("contact_submissions") // Target the correct table
      .insert([
        {
          name: validatedFields.data.name,
          email: validatedFields.data.email,
          phone: validatedFields.data.phone || null, // Use null if optional field is empty
          contact_time: validatedFields.data.contactTime || null, // Use null if optional field is empty
        },
      ])
      .select(); // Optionally select the inserted data

    // Handle potential database errors
    if (error) {
      console.error("Supabase Insert Error (Contact):", error);
      return { success: false, message: `Database Error: ${error.message}` };
    }

    // Return success state
    console.log("Contact Form Submitted Successfully:", data);
    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (e) {
    console.error("Unexpected Error (Contact):", e);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

// --- Newsletter Signup Action ---

// Define validation schema for the newsletter form
const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

// Server Action to handle newsletter signup submission
export async function submitNewsletterSignup(
  prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  // Validate form data
  const validatedFields = NewsletterSchema.safeParse({
    email: formData.get("email"),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    console.error(
      "Newsletter Validation Failed:",
      validatedFields.error.flatten().fieldErrors,
    );
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please enter a valid email.",
    };
  }

  // If validation passes, attempt to insert data into Supabase
  try {
    const { data, error } = await supabase
      .from("newsletter_signups") // Target the correct table
      .insert([{ email: validatedFields.data.email }])
      .select();

    // Handle potential database errors (e.g., duplicate email if constraint set)
    if (error) {
      console.error("Supabase Insert Error (Newsletter):", error);
      // Provide a more user-friendly message for common errors like duplicates
      if (error.code === "23505") {
        // Postgres unique violation code
        return { success: false, message: "This email is already subscribed." };
      }
      return { success: false, message: `Database Error: ${error.message}` };
    }

    // Return success state
    console.log("Newsletter Signup Successful:", data);
    return { success: true, message: "Thanks for subscribing!" };
  } catch (e) {
    console.error("Unexpected Error (Newsletter):", e);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
