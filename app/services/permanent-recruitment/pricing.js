"use client";
import Link from "next/link";
import { Check, BadgePercent, Gem, Combine } from "lucide-react";

const pricingModels = [
  {
    title: "Contingency Based",
    icon: <BadgePercent className="h-8 w-8" />,
    description: "Our most popular model. You only pay a fee upon a successful hire.",
    features: [
      "No upfront costs or hidden fees",
      "Fee is a set percentage of the candidate's annual salary",
      "Includes our 90-day replacement guarantee",
      "Ideal for most mid-to-senior level roles",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: true,
  },
  {
    title: "Retained Search",
    icon: <Gem className="h-8 w-8" />,
    description: "A dedicated, exclusive search for critical senior or executive roles.",
    features: [
      "Dedicated recruiter and research team",
      "Phased payment structure",
      "Highest priority and deepest market search",
      "For confidential or hard-to-fill positions",
    ],
    cta: "Inquire Now",
    href: "/contact",
    highlighted: false,
  },
  {
    title: "Hybrid Model",
    icon: <Combine className="h-8 w-8" />,
    description: "A flexible combination of contingency and retained approaches.",
    features: [
      "Small upfront retainer to initiate the search",
      "Reduced success fee upon placement",
      "Priority service over contingency searches",
      "Great for multiple hires or urgent needs",
    ],
    cta: "Discuss Options",
    href: "/contact",
    highlighted: false,
  },
];

const PricingModels = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Flexible & Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the model that best aligns with your hiring strategy and budget. We are committed to providing value-driven solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingModels.map((model) => (
            <div
              key={model.title}
              className={`relative bg-card border border-border rounded-2xl p-8 flex flex-col shadow-card-shadow transition-transform duration-300 ${model.highlighted ? 'ring-2 ring-primary scale-105' : 'lg:hover:-translate-y-2'}`}
            >
              {model.highlighted && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-primary-foreground bg-primary">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-shrink-0 text-primary">{model.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6">
                {model.title}
              </h3>
              <p className="text-muted-foreground mt-2 flex-grow">{model.description}</p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
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
                  className={`inline-block w-full text-center rounded-md px-6 py-3 text-base font-semibold shadow-sm transition-colors ${model.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary/15 text-primary hover:bg-primary/25'}`}
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
