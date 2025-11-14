import React from 'react';

const sections = [
  {
    title: 'Major IT Projects',
    items: [
      'Digital transformation initiatives',
      'Cloud migration projects',
      'System implementations',
      'Infrastructure upgrades',
    ],
  },
  {
    title: 'Specialized Expertise',
    items: [
      'Niche technical skills',
      'Short-term specialist needs',
      'Project-specific knowledge',
    ],
  },
  {
    title: 'Scalable Teams',
    items: [
      'Ramp up quickly for projects',
      'Scale down post-completion',
      'Flexible resource allocation',
    ],
  },
  {
    title: 'Budget Control',
    items: [
      'Project-based budgeting',
      'No permanent headcount',
      'Predictable costs',
    ],
  },
];

const WhoItFor = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Who It's For</h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">Ideal For Companies That Need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={section.title} className="bg-card p-6 rounded-xl shadow-md hover-lift animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItFor;