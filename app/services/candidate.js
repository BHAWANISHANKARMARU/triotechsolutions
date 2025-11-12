import React from "react";
import { Cpu, ClipboardCheck, BrainCircuit, CheckCircle2 } from "lucide-react";

const candidateData = [
  {
    title: "Engineering Streams",
    icon: <Cpu className="h-8 w-8" />,
    points: [
      "Computer Science (CSE)",
      "Information Technology (IT)",
      "Electronics & Communication (ECE)",
      "Other streams with strong coding skills",
    ],
  },
  {
    title: "Eligibility Criteria",
    icon: <ClipboardCheck className="h-8 w-8" />,
    points: [
      "Bachelor's degree (BE/B.Tech)",
      "Minimum 60-65% aggregate score",
      "No active backlogs",
      "Current or previous graduation year",
    ],
  },
  {
    title: "Skills We Assess",
    icon: <BrainCircuit className="h-8 w-8" />,
    points: [
      "Programming fundamentals",
      "Problem-solving ability",
      "Logical reasoning",
      "Communication skills",
      "Learning agility",
    ],
  },
];

const CandidateProfiles = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Our Ideal Candidate Profiles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We focus on sourcing candidates with strong academic backgrounds,
            fundamental technical skills, and a high potential for growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {candidateData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col items-start"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateProfiles;