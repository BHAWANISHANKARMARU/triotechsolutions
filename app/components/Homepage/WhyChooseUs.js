'use client';

const WhyChooseUs = () => {
  const features = [
    {
      name: 'IT Specialization',
      description: 'We focus exclusively on technology roles, ensuring a deep understanding of your technical needs and the skills required.',
    },
    {
      name: 'Speed & Quality',
      description: 'Receive a shortlist of pre-vetted, technically assessed IT professionals within 48 hours.',
    },
    {
      name: 'Proven Track Record',
      description: 'With over 500 successful placements and a 98% client retention rate, our results speak for themselves.',
    },
    {
      name: 'End-to-End Support',
      description: 'We manage the entire process from job posting to onboarding, including background verification and post-placement follow-up.',
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Strategic IT Staffing Partner
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
