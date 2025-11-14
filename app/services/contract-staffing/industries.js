import React from 'react';

const industries = [
  'Financial Services & Banking',
  'Healthcare & Pharmaceuticals',
  'Manufacturing & Logistics',
  'Retail & E-commerce',
  'Technology & Software',
  'Energy & Utilities',
  'Government & Public Sector',
];

const Industries = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Industries We Serve</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Our contractors bring deep domain expertise to a wide range of sectors, understanding the unique challenges and opportunities of each.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div key={industry} className="bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2 rounded-full hover-grow animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;