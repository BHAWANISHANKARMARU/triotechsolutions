"use client";
import { UserCheck, Code, Settings2, MessageSquarePlus } from "lucide-react";

const features = [
  {
    name: "Taught by Active Industry Experts",
    description: "Our instructors are current IT professionals, not just tutors. They bring real-world, up-to-date experience from the field directly into the classroom.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    name: "Practical, Hands-On Focus",
    description: "We believe in learning by doing. Our curriculum is over 70% hands-on, ensuring participants build practical skills and a strong portfolio.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Customized & Relevant Content",
    description: "Training is tailored to your specific technology stack and business scenarios, ensuring the content is immediately applicable to your team's work.",
    icon: <Settings2 className="w-6 h-6" />,
  },
  {
    name: "Dedicated Post-Training Support",
    description: "Learning doesn't stop when the course ends. We provide 30 days of Q&A support, access to a resource library, and an alumni network.",
    icon: <MessageSquarePlus className="w-6 h-6" />,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            The Trio Tech Difference
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Our Training Programs?
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
