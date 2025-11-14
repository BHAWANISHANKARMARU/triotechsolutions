import React from 'react';

// Icons for each model
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FlagIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const models = [
  {
    title: 'Time & Material',
    icon: ClockIcon,
    items: ['Hourly or daily billing', 'Flexible hours', 'Best for undefined scope'],
  },
  {
    title: 'Fixed Duration',
    icon: CalendarIcon,
    items: ['Monthly rate for set period', '3, 6, or 12-month contracts', 'Predictable costs'],
  },
  {
    title: 'Milestone-Based',
    icon: FlagIcon,
    items: ['Pay based on deliverables', 'Project-based pricing', 'Clear outcome definition'],
  },
];

const EngagementModels = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Flexible Engagement Models</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            We offer a variety of models to suit your project's specific financial and operational requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={model.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{model.title}</h3>
                <p className="text-muted-foreground flex-grow">{model.items.join(' • ')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
