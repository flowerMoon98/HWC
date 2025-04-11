'use client'; // Needed for useState hook

// Import React and useState hook
import React, { useState } from 'react';
import { Input } from '@/components/ui/Input'; // Use our floating label input
import { Button } from '@/components/ui/Button'; // Use our button
// Removed unused Label import
// import { Label } from '@/components/ui/Label';

// Define state structure for the form
interface FormData {
  name: string;
  email: string;
  phone: string;
  contactTime: string;
}

// Contact Form Component
const ContactForm: React.FC = () => {
  // State to hold form input values
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
  });

  // Handler to update state when input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Explicitly type prevState here
    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Placeholder submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser form submission
    console.log('Form Submitted:', formData);
    // TODO: Implement actual form submission logic later (e.g., API call)
    // Maybe show a success message and clear the form
    alert('Form submitted (check console)! Actual submission not implemented yet.');
    setFormData({ name: '', email: '', phone: '', contactTime: '' }); // Clear form
  };

  return (
    // Form element with submit handler
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      {/* Using floating label Input: requires id and label prop */}
      <div className="relative">
        <Input
          type="text"
          id="contact-name"
          name="name" // Name attribute for state update
          value={formData.name}
          onChange={handleChange}
          label="Name" // Label prop for floating label
          required // Example: make field required
          // Add specific styling overrides if needed (otherwise defaults from Input component apply)
          // Assuming light background context based on original PRD for contact form section
          className="h-[50px] bg-transparent  rounded-none px-0 pb-1 text-[var(--color-hwc-dark)] focus-visible:ring-0"
        />
         {/* Animated underline div is INSIDE the Input component now */}
      </div>

      {/* Email Field */}
      <div className="relative">
        <Input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          required
          className="h-[50px] bg-transparent  rounded-none px-0 pb-1 text-[var(--color-hwc-dark)] focus-visible:ring-0"
        />
      </div>

      {/* Phone Field */}
      <div className="relative">
        <Input
          type="tel"
          id="contact-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          label="Phone Number"
          className="h-[50px] bg-transparent  rounded-none px-0 pb-1 text-[var(--color-hwc-dark)] focus-visible:ring-0"
        />
      </div>

      {/* Best Contact Time Field - Using a simple text input for now */}
      {/* TODO: Could be replaced with a <select> dropdown later */}
      <div className="relative">
         <Input
          type="text"
          id="contact-time"
          name="contactTime"
          value={formData.contactTime}
          onChange={handleChange}
          label="Best Time to Contact"
          className="h-[50px] bg-transparent  rounded-none px-0 pb-1 text-[var(--color-hwc-dark)] focus-visible:ring-0"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        {/* Using default (teal) button variant */}
        <Button type="submit" variant="default" size="default" className="w-full md:w-auto">
          Get in touch
        </Button>
      </div>
    </form>
  );
};

export { ContactForm }; // Export named component
