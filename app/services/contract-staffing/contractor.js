import React from 'react';

// Icons for each profile tier
const SparklesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const profiles = [
  {
    level: 'Senior Specialists (8+ years)',
    icon: SparklesIcon,
    points: ['Lead complex projects', 'Architecture and design', 'Mentorship capabilities'],
    rate: '₹[X] per day',
  },
  {
    level: 'Mid-Level Experts (5-8 years)',
    icon: BriefcaseIcon,
    points: ['Independent execution', 'Technical implementation', 'Problem-solving'],
    rate: '₹[X] per day',
  },
  {
    level: 'Junior Specialists (3-5 years)',
    icon: UserIcon,
    points: ['Implementation support', 'Under senior guidance', 'Eager to learn'],
    rate: '₹[X] per day',
  },
];

const ContractorProfiles = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground animate-fade-in-down">Contractor Profiles & Tiers</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-fade-in-up [animation-delay:0.1s]">
            We provide talent across all experience levels, ensuring you get the right expertise for your project scope and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
            <div key={profile.level} className="bg-card p-8 rounded-xl shadow-md hover-lift text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-6">{profile.level}</h3>
              <ul className="space-y-3 text-muted-foreground text-left mb-8 flex-grow">
                {profile.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold text-xl text-primary mt-auto">Starts from {profile.rate}</p>
            </div>
            );
          })}
        </div>
        <p className="text-center mt-10 text-sm text-muted-foreground">*Final rates vary by technology, specialization, and project duration.</p>
      </div>
    </section>
  );
};

export default ContractorProfiles;