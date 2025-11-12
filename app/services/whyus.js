import React from "react";
import { Network, Award, ShieldCheck, Layers } from "lucide-react";

const whyUsData = [
  {
    title: "Extensive Network",
    description:
      "Partnerships with 100+ colleges and access to 50,000+ students pan-India.",
    icon: <Network className="h-8 w-8" />,
  },
  {
    title: "Proven Training",
    description:
      "Over 500+ graduates trained with an 85-90% success rate leading to job-ready outcomes.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Multi-stage screening, technical assessments, and background verification for every candidate.",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
  {
    title: "End-to-End Service",
    description:
      "Complete administrative handling from sourcing to onboarding, including post-placement support.",
    icon: <Layers className="h-8 w-8" />,
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Choose Our Campus Hiring
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our deep industry expertise, extensive network, and proven
            processes make us the ideal partner for building your future tech
            team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {whyUsData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col text-center items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;