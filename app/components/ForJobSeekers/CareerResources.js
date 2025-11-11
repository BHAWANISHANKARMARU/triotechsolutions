"use client";
import { FileText, Mic, TrendingUp, Rocket } from "lucide-react";

const resources = [
  {
    name: "Resume Tips",
    description:
      "Optimize for IT roles, highlight technical skills, and quantify achievements.",
    icon: <FileText className="h-8 w-8" />,
  },
  {
    name: "Interview Preparation",
    description:
      "Technical interview guides, coding challenges, and behavioral question prep.",
    icon: <Mic className="h-8 w-8" />,
  },
  {
    name: "Salary Information",
    description:
      "IT salary benchmarks, negotiation strategies, and market rate insights.",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    name: "Career Development",
    description:
      "Skill gap analysis, learning recommendations, and certification guidance.",
    icon: <Rocket className="h-8 w-8" />,
  },
];

const CareerResources = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Advance Your Career
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.name}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-card-shadow hover-lift flex flex-col items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {resource.name}
              </h3>
              <p className="text-muted-foreground flex-grow">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerResources;
