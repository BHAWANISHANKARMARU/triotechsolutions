import React from 'react';

const ourResponsibilities = [
  'Candidate sourcing and vetting', 'Background verification', 'Contract management', 'HR administration', 'Performance monitoring', 'Replacement if needed'
];

const yourResponsibilities = [
  'Project direction and management', 'System access and tools', 'Day-to-day task assignment', 'Performance feedback'
];

const WhatsIncluded = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Shared Responsibility Model</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            We handle the administrative overhead so you can focus on what matters most: managing your project and achieving your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-card p-8 rounded-xl shadow-md hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Our Responsibility</h3>
            <ul className="space-y-3">
              {ourResponsibilities.map(item => (
                <li key={item} className="flex items-start text-muted-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Your Responsibility</h3>
            <ul className="space-y-3">
              {yourResponsibilities.map(item => (
                <li key={item} className="flex items-start text-muted-foreground">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
