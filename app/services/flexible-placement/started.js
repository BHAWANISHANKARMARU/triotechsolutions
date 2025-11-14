"use client";
import Link from "next/link";
import { FileText, Calendar, Mail } from "lucide-react";

const options = [
  {
    title: "Quick Start",
    description: "Share your requirement and get candidates within 48 hours.",
    icon: FileText,
    buttonText: "Post Requirement",
    href: "/contact?subject=Requirement",
    primary: true,
  },
  {
    title: "Consultation",
    description: "Discuss your project with our staffing experts.",
    icon: Calendar,
    buttonText: "Schedule Call",
    href: "/contact?subject=Consultation",
  },
  {
    title: "Request Quote",
    description: "Get custom pricing for your specific needs.",
    icon: Mail,
    buttonText: "Request Quote",
    href: "/contact?subject=Quote+Request",
  },
];

const GetStarted = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
          Ready to Scale Your IT Team?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Let's connect. Choose the option that works best for you, and our team
          will get back to you promptly.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-12 md:my-16">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={option.title} className="bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center shadow-sm hover-lift">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{option.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow mb-6">{option.description}</p>
                <Link href={option.href} className={`font-semibold py-3 px-6 rounded-md w-full mt-auto ${option.primary ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                  {option.buttonText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
