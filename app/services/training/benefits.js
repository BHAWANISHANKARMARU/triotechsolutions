"use client";
import { DollarSign, ClipboardEdit, CalendarDays, TrendingUp, UserCheck } from "lucide-react";

const benefits = [
  {
    name: 'Cost-Effective Upskilling',
    description: 'Training existing employees is up to 60% cheaper than hiring new experienced talent. Retain valuable institutional knowledge while boosting loyalty.',
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    name: 'Customized Curriculum',
    description: 'We tailor every training program to your specific tech stack, business context, and real-world project scenarios for maximum relevance and impact.',
    icon: <ClipboardEdit className="h-6 w-6" />,
  },
  {
    name: 'Flexible Delivery Models',
    description: 'Choose the format that works for you: on-site, fully remote, or hybrid. We offer self-paced, instructor-led, and even weekend/evening options.',
    icon: <CalendarDays className="h-6 w-6" />,
  },
  {
    name: 'Measurable & Guaranteed Results',
    description: 'Track progress with pre- and post-training assessments. We focus on tangible skill certification and stand by our training with a satisfaction guarantee.',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: 'Learn from Industry Experts',
    description: 'Our trainers are active industry practitioners, not just academics. They bring years of hands-on experience and mentorship to your team.',
    icon: <UserCheck className="h-6 w-6" />,
  },
];

const KeyBenefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            The Value of Upskilling
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Benefits of Our Training Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Investing in your team's skills is an investment in your company's future. Here’s how our programs deliver tangible value.
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
