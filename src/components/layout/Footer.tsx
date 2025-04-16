'use client'; // Required for hooks

import React,{useActionState} from 'react';
// Import hooks for Server Action state management
import {  useFormStatus } from 'react-dom';
import Link from 'next/link';
import { FooterLogo } from '@/components/ui/FooterLogo';
import { Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils'; // Keep cn if used in original classNames
import { Input } from '@/components/ui/Input'; // Use our updated Input component
import { Button } from '@/components/ui/Button';
import { AnimatedUnderlineLink } from '@/components/ui/AnimatedUnderlineLink';
// Import the Server Action and state type
import { submitNewsletterSignup, type FormState } from '@/lib/actions'; // Assuming actions.ts is in lib

// --- Internal Submit Button for Newsletter ---
// Uses useFormStatus to handle pending state
function NewsletterSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="default" // Keep existing variant from user code
      size="sm" // Keep existing size from user code
      // Keep existing className from user code
      className="pl-4 pr-3 py-1.5 rounded-[114px] flex-shrink-0 h-[50px]"
      disabled={pending} // Disable when pending
      aria-disabled={pending}
    >
      {pending ? 'Signing up...' : 'Sign up'}
    </Button>
  );
}
// --- End Internal Submit Button ---


// Footer Component Definition
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data for links (assuming defined above)
  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Newsroom", href: "/newsroom" },
  ];
  const serviceLinks = [
    { title: "Insurance", href: "/services/insurance" },
    { title: "Accounting", href: "/services/accounting" },
    { title: "Wealth Management", href: "/services/wealth-management" },
    { title: "Healthcare Planning", href: "/services/healthcare" }, // Simplified title path? Check route
    { title: "Property", href: "/services/property" },
  ];
   const legalLinks = [
    { title: "Privacy", href: "/privacy-policy" }, // TODO: Create these pages later
    { title: "Legal", href: "/terms-of-service" }, // TODO: Create these pages later
  ];
  const socialLinks = [
    { href: '#', label: 'LinkedIn', icon: Linkedin }, // TODO: Add actual URLs
    { href: '#', label: 'Twitter', icon: Twitter },
  ];

  // --- Newsletter Form State ---
  const initialState: FormState | null = null;
  // Connect state management to the server action
  const [state, formAction] = useActionState(submitNewsletterSignup, initialState);
  // Ref to reset the form
  const formRef = React.useRef<HTMLFormElement>(null);

  // Effect to reset the form on successful submission
  React.useEffect(() => {
    if (state?.success) {
      formRef.current?.reset(); // Reset form fields
    }
  }, [state]); // Dependency array includes state
  // --- End Newsletter Form State ---

  // NOTE: CSS variable overrides for Input context styling are omitted
  // as per user instruction to not change styling from their provided code.

  return (
    // Keep existing footer styling from user code
    <footer className="flex flex-col items-center px-4 sm:px-6 lg:px-[60px] py-10 bg-[var(--color-hwc-dark)] text-[var(--color-primaryseasalt)] mt-auto">
      {/* Keep existing max-width container */}
      <div className="flex flex-col max-w-7xl w-full gap-10">

        {/* --- Top Section: Newsletter Signup --- */}
        {/* Keep existing section styling */}
        {/* NOTE: Added back border-b and pb-10 from previous versions, assuming they were intended */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10">
          {/* Left Column: Text */}
          {/* Keep existing text styling */}
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

          {/* Right Column: Form */}
          {/* Replace div with form tag, add action and ref, keep layout classes */}
          <form ref={formRef} action={formAction} className="flex w-full md:w-auto items-end gap-4">
             {/* Input Wrapper */}
             <div
                className="flex-grow md:w-[320px]" // Keep existing layout class
                // style={footerInputStyleOverrides} // OMITTED as per user instruction
             >
                {/* Use Input component - functional props added, invalid variant removed */}
                {/* NOTE: Styling classes are NOT applied here as per user instruction. */}
                {/* This Input will use its internal default styles. */}
                {/* Visual appearance (bg, text color, static border) might differ from previous versions. */}
                <Input
                  type="email"
                  id="footer-newsletter-email" // Added ID
                  name="email" // Added name
                  label="Email" // Keep label prop from user code
                  required // Added required
                  aria-label="Email for newsletter" // Added aria-label
                  aria-describedby={state?.errors?.email ? "footer-newsletter-email-error" : undefined}
                  variant='white' 
                  
                />
                 {/* Display validation errors */}
                 {state?.errors?.email && (
                   <p id="footer-newsletter-email-error" className="text-xs text-red-400 mt-1">{state.errors.email[0]}</p>
                 )}
                 {/* Display Success/General Error Messages */}
                 {state?.message && (
                    <p className={cn(
                        "text-xs mt-1", // Basic spacing/size
                        state.success ? "text-green-400" : "text-red-400" // Color based on state
                      )}
                    >
                        {state.message}
                    </p>
                  )}
             </div>
            {/* Use the internal Submit Button component */}
            <NewsletterSubmitButton />
          </form>
        </div>
        {/* --- End Newsletter Section --- */}

        {/* --- Middle Section: Logo & Main Links --- */}
        {/* Keep existing structure and styling */}
        <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
           {/* ... Link columns ... */}
           <div className="flex-shrink-0 md:flex-1"> <FooterLogo className="h-10 w-auto" /> </div>
           <div className="flex flex-col sm:flex-row w-full md:w-auto justify-between sm:justify-end gap-10 md:gap-16 lg:gap-24">
              <div className="flex-1 min-w-[150px]">
                  <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                      <h3 className="font-light text-[var(--color-hwc-teal)] text-base tracking-tight leading-[21px]">Company</h3>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                      {companyLinks.map((link) => (<AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">{link.title}</AnimatedUnderlineLink>))}
                  </div>
              </div>
              <div className="flex-1 min-w-[150px]">
                  <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                      <h3 className="font-light text-[var(--color-hwc-teal)] text-base tracking-tight leading-[21px]">Our Services</h3>
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                      {serviceLinks.map((link) => (<AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">{link.title}</AnimatedUnderlineLink>))}
                  </div>
              </div>
           </div>
        </div>
        {/* --- End Links Section --- */}

        {/* --- Footer Bottom Bar: Legal & Social --- */}
         {/* Keep existing structure and styling */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
           {/* ... Legal / Social ... */}
           <div className="flex gap-6 order-2 sm:order-1">
               {legalLinks.map((link) => (<AnimatedUnderlineLink key={link.title} href={link.href} className="text-sm font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[17px]">{link.title}</AnimatedUnderlineLink>))}
           </div>
           <div className="flex gap-3 order-1 sm:order-2">
               {socialLinks.map((link) => (<Link key={link.label} href={link.href} className="text-[var(--color-primaryseasalt)] opacity-70 hover:opacity-100 transition-opacity" aria-label={link.label} target="_blank" rel="noopener noreferrer"><link.icon className="h-6 w-6" /></Link>))}
           </div>
        </div>
        {/* --- End Footer Bottom Bar --- */}

        {/* Copyright Row */}
         {/* Keep existing structure and styling */}
         <div className=" text-center text-xs text-[var(--color-neutralstaupe-greyneutral-5)]">
          © {currentYear} HWC Financial Planning. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// Helper data definitions (assuming these were defined above or imported)
//const companyLinks = [ { title: "About Us", href: "/about" }, { title: "Contact Us", href: "/contact" }, { title: "Newsroom", href: "/newsroom" } ];
//const serviceLinks = [ { title: "Insurance", href: "/services/insurance" }, { title: "Accounting", href: "/services/accounting" }, { title: "Wealth Management", href: "/services/wealth-management" }, { title: "Healthcare Planning", href: "/services/healthcare" }, { title: "Property", href: "/services/property" } ];
//const legalLinks = [ { title: "Privacy", href: "/privacy-policy" }, { title: "Legal", href: "/terms-of-service" } ];
//const socialLinks = [ { href: '#', label: 'LinkedIn', icon: Linkedin }, { href: '#', label: 'Twitter', icon: Twitter } ];
