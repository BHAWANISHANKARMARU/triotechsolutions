"use client";
import {
  Check,
  DollarSign,
  Rocket,
  Shuffle,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Cost Savings",
    icon: DollarSign,
    items: [
      "30-40% lower than in-house hiring",
      "No employee benefits overhead",
      "No recruitment costs",
      "Reduced infrastructure expenses",
    ],
  },
  {
    title: "Speed to Market",
    icon: Rocket,
    items: [
      "Pre-formed teams available",
      "Quick project initiation",
      "Faster product delivery",
    ],
  },
  {
    title: "Flexibility",
    icon: Shuffle,
    items: [
      "Scale team size easily",
      "Add/remove resources as needed",
      "No long-term employment obligations",
    ],
  },
  {
    title: "Administrative Relief",
    icon: ShieldCheck,
    items: [
      "We handle payroll and HR",
      "Manage employee benefits",
      "Handle tax and compliance",
    ],
  },
  {
    title: "Quality Assurance",
    icon: BadgeCheck,
    items: [
      "Skilled IT professionals",
      "Ongoing performance monitoring",
      "Quick replacement if needed",
    ],
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Key Benefits of IT Outsourcing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {benefit.items.map((item) => (
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

export default KeyBenefits;
