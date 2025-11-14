"use client";
import { Code, ShieldCheck, Eye, BarChart } from "lucide-react";

const features = [
  {
    name: "IT-Specialized Recruiters",
    description: "Our team consists of former IT professionals who understand your technical needs deeply. We speak your language, which leads to better candidate matches.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Quality Guarantee",
    description: "We stand by our placements with a 90-day replacement guarantee. Our thorough vetting process ensures you only meet high-caliber, committed candidates.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: "Transparent Process",
    description: "You'll receive regular updates, clear timelines, and honest feedback. We believe in building trust through open and consistent communication.",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    name: "Actionable Market Intelligence",
    description: "Gain a competitive edge with our insights on salary benchmarks, hiring trends, and the talent landscape, helping you make informed decisions.",
    icon: <BarChart className="w-6 h-6" />,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Our Commitment to Excellence
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Makes Us Different
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
