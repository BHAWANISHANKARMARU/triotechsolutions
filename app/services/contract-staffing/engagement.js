import React from 'react';

// Icons for each engagement model
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DocumentTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.004 10.004 0 0012 10.5c-2.772 0-5.231-.936-7.131-2.502M15 21a6 6 0 00-9-5.197" />
  </svg>
);

const PuzzleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const models = [
  {
    title: 'Time & Material',
    icon: ClockIcon,
    items: ['Hourly or daily billing', 'Flexible hours', 'Best for undefined scope', 'Pay for actual work'],
  },
  {
    title: 'Fixed Price Project',
    icon: DocumentTextIcon,
    items: ['Defined deliverables', 'Fixed budget', 'Milestone-based payments', 'Clear outcomes'],
  },
  {
    title: 'Retained Specialists',
    icon: UsersIcon,
    items: ['Monthly retainer', 'Dedicated capacity', 'Priority access', 'Predictable costs'],
  },
  {
    title: 'Hybrid Model',
    icon: PuzzleIcon,
    items: ['Combination approach', 'Flexible billing', 'Customized terms'],
  },
];

const EngagementModels = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Flexible Engagement Models</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Choose the model that best fits your project needs, budget, and operational style for maximum efficiency and value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
            <div key={model.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{model.title}</h3>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {model.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;