"use client";
import Link from "next/link";
import { FileText, Calendar, Mail } from "lucide-react";
// Icons for each action
const DocumentTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const options = [
  {
    title: "Share Project Details",
    description: "Get specialist recommendations within 48 hours.",
    icon: FileText,
    buttonText: "Share Requirements",
    href: "/contact?subject=Project+Details",
    primary: true,
  },
  {
    title: "Schedule Consultation",
    description: "Discuss your project with our experts.",
    icon: Calendar,
    buttonText: "Schedule Call",
    href: "/contact?subject=Consultation",
  },
  {
    title: "Request Proposal",
    description: "Get a detailed project plan and pricing.",
    icon: Mail,
buttonText: "Request Proposal",
    href: "/contact?subject=Proposal+Request",
  },
];

const GetStarted = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
          Ready to Launch Your Next Project?
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