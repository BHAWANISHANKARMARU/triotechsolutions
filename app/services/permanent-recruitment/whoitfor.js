import React from 'react';

const whoItIsFor = [
  {
    name: 'Companies Building Core Teams',
    description: 'Ideal for organizations looking to hire foundational members for their engineering, product, or data science departments for long-term success.',
  },
  {
    name: 'Organizations Needing Strategic Hires',
    description: 'When cultural fit, long-term retention, and strategic alignment are more critical than just filling a role quickly. We focus on finding the perfect match.',
  },
  {
    name: 'Businesses Seeking Leadership',
    description: 'For filling crucial leadership positions such as Engineering Managers, Technical Leads, and Department Heads who will guide your teams to success.',
  },
  {
    name: 'Firms Offering Direct Employment',
    description: 'When you need to hire candidates directly onto your payroll, ensuring they are fully integrated into your company culture with full employee benefits.',
  },
];

const WhoItFor = () => {
  return (
    <section id="who-it-for" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Who Benefits Most
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is Permanent Recruitment Right For You?
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
