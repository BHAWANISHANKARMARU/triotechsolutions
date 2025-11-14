"use client";
import Image from "next/image";
import assessmentImage from "../../../assats/TechnologyExpertise.svg";

const assessmentSteps = [
  {
    step: "01",
    title: "Technical & Skills Evaluation",
    description: "We conduct rigorous, role-specific technical assessments, including live coding challenges and system design interviews, to validate a candidate's expertise and problem-solving abilities.",
  },
  {
    step: "02",
    title: "Behavioral & Cultural Assessment",
    description: "Beyond technical skills, we perform in-depth behavioral interviews to evaluate communication, teamwork, and alignment with your company's unique culture and values.",
  },
  {
    step: "03",
    title: "Comprehensive Background Verification",
    description: "To ensure trust and security, we conduct thorough background checks, including employment history verification, professional reference checks, and criminal record screening.",
  },
];

const AssessmentProcess = () => {
  return (
    <section id="assessment" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Comprehensive Assessment Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We leave no stone unturned. Our multi-stage assessment process ensures you only meet candidates who are technically proficient, culturally aligned, and thoroughly vetted.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="animate-fade-in-up hidden lg:block">
            <Image
              src={assessmentImage}
              alt="Candidate assessment process"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>
          {/* Right Column: Process Steps */}
          <div className="relative">
            <div
              className="absolute left-4 top-0 h-full w-0.5 bg-border"
              aria-hidden="true"
            ></div>
            {assessmentSteps.map((item) => (
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
        </div>
      </div>
    </section>
  );
};

export default AssessmentProcess;
