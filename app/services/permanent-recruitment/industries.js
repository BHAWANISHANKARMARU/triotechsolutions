import React from 'react';

const industries = [
  'Financial Services & FinTech',
  'Healthcare Technology & MedTech',
  'E-commerce & Retail Tech',
  'SaaS & Enterprise Software',
  'EdTech & E-learning',
  'Gaming & Entertainment Tech',
  'Manufacturing & Industrial IoT',
  'Startups & Growth Companies',
  'Telecommunications',
  'Logistics & Supply Chain',
  'Digital Marketing & AdTech',
  'Cybersecurity Firms',
];

const Industries = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industries We Specialize In
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise in permanent recruitment spans a wide range of technology-driven sectors.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <span 
              key={industry} 
              className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full border border-primary/20 transition-colors hover:bg-primary/20"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
