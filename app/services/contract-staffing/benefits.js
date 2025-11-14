import React from 'react';

const benefits = [
  {
    title: 'Specialized Expertise',
    items: ['Niche skills on demand', 'Industry certifications', 'Proven project experience'],
  },
  {
    title: 'Rapid Deployment',
    items: ['Pre-vetted specialists', '1-2 week deployment', 'Ready to contribute immediately'],
  },
  {
    title: 'Cost-Effective',
    items: ['Pay only for project duration', 'No permanent hiring costs', 'No training required'],
  },
  {
    title: 'Reduced Risk',
    items: ['Experienced professionals', 'Project delivery track record', 'Performance guaranteed'],
  },
  {
    title: 'Flexibility',
    items: ['Scale team as needed', 'Extend or reduce contracts', 'Multiple engagement models'],
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">
            Key Benefits of Contract Staffing
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Leverage our contract staffing services to gain a competitive edge with agility, expertise, and cost-efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="bg-card p-6 rounded-xl shadow-md hover-lift animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.items.map((item) => (
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

export default KeyBenefits;