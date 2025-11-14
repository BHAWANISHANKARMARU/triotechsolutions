"use client";
import Link from "next/link";
import { PackageCheck, SearchSlash, Percent, Check } from "lucide-react";

const pricingPoints = [
  {
    title: "All-Inclusive Pricing",
    icon: PackageCheck,
    items: [
      "Salaries & Employee benefits",
      "Infrastructure costs",
      "Administrative overhead",
      "Recruitment and training",
    ],
  },
  {
    title: "No Hidden Costs",
    icon: SearchSlash,
    items: [
      "Clear monthly rate per resource",
      "No surprise expenses",
      "Fixed costs for predictable budgeting",
    ],
  },
  {
    title: "Volume Discounts",
    icon: Percent,
    items: [
      "5-10 resources: 10% discount",
      "10+ resources: 15% discount",
      "Long-term contracts: Additional discounts",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing Structure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, predictable, and all-inclusive monthly billing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPoints.map((point) => (
            <div key={point.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{point.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {point.items.map((item) => (
                  <li key={item} className="flex items-start text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact?subject=Detailed+Pricing+Request" className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Request Detailed Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
