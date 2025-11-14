"use client";
import { Users, SearchCheck, Clock, RefreshCw, BrainCircuit } from "lucide-react";

const benefits = [
  {
    name: 'Cultural Fit Assessment',
    description: 'We go beyond technical skills to evaluate how a candidate aligns with your company values and team dynamics, ensuring a harmonious fit.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    name: 'Comprehensive Vetting',
    description: 'Our multi-stage process includes technical assessments, behavioral interviews, and thorough reference checks to guarantee candidate quality.',
    icon: <SearchCheck className="h-6 w-6" />,
  },
  {
    name: 'Reduced Time-to-Hire',
    description: 'With our pre-screened candidate pipeline and coordinated interview process, we can reduce placement times from months to weeks.',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    name: 'Lower Turnover & Higher Retention',
    description: 'By focusing on better candidate matching and setting realistic expectations, we help you build teams that last. We back this with a 90-day placement guarantee.',
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    name: 'Expert Market Guidance',
    description: 'Leverage our deep knowledge of the IT market for insights on competitive salaries, offer negotiation, and effective onboarding strategies.',
    icon: <BrainCircuit className="h-6 w-6" />,
  },
];

const KeyBenefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            The Value We Provide
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Key Benefits of Our Permanent Hiring Service
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience a recruitment process designed to deliver lasting value and build a stronger organization.
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

export default KeyBenefits;
