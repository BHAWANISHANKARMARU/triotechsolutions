import React from 'react';

const ServiceOverview = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 animate-fade-in-down">
          Flexible Placement
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-in-up [animation-delay:0.1s]">
          What is Flexible Placement?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
          Flexible placement provides short-term, contract-based IT staffing solutions for businesses that need temporary project support, seasonal workload management, quick team scaling, or trial periods before permanent hiring.
        </p>
        <div className="inline-block bg-primary/10 text-primary font-bold text-lg px-6 py-3 rounded-full animate-fade-in-up [animation-delay:0.3s]">
          Quick deployment: 24-48 hours
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
