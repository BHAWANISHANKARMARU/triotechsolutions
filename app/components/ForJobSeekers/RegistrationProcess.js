"use client";
import Link from "next/link";
import { UserPlus, UploadCloud, FileText, Search } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Create Account",
    description: "Sign up quickly with your email and a secure password.",
    icon: <UserPlus className="h-8 w-8" />,
  },
  {
    step: "02",
    title: "Upload Resume",
    description: "Add your resume in PDF or DOC format to our secure database.",
    icon: <UploadCloud className="h-8 w-8" />,
  },
  {
    step: "03",
    title: "Complete Profile",
    description:
      "Fill in your skills and career preferences to get better matches.",
    icon: <FileText className="h-8 w-8" />,
  },
  {
    step: "04",
    title: "Start Applying",
    description: "Browse and apply for jobs that match your profile and goals.",
    icon: <Search className="h-8 w-8" />,
  },
];

const RegistrationProcess = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick & Easy Signup
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our talent network in less than 5 minutes and let opportunities
            find you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="text-center flex flex-col items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/contact#form"
            className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;
