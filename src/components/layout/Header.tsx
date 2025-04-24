"use client"; // Client component because we use hooks

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons

import { Logo } from "@/components/ui/Logo"; // Logo component
import { Button } from "@/components/ui/Button"; // Button component (with updated pill variant)
import { cn } from "@/lib/utils"; // Utility for class names

// Type definition for the state tracking the hovered pill
type HoveredPillState = { left: number; width: number } | null;

// Placeholder data for dropdown (move to lib/data later)
const serviceLinks = [
  { href: "/services/insurance", label: "Insurance" },
  { href: "/services/accounting", label: "Accounting" },
  { href: "/services/wealth-management", label: "Wealth Management" },
  { href: "/services/healthcare", label: "Healthcare Planning" },
  { href: "/services/property", label: "Property" },
];
// Placeholder data for main nav links (move to lib/data later)
const navLinks = [
  //{ href: '/about', label: 'About Us' },
  { href: "/newsroom", label: "Newsroom" },
];

// Header Component Definition
const Header = () => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for services dropdown
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  // Ref for services dropdown container (used for click outside detection)
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  // --- State and Refs for Sliding Animation ---
  // State to store the position {left, width} of the currently hovered pill, or null
  const [hoveredPill, setHoveredPill] = useState<HoveredPillState>(null);
  // Ref for the container div wrapping the desktop navigation pills
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  // --- End Sliding Animation State/Refs ---

  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesMenuOpen(false); // Close other menus
  };

  // Toggle function for services dropdown
  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  // Effect to close services dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesMenuRef]);

  // --- Handlers for Sliding Animation ---
  // When mouse enters a navigation pill button
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget; // The button/link element hovered
    const container = pillsContainerRef.current; // The container div
    if (!container) return; // Exit if container ref not set yet

    // Calculate the button's position relative to the container
    const left = target.offsetLeft; // Distance from container's left edge
    const width = target.offsetWidth; // Width of the button
    // Update state to store these dimensions
    setHoveredPill({ left, width });
  };

  // When mouse leaves the entire navigation pill container
  const handleMouseLeave = () => {
    setHoveredPill(null); // Reset state, hiding the sliding background
  };
  // --- End Sliding Animation Handlers ---

  return (
    // Sticky Header with glassmorphism styles
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="HWC Home">
              <Logo className="text-[var(--color-hwc-white)]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Ref for click outside detection (services dropdown) */}
          <div className="hidden md:flex md:items-center" ref={servicesMenuRef}>
            {/* Container for pills: Added relative positioning, ref, and mouse leave handler */}
            <div
              ref={pillsContainerRef} // Ref for calculating relative positions
              onMouseLeave={handleMouseLeave} // Reset hover state when leaving container
              className="relative flex items-center space-x-1 bg-black/5 rounded-full p-1" // Need relative for absolute child
            >
              {/* Sliding Background Element */}
              <div
                className={cn(
                  "absolute top-1 bottom-1 rounded-full bg-[var(--color-hwc-blue-light)]/80", // Background style
                  "transition-[left,width] duration-300 ease-in-out", // Animation transition
                  "-z-10", // Position behind button text/icons
                  hoveredPill ? "opacity-100" : "opacity-0", // Fade in/out (optional, could remove if only relying on position/width)
                )}
                style={
                  hoveredPill
                    ? // Apply dynamic left and width based on hovered pill state
                      {
                        left: `${hoveredPill.left}px`,
                        width: `${hoveredPill.width}px`,
                      }
                    : // Default to zero width when not hovered
                      { left: "0px", width: "0px" }
                }
                aria-hidden="true"
              />

              {/* About Us Link */}
              <Button
                variant="pill"
                size="sm"
                asChild
                className="text-sm relative z-10" // Ensure text is above sliding background
                onMouseEnter={handleMouseEnter} // Update state on hover
              >
                <Link href="/about">About Us</Link>
              </Button>

              {/* Services Dropdown Section */}
              <div className="relative z-10" onMouseEnter={handleMouseEnter}>
                {" "}
                {/* Ensure dropdown button is clickable */}
                <Button
                  id="services-menu-button"
                  variant="pill"
                  size="sm"
                  onClick={toggleServicesMenu}
                  data-state={isServicesMenuOpen ? "open" : "closed"} // For active state styling
                  aria-haspopup="true"
                  aria-expanded={isServicesMenuOpen}
                  className="text-sm flex items-center gap-1 relative z-10" // Ensure text is above sliding background
                  // Update state on hover
                >
                  Our Services
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      isServicesMenuOpen ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden="true"
                  />
                </Button>
                {/* Dropdown Menu */}
                {isServicesMenuOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 origin-top-center rounded-md bg-[var(--color-hwc-white)] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="services-menu-button"
                    tabIndex={-1}
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links (Newsroom) */}
              {navLinks.map(
                (
                  link, // Only maps Newsroom now
                ) => (
                  <Button
                    key={link.href}
                    variant="pill"
                    size="sm"
                    asChild
                    className="text-sm relative z-10" // Ensure text is above sliding background
                    onMouseEnter={handleMouseEnter} // Update state on hover
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ),
              )}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="text-[var(--color-hwc-white)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {/* Mobile menu content... */}
        <div className="space-y-1 px-4 pb-4 pt-3">
          <Link
            href="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <div className="pt-2">
            <p className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
              Our Services
            </p>
            <div className="pl-3 space-y-1">
              {serviceLinks.map((service) => (
                <Link
                  key={`mobile-${service.href}`}
                  href={service.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="pt-4 mt-2 border-t border-gray-200">
            <Button variant="default" size="sm" className="w-full">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
