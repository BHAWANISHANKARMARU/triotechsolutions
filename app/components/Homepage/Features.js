"use client";

import Image from "next/image";
import TechnologyExpertise from "../../../assats/TechnologyExpertise.svg";
import TechnologyExpertise2 from "../../../assats/TechnologyExpertise2.svg";

const Features = () => {
  const industries = [
    "Financial Services & FinTech",
    "Healthcare Technology",
    "E-commerce & Retail",
    "Manufacturing & IoT",
    "Startups & Scale-ups",
    "Enterprise Software Companies",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Understand your needs, define role requirements, and assess company culture.",
    },
    {
      step: "02",
      title: "Talent Matching",
      description:
        "Access our IT talent pool of pre-screened candidates for skills & culture alignment.",
    },
    {
      step: "03",
      title: "Interview & Selection",
      description:
        "We coordinate interviews, technical assessments, and background verification.",
    },
    {
      step: "04",
      title: "Onboarding & Support",
      description:
        "Ensure a smooth integration with ongoing performance tracking and continuous support.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Expertise Across Industries
          </h2>
        </div>

        <div className="space-y-20">
          {/* Row 1: Industries List (Left) & Image 1 (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-9 pl-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg text-muted-foreground">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
            <div className="animate-fade-in-up pt-8" style={{ animationDelay: "0.2s" }}>
              <Image
                src={TechnologyExpertise}
                alt="Diverse Industry Expertise"
                width={500}
                height={450}
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            
          </div>
          
            
          </div>
        </div>

        {/* How It Works Section */}
        <div>
          <div className="mb-8">
            
          </div>
           {/* Row 2: Image 2 (Left) & How It Works (Right) */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8">
            <div className="animate-fade-in-up order-last lg:order-first" style={{ animationDelay: "0.4s" }}>
              <Image
                src={TechnologyExpertise2}
                alt="Specialized Technology sectors"
                width={500}
                height={350}
                className="w-full max-w-md mx-auto h-auto rounded-lg"
              />
            </div>
            <div>
              {processSteps.map((item) => (
                <div key={item.step} className="relative pl-16 mb-8 last:mb-0">
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/50">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    </section>
  );
};

export default Features;
