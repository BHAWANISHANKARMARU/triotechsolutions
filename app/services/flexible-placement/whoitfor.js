import React from 'react';

// Icons for each section
const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LightningBoltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CurrencyRupeeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h5m2 8H8l-4-4 4-4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UserSearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 100-4.243 3 3 0 000 4.243zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const sections = [
  {
    title: 'Project-Based Work',
    icon: BriefcaseIcon,
    items: ['Short-term software development projects', 'System upgrades and migrations', 'Peak season support'],
  },
  {
    title: 'Urgent Requirements',
    icon: LightningBoltIcon,
    items: ['Immediate technical expertise', 'Emergency resource replacement', 'Critical project deadlines'],
  },
  {
    title: 'Budget Flexibility',
    icon: CurrencyRupeeIcon,
    items: ['Control costs with variable staffing', 'Pay only for time needed', 'No long-term commitment'],
  },
  {
    title: 'Trial Before Hire',
    icon: UserSearchIcon,
    items: ['Evaluate candidates before permanent offers', 'Reduce hiring risks', 'Test team fit'],
  },
];

const WhoItFor = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Who It's For</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">Ideal for companies needing agility, speed, and cost-control for their IT initiatives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{section.title}</h3>
                <p className="text-muted-foreground flex-grow">{section.items.join(' • ')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItFor;
