"use client";
import {
  Zap,
  ShieldCheck,
  BadgePercent,
  HeartHandshake,
  BrainCircuit,
} from "lucide-react";

const benefits = [
  {
    name: "Speed",
    description:
      "Receive a shortlist of qualified candidates within 48 hours, significantly reducing your time-to-hire and minimizing project delays.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    name: "Quality",
    description:
      "Access pre-screened, technically assessed, and background-verified IT professionals who match your specific skill and cultural requirements.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    name: "Cost Savings",
    description:
      "Eliminate upfront fees and expensive job board subscriptions. Our contingency model means you only pay upon a successful hire.",
    icon: <BadgePercent className="h-6 w-6" />,
  },
  {
    name: "Risk Reduction",
    description:
      "Benefit from our 90-day replacement guarantee and thorough candidate vetting process, ensuring a secure and successful placement.",
    icon: <HeartHandshake className="h-6 w-6" />,
  },
  {
    name: "Expertise",
    description:
      "Leverage the knowledge of our IT-specialized recruiters who provide valuable industry insights and technical understanding.",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            The Trio Tech Advantage
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Benefits of Partnering With Us
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover how our specialized approach delivers tangible results for
            your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {benefit.icon}
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
