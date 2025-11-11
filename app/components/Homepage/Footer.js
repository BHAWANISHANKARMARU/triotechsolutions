"use client";

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const employerLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/employers", label: "Why Choose Us" },
  { href: "/contact", label: "Schedule Consultation" },
];

const seekerLinks = [
  { href: "/jobs", label: "Browse IT Jobs" },
  { href: "/job-seekers", label: "Career Resources" },
  { href: "/contact", label: "Upload Resume" },
];

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers", label: "Work With Us" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    href: "#",
    label: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    href: "#",
    label: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    href: "#",
    label: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-foreground">
              Trio Tech Solutions
            </h3>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Your strategic partner in IT staffing, dedicated to connecting
              exceptional technology professionals with innovative companies.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-foreground">Contact Us</h4>
              <a
                href="mailto:info@triotechsolutions.com"
                className="mt-2 block text-muted-foreground hover:text-primary transition-colors"
              >
                info@triotechsolutions.com
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                [Placeholder - Office Address, City]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">For Employers</p>
              <ul className="mt-4 space-y-2">
                {employerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">For Job Seekers</p>
              <ul className="mt-4 space-y-2">
                {seekerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Company</p>
              <ul className="mt-4 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trio Tech Solutions. All Rights
            Reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
