"use client";

import Image from "next/image";
import stepbystep from "../../../assats/stepbystep.svg";

const processSteps = [
  {
    step: "01",
    title: "Create Your Profile",
    description:
      "Upload your resume, highlight your tech skills, and share your career goals with us in just a few minutes.",
  },
  {
    step: "02",
    title: "We Match You",
    description:
      "Our AI-powered system and expert recruiters match your profile to exclusive job opportunities, including hidden roles.",
  },
  {
    step: "03",
    title: "Interview Preparation",
    description:
      "Receive resume optimization, technical coaching, and mock interview sessions to help you stand out.",
  },
  {
    step: "04",
    title: "Land Your Dream Job",
    description:
      "We coordinate interviews, support you through offer negotiations, and assist with a smooth onboarding process.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Path to a New Career
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process is designed to support you at every step,
            from application to your first day on the job.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Process Steps */}
          <div className="relative">
            <div
              className="absolute left-4 top-0 h-full w-0.5 bg-border"
              aria-hidden="true"
            ></div>
            {processSteps.map((item) => (
              <div key={item.step} className="relative pl-12 pb-12 last:pb-0">
                <div className="absolute left-0 top-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step.charAt(1)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Right Column: Image */}
          <div className="animate-fade-in-up">
            <Image
              src={stepbystep}
              alt="Illustration of career path steps"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
