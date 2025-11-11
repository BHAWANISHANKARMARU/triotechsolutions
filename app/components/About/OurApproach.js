"use client";

const approachForEmployers = [
  {
    step: "01",
    title: "Understand",
    description: "We learn your business, culture, and technical needs.",
  },
  {
    step: "02",
    title: "Source",
    description: "Access our vetted pool of IT professionals.",
  },
  {
    step: "03",
    title: "Match",
    description: "Present candidates aligned with your requirements.",
  },
  {
    step: "04",
    title: "Support",
    description: "Facilitate interviews and smooth onboarding.",
  },
];

const approachForJobSeekers = [
  {
    step: "01",
    title: "Connect",
    description: "Share your skills, experience, and career goals.",
  },
  {
    step: "02",
    title: "Match",
    description: "We identify opportunities that fit your profile.",
  },
  {
    step: "03",
    title: "Prepare",
    description: "Interview coaching and career guidance.",
  },
  {
    step: "04",
    title: "Succeed",
    description: "Post-placement support and career development.",
  },
];

const OurApproach = () => {
  return (
    <section id="approach" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A tailored process for both companies and professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              For Employers
            </h3>
            <div className="space-y-6">
              {approachForEmployers.map((item) => (
                <div key={item.step} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/50">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border shadow-card-shadow">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              For Job Seekers
            </h3>
            <div className="space-y-6">
              {approachForJobSeekers.map((item) => (
                <div key={item.step} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/50">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
