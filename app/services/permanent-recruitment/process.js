"use client";
import Image from "next/image";
import stepbystep from "../../../assats/stepbystep.svg";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description: "We start with a deep dive into your technical needs, company culture, and role requirements to ensure perfect alignment.",
  },
  {
    step: "02",
    title: "Targeted Sourcing & Vetting",
    description: "Leveraging our extensive network, we source and rigorously vet candidates through multi-stage technical and behavioral screenings.",
  },
  {
    step: "03",
    title: "Candidate Shortlist",
    description: "You receive a curated shortlist of 3-5 top-tier candidates, complete with detailed profiles and our evaluation reports.",
  },
  {
    step: "04",
    title: "Interview & Offer",
    description: "We manage the entire interview process, from scheduling to feedback. We then assist with offer negotiation to secure your chosen talent.",
  },
  {
    step: "05",
    title: "Onboarding & Follow-up",
    description: "Our support continues beyond the hire. We ensure a smooth onboarding process and conduct 30-60-90 day check-ins to guarantee success.",
  },
];

const RecruitmentProcess = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Proven Recruitment Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a structured, transparent process designed to deliver the right talent, efficiently and effectively.
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
          <div className="animate-fade-in-up hidden lg:block">
            <Image
              src={stepbystep}
              alt="Step-by-step hiring process"
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

export default RecruitmentProcess;
