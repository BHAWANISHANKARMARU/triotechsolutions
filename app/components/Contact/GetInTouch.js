"use client";
import Link from "next/link";
import { Mail } from "lucide-react";

const touchPoints = [
  {
    title: "For Employers",
    subtitle: "Looking to Hire IT Talent?",
    description:
      "Discuss hiring needs, request a custom quote, or schedule a consultation with our experts.",
    email: "employers@triotechsolutions.com",
    cta: {
      text: "Schedule Consultation",
      href: "/contact#form",
    },
  },
  {
    title: "For Job Seekers",
    subtitle: "Looking for IT Career Opportunities?",
    description:
      "Browse current openings, upload your resume for future roles, or get career counseling from our team.",
    email: "careers@triotechsolutions.com",
    cta: {
      text: "Browse Jobs",
      href: "/jobs",
    },
  },
  {
    title: "General Inquiries",
    subtitle: "Have Questions About Our Services?",
    description:
      "For service offerings, partnership opportunities, media inquiries, or any other questions.",
    email: "info@triotechsolutions.com",
    cta: {
      text: "Send a Message",
      href: "/contact#form",
    },
  },
];

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to hire or seeking your next role, we have a
            dedicated team ready to help you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touchPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col shadow-card-shadow hover-lift"
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                {point.subtitle}
              </p>
              <p className="text-muted-foreground flex-grow">
                {point.description}
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${point.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{point.email}</span>
                </a>
              </div>
              <div className="mt-6">
                <Link
                  href={point.cta.href}
                  className="inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  {point.cta.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
