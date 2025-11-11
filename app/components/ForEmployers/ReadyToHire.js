"use client";
import Link from "next/link";
import { PhoneCall, FileText } from "lucide-react";

const ctaOptions = [
  {
    title: "Schedule Consultation",
    description:
      "Discuss your hiring needs with our IT staffing experts and get a personalized strategy.",
    icon: <PhoneCall className="h-8 w-8" />,
    ctaText: "Schedule a Call",
    href: "/contact",
  },
  {
    title: "Request a Quote",
    description:
      "Get custom, transparent pricing for your specific hiring requirements.",
    icon: <FileText className="h-8 w-8" />,
    ctaText: "Request Quote",
    href: "/contact#form",
  },
];

const ReadyToHire = () => {
  return (
    <section id="ready-to-hire" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Hire Top IT Talent?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's build your dream team. Choose an option below to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ctaOptions.map((option) => (
            <div
              key={option.title}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift"
            >
              <div className="text-primary">{option.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-2">
                {option.title}
              </h3>
              <p className="text-muted-foreground flex-grow mb-8">
                {option.description}
              </p>
              <Link
                href={option.href}
                className="mt-auto w-full inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                {option.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyToHire;
