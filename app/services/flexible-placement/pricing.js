import React from 'react';

// Icons for each tier
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const tiers = [
  {
    level: 'Junior Level (0-2 years)',
    icon: UserIcon,
    rate: '₹[X] per hour / ₹[X] per day',
    roles: 'Entry-level developers, QA testers',
  },
  {
    level: 'Mid Level (2-5 years)',
    icon: BriefcaseIcon,
    rate: '₹[X] per hour / ₹[X] per day',
    roles: 'Experienced developers, specialists',
  },
  {
    level: 'Senior Level (5+ years)',
    icon: SparklesIcon,
    rate: '₹[X] per hour / ₹[X] per day',
    roles: 'Architects, leads, experts',
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Transparent Pricing Structure</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Our clear and competitive rates ensure you get the best value for your investment, with discounts for larger teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div key={tier.level} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{tier.level}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{tier.roles}</p>
                <p className="font-bold text-2xl text-primary mt-auto">{tier.rate}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 md:mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-block bg-secondary text-secondary-foreground p-6 rounded-xl">
              <p className="font-semibold text-lg">Volume Discounts Available</p>
              <p className="text-muted-foreground mt-1">5+ resources: 10% discount | 10+ resources: 15% discount</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">*Note: Actual rates vary by role and specific skills required.</p>
            <button className="mt-8 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover-lift transition-colors">
              Request Custom Quote
            </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
