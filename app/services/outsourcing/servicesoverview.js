const ServiceOverview = () => {
  return (
    <section className="bg-background text-foreground">
      {/* Content */}
      <div className="container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-base font-semibold leading-7 text-primary">
            What is IT Outsourcing?
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            IT Outsourcing Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Complete IT team management solutions where we provide, manage, and administer dedicated teams or individual professionals who work exclusively for your business. Our goal is to become a seamless extension of your team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
