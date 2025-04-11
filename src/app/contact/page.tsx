import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
// Import ContactFormSection when ready in Phase 7
import { ContactFormSection } from '@/components/layout/ContactFormSection';

// Contact Us Page Component
const ContactUsPage = () => {
  return (
    <>
      {/* === Hero Section === */}
      <HeroSection
        title="Get In Touch"
        subtitle="We're here to help. Reach out to discuss your financial planning needs."
        backgroundImageUrl="/images/placeholders/contact-hero.jpg"
        backgroundColorClass="bg-gray-100"
      />

      {/* === Placeholder for Integrated Contact Form === */}
      {/* The Contact Form Section component will be integrated here directly */}
      {/* instead of appearing before the footer (as per plan Phase 7) */}
    
       
          {/* Placeholder for the actual component: */}
          <ContactFormSection /> 
           {/* TODO: Add other contact details like map, phone, address if needed */}
       
  

    </>
  );
};

export default ContactUsPage;
