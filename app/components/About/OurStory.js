"use client";

const OurStory = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Story
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Company Overview
            </h3>
            <p className="text-muted-foreground">
              Trio Tech Solutions was founded with a simple mission: make
              finding and hiring IT talent effortless and effective. With 5+
              years of experience in the technology staffing industry, we've
              successfully placed over 500 IT professionals across various tech
              domains.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-muted-foreground">
              We don't just match resumes to job descriptions. We understand
              technology, culture, and what makes teams successful. Our deep
              expertise in IT roles—from software developers to cloud
              architects—ensures we find the perfect fit every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
