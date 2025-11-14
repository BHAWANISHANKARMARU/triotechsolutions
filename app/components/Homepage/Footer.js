"use client";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  const linkSections = [
    {
      title: "Solutions",
      links: [
        { label: "Permanent Recruitment", href: "/services/permanent-recruitment" },
        { label: "Contract Staffing", href: "/services/contract-staffing" },
        { label: "Corporate Training", href: "/services/training" },
        { label: "View All Services", href: "/services" },
      ],
    },
    {
      title: "For Talent",
      links: [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Career Resources", href: "/for-job-seekers" },
        { label: "Submit Resume", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Work With Us", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", label: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
    { href: "#", label: "Twitter", icon: <Twitter className="h-5 w-5" /> },
    { href: "#", label: "Facebook", icon: <Facebook className="h-5 w-5" /> },
    { href: "#", label: "Instagram", icon: <Instagram className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-foreground">
              Trio Tech Solutions
            </h3>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Connecting exceptional IT talent with innovative companies.
            </p>
            <div className="mt-8">
              <h4 className="font-semibold text-foreground">
                Stay Updated
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest industry insights and job opportunities.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-md bg-primary p-2.5 text-primary-foreground hover:bg-primary/90"
                  aria-label="Subscribe"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {linkSections.map((section) => (
              <div key={section.title}>
                <p className="font-semibold text-foreground">{section.title}</p>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trio Tech Solutions. All Rights Reserved.
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
