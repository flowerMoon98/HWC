"use client"; // Still a client component because we use hooks

import React from "react";
// UPDATED: Import useActionState from react
import { useActionState } from "react";
// Import useFormStatus from react-dom (remains the same)
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
// Import the Server Action and state type (assuming actions.ts is in lib)
import { submitContactForm, type FormState } from "@/lib/actions";

// Internal Submit Button component to use useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus(); // Get pending state from form

  return (
    <Button
      type="submit"
      variant="default"
      size="default"
      className="w-full md:w-auto"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Sending..." : "Get in touch"}
    </Button>
  );
}

// Contact Form Component using Server Action
const ContactForm: React.FC = () => {
  // Initial state for the action state hook
  const initialState: FormState | null = null;
  // UPDATED: Use useActionState hook
  const [state, formAction] = useActionState(submitContactForm, initialState);

  // Ref for the form element to allow resetting on success
  const formRef = React.useRef<HTMLFormElement>(null);

  // Effect to reset the form on successful submission
  React.useEffect(() => {
    if (state?.success) {
      formRef.current?.reset(); // Reset form fields using the ref
    }
  }, [state]); // Run effect when state changes

  // CSS variable overrides for Input component
  const inputStyleOverrides = {
    "--input-active-border": "var(--color-hwc-dark)",
    "--input-active-label": "var(--color-hwc-dark)",
    "--input-text-color": "var(--color-hwc-dark)",
  } as React.CSSProperties;

  return (
    // Form now uses 'action' prop with the server action
    <form ref={formRef} action={formAction} className="space-y-6">
      {/* Name Field */}
      <div style={inputStyleOverrides}>
        <Input
          type="text"
          id="contact-name"
          name="name" // Keep name attribute for server action
          label="Name"
          required
          // Conditionally add aria-describedby if there's an error for this field
          aria-describedby={state?.errors?.name ? "name-error" : undefined}
          className="h-[50px] bg-transparent rounded-none px-0 pb-1 focus-visible:ring-0" // Kept user styles
        />
        {/* Display validation errors if they exist */}
        {state?.errors?.name && (
          <p id="name-error" className="text-xs text-red-500 mt-1">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div style={inputStyleOverrides}>
        <Input
          type="email"
          id="contact-email"
          name="email"
          label="Email"
          required
          aria-describedby={state?.errors?.email ? "email-error" : undefined}
          className="h-[50px] bg-transparent rounded-none px-0 pb-1 focus-visible:ring-0" // Kept user styles
        />
        {state?.errors?.email && (
          <p id="email-error" className="text-xs text-red-500 mt-1">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div style={inputStyleOverrides}>
        <Input
          type="tel"
          id="contact-phone"
          name="phone"
          label="Phone Number"
          aria-describedby={state?.errors?.phone ? "phone-error" : undefined}
          className="h-[50px] bg-transparent rounded-none px-0 pb-1 focus-visible:ring-0" // Kept user styles
        />
        {state?.errors?.phone && (
          <p id="phone-error" className="text-xs text-red-500 mt-1">
            {state.errors.phone[0]}
          </p>
        )}
      </div>

      {/* Best Contact Time Field */}
      <div style={inputStyleOverrides}>
        <Input
          type="text"
          id="contact-time"
          name="contactTime" // Ensure name matches schema
          label="Best Time to Contact"
          aria-describedby={
            state?.errors?.contactTime ? "contactTime-error" : undefined
          }
          className="h-[50px] bg-transparent rounded-none px-0 pb-1 focus-visible:ring-0" // Kept user styles
        />
        {state?.errors?.contactTime && (
          <p id="contactTime-error" className="text-xs text-red-500 mt-1">
            {state.errors.contactTime[0]}
          </p>
        )}
      </div>

      {/* Submit Button Component */}
      <div className="pt-4">
        <SubmitButton />
      </div>

      {/* Display Success or General Error Messages from Server Action */}
      {/* Ensure state.message exists and is not just for validation errors */}
      {state?.message && (
        <p
          className={cn(
            "text-sm mt-2",
            state.success ? "text-green-600" : "text-red-600", // Conditional color
          )}
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export { ContactForm };
