import React from "react";
import { Users, Scaling, Award, Briefcase, CheckCircle2 } from "lucide-react";

const whoForData = [
  {
    title: "Entry-Level IT Talent",
    icon: <Users className="h-8 w-8" />,
    points: [
      "Junior developers and engineers",
      "Fresh perspectives and energy",
      "Cost-effective team building",
    ],
  },
  {
    title: "Scalable Growth",
    icon: <Scaling className="h-8 w-8" />,
    points: [
      "Building teams quickly",
      "Expanding development capacity",
      "Multiple openings to fill",
    ],
  },
  {
    title: "Long-Term Investment",
    icon: <Award className="h-8 w-8" />,
    points: [
      "Cultivate company culture early",
      "Build loyalty from day one",
      "Lower attrition rates",
    ],
  },
  {
    title: "Structured Programs",
    icon: <Briefcase className="h-8 w-8" />,
    points: [
      "Graduate trainee programs",
      "Internship to full-time pipelines",
      "Technical apprenticeships",
    ],
  },
];

const Who = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Who It's For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our campus hiring solutions are ideal for companies that need to build a robust, cost-effective, and loyal technology workforce from the ground up.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {whoForData.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col">
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
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

export default Who;