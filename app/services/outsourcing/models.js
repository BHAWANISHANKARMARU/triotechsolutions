"use client";
import { Users, UserPlus, ArrowRightLeft } from "lucide-react";

const models = [
  {
    title: "Dedicated Team",
    icon: Users,
    description:
      "A full team of IT professionals works exclusively for you, full-time (160 hours/month), and integrates with your processes.",
    bestFor:
      "Long-term projects (6+ months), product development, and ongoing maintenance.",
  },
  {
    title: "Staff Augmentation",
    icon: UserPlus,
    description:
      "Individual specialists supplement your existing team with on-demand expertise and flexible engagement.",
    bestFor:
      "Filling skill gaps, temporary capacity increase, and specialized expertise needs.",
  },
  {
    title: "Build-Operate-Transfer (BOT)",
    icon: ArrowRightLeft,
    description:
      "We build your team, operate it for a defined period, and then transfer the entire operation to you when ready.",
    bestFor:
      "Setting up new offshore/remote teams, opening new locations, and building long-term internal capabilities.",
  },
];

const OutsourcingModels = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Flexible Outsourcing Models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of engagement models to perfectly match your
            business needs, scale, and long-term goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {models.map((model) => (
            <div key={model.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <model.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{model.title}</h3>
              </div>
              <div className="mt-6 space-y-4 flex-grow flex flex-col">
                <p className="text-muted-foreground">{model.description}</p>
                <div className="mt-auto pt-4">
                  <h4 className="font-semibold text-card-foreground">Best For:</h4>
                  <p className="text-sm text-muted-foreground">{model.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutsourcingModels;
