import React from 'react';

// Icons for each term
const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const RefreshIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 10.5M20 20l-1.5-1.5A9 9 0 004 13.5" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const XCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const terms = [
  {
    title: 'Minimum Duration',
    icon: CalendarIcon,
    items: ['Typically 1-3 months', 'Shorter terms possible for urgent needs'],
  },
  {
    title: 'Contract Extension',
    icon: RefreshIcon,
    items: ['Easy renewal process', 'Adjust team size if needed'],
  },
  {
    title: 'Contract-to-Permanent',
    icon: ArrowRightIcon,
    items: ['Convert to full-time employment', 'Conversion fee applies', 'Smooth transition support'],
  },
  {
    title: 'Early Termination',
    icon: XCircleIcon,
    items: ['15-30 day notice period', 'Fair exit terms', 'Proper handover support'],
  },
];

const ContractTerms = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Flexible Contract Terms</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Our terms are designed for adaptability, allowing you to scale and adjust as your project evolves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <div key={term.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{term.title}</h3>
                <p className="text-muted-foreground flex-grow">{term.items.join(' • ')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContractTerms;
