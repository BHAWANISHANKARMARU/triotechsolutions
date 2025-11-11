"use client";
import Link from "next/link";

const linkColumns = [
  {
    title: "For Employers",
    links: [
      { label: "Post a Job", href: "/contact" },
      { label: "View Our Services", href: "/services" },
      { label: "Success Stories", href: "/for-employers#success" },
      { label: "Pricing Information", href: "/for-employers#pricing" },
    ],
  },
  {
    title: "For Job Seekers",
    links: [
      { label: "Browse IT Jobs", href: "/jobs" },
      { label: "Create Profile", href: "/contact" },
      { label: "Career Resources", href: "/for-job-seekers#resources" },
      { label: "Resume Tips", href: "/for-job-seekers#resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Process", href: "/about-us#approach" },
      { label: "Industries We Serve", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function QuickLinks() {
  return (
    <section id="quick-links" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick Links
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find what you're looking for faster with these helpful links.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xl font-semibold text-primary mb-4 border-b-2 border-primary/20 pb-2">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
