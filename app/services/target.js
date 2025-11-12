import React from "react";
import { Award, Building, Globe, CheckCircle2 } from "lucide-react";

const targetData = [
  {
    title: "Tier-1 Colleges",
    icon: <Award className="h-8 w-8" />,
    points: ["IITs, NITs, IIITs", "BITS Pilani", "Top state universities"],
  },
  {
    title: "Tier-2 & Tier-3 Colleges",
    icon: <Building className="h-8 w-8" />,
    points: ["Regional engineering colleges", "Private universities", "Affiliated colleges"],
  },
  {
    title: "Geographic Coverage",
    icon: <Globe className="h-8 w-8" />,
    points: ["Pan-India coverage", "Focus on IT hubs", "Regional talent pools"],
  },
];

const TargetColleges = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Target Colleges & Universities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with a wide network of educational institutions to source
            the best talent, from premier institutes to regional colleges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {targetData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col items-start"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
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
        <p className="text-center text-muted-foreground mt-12 italic">
          *We can customize our outreach to target specific colleges based on
          your preference and hiring strategy.
        </p>
      </div>
    </section>
  );
};

export default TargetColleges;