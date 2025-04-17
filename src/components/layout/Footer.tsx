'use client'; // Required for hooks

import React, { useActionState } from 'react';
// Import hooks for Server Action state management
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
// Assuming these components exist in your project structure
import { FooterLogo } from '@/components/ui/FooterLogo';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AnimatedUnderlineLink } from '@/components/ui/AnimatedUnderlineLink';
import { Linkedin, Twitter } from 'lucide-react'; // Icon library
import { cn } from '@/lib/utils'; // Utility for conditional class names
// Import the Server Action and state type
import { submitNewsletterSignup, type FormState } from '@/lib/actions'; // Assuming actions.ts is in lib

// --- Internal Submit Button for Newsletter ---
// Uses useFormStatus to show pending state during form submission
function NewsletterSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="default" // Preserved original variant
      size="sm" // Preserved original size
      // Preserved original className
      className="pl-4 pr-3 py-1.5 rounded-[114px] flex-shrink-0 h-[50px]"
      disabled={pending} // Disable button when form is submitting
      aria-disabled={pending}
    >
      {pending ? 'Signing up...' : 'Sign up'}
    </Button>
  );
}
// --- End Internal Submit Button ---


// Footer Component Definition
const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Link data (replace with your actual data structure or import)
  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Newsroom", href: "/newsroom" },
  ];
  const serviceLinks = [
    { title: "Insurance", href: "/services/insurance" },
    { title: "Accounting", href: "/services/accounting" },
    { title: "Wealth Management", href: "/services/wealth-management" },
    { title: "Healthcare Planning", href: "/services/healthcare" },
    { title: "Property", href: "/services/property" },
  ];
   const legalLinks = [
    { title: "Privacy", href: "/privacy-policy" },
    { title: "Legal", href: "/terms-of-service" },
  ];
  const socialLinks = [
    // Replace '#' with your actual social media profile URLs
    { href: '#', label: 'LinkedIn', icon: Linkedin },
    { href: '#', label: 'Twitter', icon: Twitter },
  ];

  // --- Newsletter Form State Hook ---
  const initialState: FormState | null = null;
  // useActionState links the form submission to the server action and manages state
  const [state, formAction] = useActionState(submitNewsletterSignup, initialState);
  // Ref to access the form element, e.g., for resetting
  const formRef = React.useRef<HTMLFormElement>(null);

  // Effect to reset the form if the submission was successful
  React.useEffect(() => {
    if (state?.success) {
      formRef.current?.reset(); // Clear the input field
    }
  }, [state]); // Re-run effect when the state changes
  // --- End Newsletter Form State ---

  return (
    // Main footer element: flex column layout, responsive padding, background/text colors.
    // mt-auto helps push the footer to the bottom of the viewport if content is short.
    <footer className="flex flex-col items-center px-4 sm:px-6 lg:px-[60px] py-10 bg-[var(--color-hwc-dark)] text-[var(--color-primaryseasalt)] mt-auto">
      {/* Inner container: manages overall width and vertical spacing between sections */}
      <div className="flex flex-col w-full gap-10">

        {/* --- Top Section: Newsletter Signup --- */}
        {/* Responsive layout: Column on mobile, Row on medium screens and up. */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10">
          {/* Left Column: Text content. Text aligned center mobile, left medium+ */}
          <div className="flex flex-col items-start gap-2.5 flex-1 text-center md:text-left">
             <h2 className="font-light text-[32px] leading-tight w-full">
              Sign up for our newsletter
            </h2>
            <p className="font-light text-[var(--color-neutralstaupe-greyneutral-5)] text-xs tracking-tight leading-3 w-full">
              *Protecting your privacy is our{' '}
              <AnimatedUnderlineLink href="/privacy-policy" className="font-medium text-xs leading-3 tracking-tight text-[var(--color-neutralstaupe-greyneutral-5)]">
                 policy
              </AnimatedUnderlineLink>
              . We will not give your details to third parties.
            </p>
          </div>

          {/* Right Column: Newsletter Form. Full width mobile, auto width medium+ */}
          <form ref={formRef} action={formAction} className="flex w-full md:w-auto items-end gap-4">
             {/* Input Wrapper: Grows to fill space mobile, fixed width medium+ */}
             <div className="flex-grow md:w-[320px]">
                {/* Input component */}
                <Input
                  type="email"
                  id="footer-newsletter-email"
                  name="email" // Name attribute is essential for form submission
                  label="Email" // Label prop as provided
                  required // HTML5 validation
                  aria-label="Email for newsletter" // Accessibility
                  // Link error messages to input for screen readers
                  aria-describedby={state?.errors?.email ? "footer-newsletter-email-error" : undefined}
                  variant='white' // Preserved original variant
                />
                 {/* Display email validation errors */}
                 {state?.errors?.email && (
                   <p id="footer-newsletter-email-error" className="text-xs text-red-400 mt-1">{state.errors.email[0]}</p>
                 )}
                 {/* Display general success or error messages from the server action */}
                 {state?.message && (
                    <p className={cn(
                        "text-xs mt-1", // Base styles
                        // Conditional styling based on success/error
                        state.success ? "text-green-400" : "text-red-400"
                      )}
                    >
                        {state.message}
                    </p>
                  )}
             </div>
            {/* Submit Button component (handles pending state) */}
            <NewsletterSubmitButton />
          </form>
        </div>
        {/* --- End Newsletter Section --- */}

        {/* --- Middle Section: Logo & Main Links --- */}
        {/* Responsive layout: Column mobile, Row medium+ */}
        <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
           {/* Logo container: Prevents shrinking */}
           <div className="flex-shrink-0">
               {/* Logo Component: Responsive height (smaller mobile, larger medium+) */}
               <FooterLogo className="h-8 md:h-10 w-auto" />
           </div>
           {/* Link groups container: Column extra-small, Row small+. Aligned right small+ */}
           <div className="flex flex-col sm:flex-row w-full md:w-auto justify-between sm:justify-end gap-10 md:gap-16 lg:gap-24">
              {/* Company Links Column: Grows, minimum width */}
              <div className="flex-1 min-w-[150px]">
                  {/* Link group title */}
                  <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                      <h3 className="font-light text-[var(--color-hwc-teal)] text-base tracking-tight leading-[21px]">Company</h3>
                  </div>
                  {/* Links list */}
                  <div className="flex flex-col gap-2 mt-5">
                      {companyLinks.map((link) => (
                        <AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">
                            {link.title}
                        </AnimatedUnderlineLink>
                      ))}
                  </div>
              </div>
              {/* Services Links Column: Grows, minimum width */}
              <div className="flex-1 min-w-[150px]">
                  {/* Link group title */}
                  <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                      <h3 className="font-light text-[var(--color-hwc-teal)] text-base tracking-tight leading-[21px]">Our Services</h3>
                  </div>
                  {/* Links list */}
                  <div className="flex flex-col gap-2 mt-5">
                      {serviceLinks.map((link) => (
                        <AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">
                            {link.title}
                        </AnimatedUnderlineLink>
                      ))}
                  </div>
              </div>
           </div>
        </div>
        {/* --- End Links Section --- */}

        {/* --- Footer Bottom Bar: Legal & Social --- */}
         {/* Responsive layout: Column mobile, Row small+. Items centered. */}
         {/* Responsive order: Social first mobile, Legal first small+ */}
         {/* Added gap-4 for vertical spacing when stacked */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
           {/* Legal Links: Order swaps responsively */}
           <div className="flex gap-6 order-2 sm:order-1">
               {legalLinks.map((link) => (
                 <AnimatedUnderlineLink key={link.title} href={link.href} className="text-sm font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[17px]">
                    {link.title}
                 </AnimatedUnderlineLink>
               ))}
           </div>
           {/* Social Links: Order swaps responsively */}
           <div className="flex gap-3 order-1 sm:order-2">
               {socialLinks.map((link) => (
                 <Link
                    key={link.label}
                    href={link.href}
                    className="text-[var(--color-primaryseasalt)] opacity-70 hover:opacity-100 transition-opacity"
                    aria-label={link.label} // Accessibility
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security for target="_blank"
                 >
                    <link.icon className="h-6 w-6" />
                 </Link>
               ))}
           </div>
        </div>
        {/* --- End Footer Bottom Bar --- */}

        {/* Copyright Row: Centered text, naturally responsive */}
         <div className=" text-center text-xs text-[var(--color-neutralstaupe-greyneutral-5)]">
          © {currentYear} HWC Financial Planning. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// Note: Ensure that the imported components (FooterLogo, Input, Button, AnimatedUnderlineLink),
// the utility function (cn), the icon library (lucide-react), and the server action (submitNewsletterSignup)
// are correctly set up in your project structure (`@/components/...`, `@/lib/...`).