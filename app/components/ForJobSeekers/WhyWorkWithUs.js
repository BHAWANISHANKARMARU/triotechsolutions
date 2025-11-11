"use client";
import {
  Building2,
  TrendingUp,
  BadgePercent,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    name: "Access to Top Companies",
    description:
      "Get exclusive access to job opportunities at over 50 partner companies, from innovative startups to Fortune 500 firms, with direct connections to hiring managers.",
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    name: "Career Growth Focus",
    description:
      "We focus on your long-term success with career planning, skill development guidance, and access to growth-oriented roles with competitive compensation.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: "Completely Free Service",
    description:
      "Our service is 100% free for job seekers. No fees, no hidden costs—just complete transparency. Your success is our success.",
    icon: <BadgePercent className="h-6 w-6" />,
  },
  {
    name: "Expert Support",
    description:
      "Receive dedicated support from IT career counselors, including resume optimization, interview preparation, and salary negotiation assistance.",
    icon: <HeartHandshake className="h-6 w-6" />,
  },
];

const WhyWorkWithUs = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Your Career Partner
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Work With Trio Tech Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover the advantages of partnering with a specialized IT
            recruitment agency dedicated to your career success.
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

export default WhyWorkWithUs;
