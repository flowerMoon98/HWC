import React from 'react';
import Link from 'next/link'; // Keep for Social Icons if not animated
import { FooterLogo } from '@/components/ui/FooterLogo'; // Use specific FooterLogo
import { Linkedin, Twitter } from 'lucide-react'; // Use Lucide icons
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input'; // Use our Input component
import { Button } from '@/components/ui/Button'; // Use our Button component
import { AnimatedUnderlineLink } from '@/components/ui/AnimatedUnderlineLink'; // Use our animated Link

// Footer Component Definition
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data for links
  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Newsroom", href: "/newsroom" },
  ];

  const serviceLinks = [
    { title: "Insurance", href: "/services/insurance" },
    { title: "Accounting", href: "/services/accounting" },
    { title: "Wealth Management", href: "/services/wealth-management" },
    { title: "Healthcare Planning", href: "/services/healthcare" }, // Simplified title
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

  return (
    // Footer element - Using CSS variables for colors
    <footer className="flex flex-col items-center px-4 sm:px-6 lg:px-[60px] py-10 bg-[var(--color-hwc-dark)] text-[var(--color-primaryseasalt)] mt-auto">
      {/* Max width container */}
      <div className="flex flex-col max-w-7xl w-full gap-10">

        {/* --- Top Section: Newsletter Signup --- */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10 border-b border-[var(--color-primaryseasalt)] border-opacity-10 pb-10">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start gap-2.5 flex-1 text-center md:text-left">
            <h2 className="font-light text-[32px] leading-tight w-full"> {/* Adjusted font/leading */}
              Sign up for our newsletter
            </h2>
            <p className="font-light text-[var(--color-neutralstaupe-greyneutral-5)] text-xs tracking-tight leading-3 w-full"> {/* Adjusted tracking */}
              *Protecting your privacy is our{' '}
              {/* Use AnimatedUnderlineLink for "policy" */}
              <AnimatedUnderlineLink href="/privacy-policy" className="font-medium text-xs leading-3 tracking-tight text-[var(--color-neutralstaupe-greyneutral-5)]">
                 policy
              </AnimatedUnderlineLink>
              . We won't give your details to third parties.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="flex w-full md:w-auto items-end gap-4">
             <div className="flex-grow md:w-[320px]">
                {/* Use our Input component, styled */}
                <Input
                  type="email"
                  aria-label="Email for newsletter"
                  className="h-[50px] bg-transparent border-0 border-b-2 border-[var(--color-primaryseasalt)] border-opacity-30 rounded-none px-0 pb-1 text-[var(--color-primaryseasalt)] opacity-60 placeholder:text-[var(--color-primaryseasalt)]/60 focus-visible:ring-0 focus-visible:border-[var(--color-primaryseasalt)] focus-visible:border-opacity-100 focus-visible:opacity-100"
                  placeholder="Enter Email"
                />
             </div>
            {/* Use our Button component, styled */}
            <Button
              type="submit"
              variant="default" // Use teal variant (maps to primarymonsell)
              size="sm"
              className="pl-4 pr-3 py-1.5 rounded-[114px] flex-shrink-0 h-[50px]" // Specific styling
            >
              Sign up
            </Button>
          </div>
        </div>
        {/* --- End Newsletter Section --- */}

        {/* --- Middle Section: Logo & Main Links --- */}
        <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
          {/* Logo Section (Left) */}
          <div className="flex-shrink-0 md:flex-1"> {/* Allow logo area to have some flex space */}
             {/* Use our FooterLogo component */}
             <FooterLogo className="h-10 w-auto" />
          </div>

          {/* Navigation Links Columns Wrapper (Right) */}
          {/* Adjust width/flex basis as needed */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto justify-between sm:justify-end gap-10 md:gap-16 lg:gap-24">
            {/* Company Links Column */}
            <div className="flex-1 min-w-[150px]">
              <div className="flex flex-col gap-5">
                <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                  <h3 className="font-light text-[var(--color-primaryazure)] text-base tracking-tight leading-[21px]">
                    Company
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Use AnimatedUnderlineLink */}
                  {companyLinks.map((link) => (
                    <AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">
                      {link.title}
                    </AnimatedUnderlineLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Links Column */}
            <div className="flex-1 min-w-[150px]">
              <div className="flex flex-col gap-5">
                <div className="pb-3 relative border-b border-[var(--color-primaryseasalt)] border-opacity-10">
                  <h3 className="font-light text-[var(--color-primaryazure)] text-base tracking-tight leading-[21px]">
                    Our Services
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                   {/* Use AnimatedUnderlineLink */}
                  {serviceLinks.map((link) => (
                    <AnimatedUnderlineLink key={link.title} href={link.href} className="text-base font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[21px]">
                      {link.title}
                    </AnimatedUnderlineLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- End Links Section --- */}

        {/* --- Footer Bottom Bar: Legal & Social --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-[var(--color-primaryseasalt)] border-opacity-10 pt-8 gap-4">
          {/* Legal Links (Left) */}
          <div className="flex gap-6 order-2 sm:order-1">
             {/* Use AnimatedUnderlineLink */}
            {legalLinks.map((link) => (
               <AnimatedUnderlineLink key={link.title} href={link.href} className="text-sm font-light text-[var(--color-primaryseasalt)] tracking-tight leading-[17px]">
                {link.title}
              </AnimatedUnderlineLink>
            ))}
          </div>
          {/* Social Icons (Right) */}
          <div className="flex gap-3 order-1 sm:order-2">
            {socialLinks.map((link) => (
              <Link // Standard link for icons
                  key={link.label}
                  href={link.href}
                  className="text-[var(--color-primaryseasalt)] opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <link.icon className="h-6 w-6" /> {/* Use Lucide icons */}
              </Link>
             ))}
          </div>
        </div>
        {/* --- End Footer Bottom Bar --- */}


        {/* Copyright Row */}
         <div className="mt-8 text-center text-xs text-[var(--color-neutralstaupe-greyneutral-5)]">
          © {currentYear} HWC Financial Planning. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
