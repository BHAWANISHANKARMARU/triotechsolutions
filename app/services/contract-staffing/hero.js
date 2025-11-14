import React from 'react';

const Hero = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 animate-fade-in-down">
          Enterprise IT Project Specialists
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
          Highly skilled IT professionals for business transformation, cloud infrastructure, digital workspace, cybersecurity, and enterprise application projects. Get specialized expertise exactly when you need it.
        </p>
      </div>
    </section>
  );
};

export default Hero;