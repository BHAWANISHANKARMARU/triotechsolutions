import React from 'react';

const whoItIsFor = [
  {
    name: 'Companies Adopting New Tech',
    description: 'For organizations migrating to a new technology stack, adopting cloud platforms like AWS or Azure, or implementing modern DevOps practices.',
  },
  {
    name: 'Businesses Closing Skill Gaps',
    description: 'When your current team lacks critical new skills or needs to move away from legacy systems as part of a digital transformation initiative.',
  },
  {
    name: 'Firms Focused on Talent Development',
    description: 'Ideal for retaining and growing existing talent, creating internal career paths, and building the next generation of technical leadership from within.',
  },
  {
    name: 'Organizations Onboarding New Hires',
    description: 'Perfect for standardizing the onboarding process through structured campus hire training programs, technology bootcamps, and company-specific tool training.',
  },
];

const WhoItFor = () => {
  return (
    <section id="who-it-for" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Who Benefits From Our Training
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is Our IT Training Right For You?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {whoItIsFor.map((item) => (
              <div
                key={item.name}
                className="flex flex-col p-6 bg-card border border-border rounded-xl shadow-card-shadow hover-lift text-center"
              >
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  {item.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{item.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhoItFor;
