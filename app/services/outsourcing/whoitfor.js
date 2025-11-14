"use client";
import { Users, UserMinus, TrendingUp, Target, Check } from "lucide-react";

const sections = [
  {
    title: "Dedicated Teams",
    icon: Users,
    items: [
      "Entire development teams",
      "Ongoing project requirements",
      "Long-term IT support",
    ],
  },
  {
    title: "Reduced HR Overhead",
    icon: UserMinus,
    items: [
      "No recruitment hassle",
      "No payroll administration",
      "No HR management burden",
    ],
  },
  {
    title: "Cost Predictability",
    icon: TrendingUp,
    items: ["Fixed monthly costs", "All-inclusive pricing", "Budget-friendly scaling"],
  },
  {
    title: "Focus on Core Business",
    icon: Target,
    items: [
      "Let us handle IT staffing",
      "You focus on product/business",
      "Reduce operational complexity",
    ],
  },
];

const WhoItFor = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Benefits from IT Outsourcing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our outsourcing model is ideal for businesses seeking to enhance
            efficiency, reduce overhead, and focus on their core objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
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

export default WhoItFor;
