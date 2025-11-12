"use client";

import Image from "next/image";
import stepbystep from "../../../assats/stepbystep.svg";

const processSteps = [
  {
    step: "01",
    title: "Share Requirements",
    description:
      "Define the role, skills, culture, timeline, and budget. We listen to understand your unique needs.",
  },
  {
    step: "02",
    title: "Source & Screen",
    description:
      "We access our vast talent pool, conducting technical assessments and background checks to ensure quality.",
  },
  {
    step: "03",
    title: "Review Candidates",
    description:
      "Receive a curated shortlist of top candidates within 24-48 hours, complete with detailed profiles and evaluations.",
  },
  {
    step: "04",
    title: "Interview & Select",
    description:
      "We coordinate interviews, provide feedback support, and negotiate offers on your behalf to secure your chosen candidate.",
  },
  {
    step: "05",
    title: "Onboard & Support",
    description:
      "We ensure a smooth integration into your team, backed by our 60-day placement guarantee and ongoing performance check-ins.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Streamlined Hiring Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From understanding your needs to onboarding your new hire, we make
            the process simple and efficient.
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
              alt="Step by step hiring process"
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
