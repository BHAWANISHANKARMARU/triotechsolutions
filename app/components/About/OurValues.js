"use client";

const values = [
  {
    name: "Excellence",
    description:
      "Commitment to quality in every placement, rigorous candidate vetting, and a continuous improvement mindset.",
  },
  {
    name: "Integrity",
    description:
      "Transparent communication, honest assessments, and ethical business practices are the foundation of our work.",
  },
  {
    name: "Partnership",
    description:
      "We build long-term relationships over transactions, understanding your unique needs to support success at every stage.",
  },
  {
    name: "Innovation",
    description:
      "Utilizing modern recruitment technology and agile hiring processes to provide adaptive solutions for changing needs.",
  },
];

const OurValues = () => {
  return (
    <section id="values" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Our Core Values
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Principles That Guide Us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col p-6 bg-card border border-border rounded-xl shadow-card-shadow hover-lift text-center"
              >
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  {value.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
