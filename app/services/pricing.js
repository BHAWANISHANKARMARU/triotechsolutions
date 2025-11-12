import React from "react";
import Link from "next/link";
import { Tag, Package, Percent, Calendar } from "lucide-react";

const pricingData = [
  {
    title: "Per Hire Pricing",
    details:
      "Pay a fixed fee per successful hire. Includes sourcing, screening, and interviews. Training is optional at an additional cost.",
    icon: <Tag className="h-8 w-8" />,
  },
  {
    title: "With Training Package",
    details:
      "An all-inclusive fee per trained hire, which covers an 8-12 week job-readiness bootcamp.",
    icon: <Package className="h-8 w-8" />,
  },
  {
    title: "Bulk Hiring Discount",
    details:
      "Get discounts of 10-20% for hiring batches of 10, 20, or 50+ candidates.",
    icon: <Percent className="h-8 w-8" />,
  },
  {
    title: "Annual Contract",
    details:
      "A retainer model for a fixed number of hires per year, with priority access and a dedicated team.",
    icon: <Calendar className="h-8 w-8" />,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Flexible Pricing Models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent and adaptable pricing to suit your budget and hiring
            volume, ensuring maximum value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pricingData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col text-center items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground flex-grow">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Request Custom Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;