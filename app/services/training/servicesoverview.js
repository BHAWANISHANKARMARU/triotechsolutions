import React from 'react';

const ServiceOverview = () => {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            An Overview of Our IT Training Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center h-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              What We Offer
            </h3>
            <p className="text-muted-foreground">
              We provide comprehensive IT training programs designed to upskill existing teams, reskill employees for new technologies, and develop emerging talent. Our goal is to keep your workforce competitive and future-proof.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center h-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Training Philosophy
            </h3>
            <p className="text-muted-foreground">
              We believe in practical, hands-on learning. Our programs are led by industry experts and focus on real-world application, ensuring that your team can immediately apply what they've learned to drive business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
