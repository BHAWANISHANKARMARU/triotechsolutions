import React from 'react';

const ServiceOverview = () => {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            An Overview of Our Permanent Recruitment Service
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center h-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              What is Permanent Recruitment?
            </h3>
            <p className="text-muted-foreground">
              Permanent recruitment, also known as direct hire, is the process of finding and hiring full-time employees for long-term roles. Unlike temporary staffing, our goal is to build your core team with dedicated professionals who will grow with your company.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center h-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Strategic Approach
            </h3>
            <p className="text-muted-foreground">
              We go beyond just filling a position. We act as your strategic hiring partner, focusing on finding candidates who not only have the right technical skills but also align perfectly with your company culture, values, and long-term vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
