import React from 'react';

// Icons for each metric
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

const SwitchHorizontalIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const metrics = [
  {
    title: 'Fast Deployment',
    icon: RocketLaunchIcon,
    items: ['48-hour average placement time', '95% candidates start on agreed date'],
  },
  {
    title: 'Quality Assurance',
    icon: BadgeCheckIcon,
    items: ['90% client satisfaction rate', '85% contract completion rate'],
  },
  {
    title: 'Flexibility',
    icon: SwitchHorizontalIcon,
    items: ['60% projects extended beyond initial term', '30% converted to permanent roles'],
  },
];

const SuccessMetrics = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Our Proven Track Record</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            The numbers speak for themselves. We consistently deliver speed, quality, and flexibility to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={metric.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-6">{metric.title}</h3>
                <div className="space-y-6 flex-grow">
                  {metric.items.map((item) => (
                    <div key={item}>
                      <p className="font-bold text-primary text-4xl">{item.split(' ')[0]}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.substring(item.indexOf(' ') + 1)}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
