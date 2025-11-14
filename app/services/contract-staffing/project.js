import React from 'react';

// Icons for each project type
const CloudUploadIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const CollectionIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const ShieldExclamationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.083 9-2.083a12.02 12.02 0 00-4.382-11.883zM12 9v4m0 4h.01" />
  </svg>
);

const RefreshIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 10.5M20 20l-1.5-1.5A9 9 0 004 13.5" />
  </svg>
);

const projects = [
  {
    title: 'Cloud Migration',
    icon: CloudUploadIcon,
    items: ['3-6 month engagements', 'Team of 2-4 specialists', 'Architecture, migration, testing'],
  },
  {
    title: 'ERP Implementation',
    icon: CollectionIcon,
    items: ['6-12 month projects', 'Team of 3-6 consultants', 'Functional and technical experts'],
  },
  {
    title: 'Cybersecurity Audit',
    icon: ShieldExclamationIcon,
    items: ['4-8 week engagements', '1-2 security specialists', 'Assessment and remediation'],
  },
  {
    title: 'Digital Transformation',
    icon: RefreshIcon,
    items: ['6-18 month initiatives', 'Team of 5-10 specialists', 'Strategy to implementation'],
  },
];

const ProjectTypes = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Common Project Types</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            Our specialists are experienced in a wide range of critical IT initiatives, from cloud migrations to full-scale digital transformations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={project.title} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{project.title}</h3>
                <ul className="space-y-3 text-muted-foreground flex-grow">
                  {project.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;