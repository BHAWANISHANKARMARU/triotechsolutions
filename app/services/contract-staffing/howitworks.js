import React from 'react';

const steps = [
  {
    step: 'Step 1: Requirement Analysis (Days 1-2)',
    title: 'Define Project Needs',
    items: ['Project scope and objectives', 'Required skills and certifications', 'Timeline and budget', 'Team structure'],
  },
  {
    step: 'Step 2: Specialist Matching (Days 2-5)',
    title: 'Find Right Contractors',
    items: ['Search our specialist network', 'Review certifications and experience', 'Check availability', 'Prepare profiles'],
  },
  {
    step: 'Step 3: Evaluation (Days 5-7)',
    title: 'Client Review',
    items: ['Present top 2-3 specialists', 'Review project experience', 'Technical interviews', 'Rate negotiation'],
  },
  {
    step: 'Step 4: Onboarding (Days 7-10)',
    title: 'Start Project',
    items: ['Contract execution', 'System access setup', 'Project briefing', 'Kickoff meeting'],
  },
  {
    step: 'Step 5: Project Execution (Ongoing)',
    title: 'Deliver Results',
    items: ['Regular progress updates', 'Performance monitoring', 'Issue resolution', 'Quality assurance'],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Our Streamlined Process</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            From initial consultation to project delivery, we make finding and onboarding expert talent fast, transparent, and efficient.
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