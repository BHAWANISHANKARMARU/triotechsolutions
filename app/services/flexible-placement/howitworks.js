import React from 'react';

const steps = [
  {
    step: 'Step 1: Share Your Needs (Day 1)',
    title: 'Define project scope and timeline',
    items: ['Specify required technical skills', 'Set your budget parameters'],
  },
  {
    step: 'Step 2: Candidate Matching (Day 1-2)',
    title: 'We shortlist from our talent pool',
    items: ['Review technical assessments', 'Check availability and rates'],
  },
  {
    step: 'Step 3: Interview & Select (Day 2-3)',
    title: 'Meet top 2-3 candidates',
    items: ['Technical skill validation', 'Start date confirmation'],
  },
  {
    step: 'Step 4: Onboarding (Day 3-5)',
    title: 'Paperwork and contracts',
    items: ['System access setup', 'Project briefing'],
  },
  {
    step: 'Step 5: Project Delivery',
    title: 'Support throughout engagement',
    items: ['Regular performance check-ins', 'Address any concerns quickly'],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Our Rapid Placement Process</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            We've streamlined our process to get you the right talent in record time, typically within 24-48 hours.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((item, index) => (
            <div key={item.step} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="bg-card p-6 rounded-xl shadow-md hover-lift">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                    <p className="text-sm font-medium text-primary">{item.step}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.items.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
