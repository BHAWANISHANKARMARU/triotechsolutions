"use client";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Successful IT Placements" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "50+", label: "Partner Companies" },
    { value: "5+", label: "Years Industry Experience" },
  ];

  return (
    <section className="bg-background/70 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proven Results, Unmatched Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-6 text-center shadow-card-shadow hover-lift"
            >
              <p className="text-4xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
