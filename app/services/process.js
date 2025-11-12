import React from "react";
import Image from "next/image";
import stepbystep from "../../assats/stepbystep.svg";

const processSteps = [
  {
    phase: "Phase 1: Planning (Month 1)",
    title: "Define Requirements",
    details: "Define number of positions, required skills, compensation budget, and timeline.",
  },
  {
    phase: "Phase 2: College Outreach (Month 1-2)",
    title: "Campus Engagement",
    details: "Identify target colleges, schedule campus visits, and conduct pre-placement presentations.",
  },
  {
    phase: "Phase 3: Screening (Month 2-3)",
    title: "Initial Assessment",
    details: "Collect resumes and conduct aptitude tests and technical assessments to shortlist candidates.",
  },
  {
    phase: "Phase 4: Interviews (Month 3)",
    title: "Final Selection",
    details: "Conduct technical and HR interviews to assess skills and culture fit before distributing offers.",
  },
  {
    phase: "Phase 5: Training (Month 4-6)",
    title: "Pre-Joining Preparation",
    details: "Run technical bootcamps, project-based learning, and soft skills training for job-readiness.",
  },
  {
    phase: "Phase 6: Onboarding (Month 6)",
    title: "Integration",
    details: "Handle joining formalities, team introductions, initial assignments, and mentorship pairing.",
  },
];

const Process = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Our Campus Hiring Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured, end-to-end process designed to deliver quality talent
            efficiently, from initial planning to final onboarding.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left Column: Process Steps */}
          <div className="relative">
            <div
              className="absolute left-4 top-0 h-full w-0.5 bg-border -z-10"
              aria-hidden="true"
            ></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary">{step.phase}</p>
                  <h3 className="text-xl font-semibold text-foreground mt-1">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="animate-fade-in-up lg:order-last order-first">
            <Image
              src={stepbystep}
              alt="Step by step hiring process"
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;