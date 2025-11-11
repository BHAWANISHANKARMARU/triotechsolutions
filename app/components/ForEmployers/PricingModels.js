"use client";
import Link from "next/link";
import { Check, Gem, FileText, Users } from "lucide-react";

const pricingModels = [
  {
    title: "Permanent Placement",
    icon: <Gem className="h-8 w-8" />,
    description: "Ideal for building your core team with long-term talent.",
    features: [
      "Pay only on successful hire",
      "Fee based on a percentage of annual salary",
      "90-day replacement guarantee",
    ],
    cta: "Request a Quote",
    href: "/contact",
  },
  {
    title: "Contract Staffing",
    icon: <FileText className="h-8 w-8" />,
    description:
      "Perfect for project-based needs and flexible workforce management.",
    features: [
      "Monthly billing per contractor",
      "Transparent, all-inclusive rate cards",
      "Volume discounts available for teams",
    ],
    cta: "Get Rates",
    href: "/contact",
  },
  {
    title: "Managed Teams",
    icon: <Users className="h-8 w-8" />,
    description: "A fully managed, dedicated team as an extension of your own.",
    features: [
      "Fixed monthly cost per team",
      "All HR and administration included",
      "Scalable team structure as needed",
    ],
    cta: "Explore Solutions",
    href: "/contact",
  },
];

const PricingModels = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing Models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible and straightforward pricing designed to align with your
            hiring goals and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingModels.map((model) => (
            <div
              key={model.title}
              className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-card-shadow hover-lift"
            >
              <div className="flex-shrink-0 text-primary">{model.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6">
                {model.title}
              </h3>
              <p className="text-muted-foreground mt-2">{model.description}</p>
              <ul className="mt-6 space-y-3 text-muted-foreground flex-grow">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={model.href}
                  className="inline-block w-full text-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  {model.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingModels;
