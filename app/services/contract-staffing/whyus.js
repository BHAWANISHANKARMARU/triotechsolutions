import React from 'react';

// Icons for each reason
const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.004 10.004 0 0012 10.5c-2.772 0-5.231-.936-7.131-2.502M15 21a6 6 0 00-9-5.197" />
  </svg>
);

const RocketLaunchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-7.38 5.84m2.56-5.84a6 6 0 015.84 7.38m-5.84-7.38l-2.29-2.29m2.29 2.29a6 6 0 01-7.38 5.84m7.38-5.84l2.29 2.29m-2.29-2.29a6 6 0 015.84-7.38l-5.84 2.56zM12 12a6 6 0 01-7.38-5.84m7.38 5.84l-2.29-2.29m2.29 2.29l2.29 2.29" />
  </svg>
);

const BadgeCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const SupportIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const reasons = [
  {
    title: 'Specialized Network',
    icon: UsersIcon,
    items: ['500+ certified specialists', 'Niche skill coverage', 'Industry experts'],
  },
  {
    title: 'Proven Delivery',
    icon: RocketLaunchIcon,
    items: ['200+ successful projects', '95% on-time delivery rate', '90% client satisfaction'],
  },
  {
    title: 'Quality Guarantee',
    icon: BadgeCheckIcon,
    items: ['Pre-vetted specialists', 'Performance monitoring', 'Quick replacement if needed'],
  },
  {
    title: 'End-to-End Support',
    icon: SupportIcon,
    items: ['From requirement to delivery', 'Administrative handling', 'Ongoing support'],
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Why Choose Our Contract Staffing</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Partner with us for access to an elite network of specialists, a proven track record of success, and a commitment to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground flex-grow">{reason.items.join(' • ')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;