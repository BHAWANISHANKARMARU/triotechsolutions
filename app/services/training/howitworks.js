"use client";
import Image from "next/image";
import trainingProcessImage from "../../../assats/traning2.svg";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We begin by evaluating your existing skill levels and identifying specific knowledge gaps to define clear, measurable learning objectives.",
  },
  {
    step: "02",
    title: "Custom Curriculum Design",
    description: "Based on the assessment, we design a tailored curriculum, select the best training format, and schedule sessions that fit your team's availability.",
  },
  {
    step: "03",
    title: "Hands-On Training Delivery",
    description: "Our expert instructors deliver the training through engaging live sessions, self-paced modules, and hands-on, real-world projects.",
  },
  {
    step: "04",
    title: "Evaluation & Certification",
    description: "We measure progress through final assessments and project presentations, issuing skill certifications and detailed performance reports.",
  },
  {
    step: "05",
    title: "Post-Training Support",
    description: "Our commitment doesn't end with the training. We provide ongoing Q&A support, additional resources, and follow-ups to ensure lasting success.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Training Engagement Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured and collaborative process to ensure our training delivers maximum impact and ROI for your business.
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
              src={trainingProcessImage}
              alt="Step-by-step training process"
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
