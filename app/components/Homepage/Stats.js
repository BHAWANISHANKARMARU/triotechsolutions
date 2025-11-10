'use client';

const Stats = () => {
  const stats = [
    { value: "500+", label: "IT Professionals Placed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100+", label: "Partner Companies" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One Partner. Infinite IT Solutions.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                We are a specialized IT staffing company dedicated to connecting skilled technology professionals with innovative companies across all industries.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-2 text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
