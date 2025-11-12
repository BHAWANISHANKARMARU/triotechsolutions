import React from "react";
import { Briefcase, Target, Building } from "lucide-react";

const hiringModelsData = [
  {
    title: "Direct Campus Placement",
    description:
      "We coordinate campus drives and interviews, and you hire selected candidates directly. Ideal for companies with strong brands and in-house training.",
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    title: "Train & Hire Model",
    description:
      "We pre-train candidates in your specific tech stack, delivering job-ready professionals and reducing your onboarding time.",
    icon: <Target className="h-8 w-8" />,
  },
  {
    title: "Internship to Full-Time",
    description:
      "Evaluate candidates over a 3-6 month internship before making a full-time commitment. A low-risk way to assess cultural fit and build your talent pipeline.",
    icon: <Building className="h-8 w-8" />,
  },
];

const HiringModels = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Our Hiring Models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Flexible engagement models tailored to your specific hiring needs and training capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {hiringModelsData.map((model) => (
            <div key={model.title} className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col items-start">
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
                {model.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {model.title}
              </h3>
              <p className="text-muted-foreground flex-grow">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringModels;