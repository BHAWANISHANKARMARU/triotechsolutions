"use client";
import { GraduationCap, Replace, UserCog, Settings2 } from "lucide-react";

const features = [
  {
    name: 'Campus Hire & Onboarding',
    description: 'Comprehensive 3-6 month programs to turn fresh graduates into job-ready professionals, fully aligned with your tech stack and culture.',
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    name: 'Technology Migration & Upskilling',
    description: 'Seamlessly transition your teams from legacy to modern tech stacks with our phased learning approach that runs parallel to ongoing work.',
    icon: <Replace className="h-6 w-6" />,
  },
  {
    name: 'Technical Leadership Development',
    description: 'Equip your high-potential engineers with the managerial, agile, and project management skills needed to become effective team leaders.',
    icon: <UserCog className="h-6 w-6" />,
  },
  {
    name: 'Custom Program Development',
    description: 'Have a unique need? We will partner with you to design and build a completely custom training curriculum from the ground up.',
    icon: <Settings2 className="h-6 w-6" />,
  },
];

const CorporateTraining = () => {
  return (
    <section id="corporate-training" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            For Your Organization
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Corporate Training Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Customized, scalable training programs designed to meet your organization's specific talent development goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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

export default CorporateTraining;
