'use client';

const Services = () => {
  const services = [
    {
      title: "Flexible Placement",
      description: "Short-term IT project staffing. Quick deployment (24-48 hours). Ideal for urgent tech needs.",
    },
    {
      title: "Permanent Recruitment",
      description: "Full-time IT hiring solutions. Cultural fit assessment. Long-term talent acquisition.",
    },
    {
      title: "Outsourcing",
      description: "Complete team management. Reduced operational costs. Focus on core business.",
    },
    {
      title: "Training & Upskilling",
      description: "Future-proof your workforce. Latest technology training. Custom learning paths.",
    },
    {
      title: "Contract Staffing",
      description: "Business transformation projects. Cloud & infrastructure experts. Cybersecurity specialists.",
    },
    {
      title: "Campus Hiring",
      description: "Fresh IT talent acquisition. Graduate training programs. Build your tech pipeline.",
    },
  ];

  return (
    <section className="bg-background/70 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our IT Staffing Services
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Comprehensive staffing solutions for every technology need.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-card border border-border rounded-xl p-6 text-left transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
