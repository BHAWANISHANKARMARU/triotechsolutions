import React from 'react';

// Icons for each term category
const ClipboardListIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const SwitchHorizontalIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const LockClosedIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const terms = [
  {
    title: 'Standard Terms',
    icon: ClipboardListIcon,
    items: ['Minimum 1-3 month engagement', '30-day notice period', 'Extension options available'],
  },
  {
    title: 'Flexible Options',
    icon: SwitchHorizontalIcon,
    items: ['Part-time/full-time', 'On-site/remote/hybrid', 'Dedicated or shared resources'],
  },
  {
    title: 'IP & Confidentiality',
    icon: LockClosedIcon,
    items: ['NDA for all contractors', 'IP rights to client', 'Data security ensured'],
  },
];

const ContractTerms = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Clear & Fair Contract Terms</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            We provide transparent and flexible contract terms designed to protect your interests and ensure a smooth engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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