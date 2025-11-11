"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const contactOptions = [
  {
    name: "General Inquiries",
    description:
      "Have a question? Send us an email, and we'll get back to you within 24 hours.",
    icon: <Mail className="h-8 w-8" />,
    cta: "Email Us",
    href: "mailto:careers@triotechsolutions.com",
    primary: true,
  },
  {
    name: "Career Counseling",
    description:
      "Schedule a free consultation with our career advisors to discuss your goals.",
    icon: <Phone className="h-8 w-8" />,
    cta: "Schedule a Call",
    href: "/contact#form", // Or a direct Calendly link
    primary: false,
  },
];

const Contact = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Our Candidate Services Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to support you. Choose your preferred way to connect with
            us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactOptions.map((option) => (
            <div
              key={option.name}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col text-center items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                {option.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {option.name}
              </h3>
              <p className="text-muted-foreground flex-grow mb-6">
                {option.description}
              </p>
              <Link
                href={option.href}
                className={`inline-block rounded-md px-8 py-3 text-base font-semibold shadow-sm transition-colors ${
                  option.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
