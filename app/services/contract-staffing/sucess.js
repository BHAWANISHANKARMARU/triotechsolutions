import React from 'react';

// Icons for each story
const CloudUploadIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.083 9-2.083a12.02 12.02 0 00-4.382-11.883z" />
  </svg>
);

const CollectionIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const stories = [
  {
    title: 'Case Study 1: Cloud Migration',
    icon: CloudUploadIcon,
    challenge: 'Migrate 50+ applications to AWS in 6 months',
    solution: '4-member cloud team (2 architects, 2 engineers)',
    result: 'Migration completed on time, 40% cost savings achieved',
  },
  {
    title: 'Case Study 2: Cybersecurity Overhaul',
    icon: ShieldCheckIcon,
    challenge: 'Achieve SOC 2 compliance within 4 months',
    solution: '2 security specialists + 1 compliance consultant',
    result: 'SOC 2 Type I achieved, zero findings in audit',
  },
  {
    title: 'Case Study 3: SAP Implementation',
    icon: CollectionIcon,
    challenge: 'Implement SAP S/4HANA for manufacturing company',
    solution: '6-member team (functional + technical + project manager)',
    result: 'Go-live successful, 15% efficiency improvement',
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Proven Success Stories</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            See how our expert contractors have delivered tangible results for clients across various critical projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
            <div key={story.title} className="bg-card p-8 rounded-xl shadow-md hover-lift flex flex-col animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground ml-4">{story.title}</h3>
              </div>
              <div className="space-y-4 text-muted-foreground flex-grow">
                <p><strong className="text-foreground/90">Challenge:</strong> {story.challenge}</p>
                <p><strong className="text-foreground/90">Solution:</strong> {story.solution}</p>
                <p><strong className="text-primary">Result:</strong> {story.result}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;