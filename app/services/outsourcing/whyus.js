"use client";
import { UserCheck, GitMerge, Award, ShieldCheck, Check } from "lucide-react";

const reasons = [
  {
    title: 'Pre-Vetted Talent',
    icon: UserCheck,
    items: ['Rigorous technical screening', '3+ years average experience', 'Strong communication skills'],
  },
  {
    title: 'Seamless Integration',
    icon: GitMerge,
    items: ['Follow your processes', 'Use your tools', 'Align with your culture'],
  },
  {
    title: 'Proven Delivery',
    icon: Award,
    items: ['95% on-time project delivery', '90% client retention rate', '500+ projects completed'],
  },
  {
    title: 'Risk Mitigation',
    icon: ShieldCheck,
    items: ['Quick replacement guarantee', 'Performance monitoring', 'Regular quality audits'],
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Our Outsourcing Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide more than just talent; we deliver a reliable, integrated,
            and high-performing extension of your team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{reason.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {reason.items.map((item) => (
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

export default WhyUs;
