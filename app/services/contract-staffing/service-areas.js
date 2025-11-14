import React from 'react';

// Heroicons - You can replace these with any icon set you prefer
const GlobeAltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9" />
  </svg>
);

const CloudIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const DesktopComputerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.083 9-2.083a12.02 12.02 0 00-4.382-11.883z" />
  </svg>
);

const CubeTransparentIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </svg>
);

const ChartBarIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const serviceAreas = [
  {
    icon: GlobeAltIcon,
    title: 'Business Transformation',
    description: 'Align IT with business goals using our experts in strategic change, process optimization, and project management.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Infrastructure',
    description: 'Access certified professionals for AWS, Azure, and GCP to design, build, and manage scalable cloud solutions.',
  },
  {
    icon: DesktopComputerIcon,
    title: 'Digital Workspace',
    description: 'Enhance productivity and collaboration with specialists in VDI, UEM, and modern workplace technologies.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cybersecurity',
    description: 'Protect your assets with our security analysts, engineers, and architects skilled in threat detection and prevention.',
  },
  {
    icon: CubeTransparentIcon,
    title: 'Enterprise Applications',
    description: 'Implement and manage complex systems like SAP, Salesforce, and Oracle with our experienced application consultants.',
  },
  {
    icon: ChartBarIcon,
    title: 'Data & Analytics',
    description: 'Turn data into insights with our data scientists, engineers, and analysts who specialize in BI and big data platforms.',
  },
];

const ServiceAreas = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">
            Core Service Areas
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Specialized talent for your most critical IT domains. We provide the right experts to accelerate your projects and ensure success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground flex-grow">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
