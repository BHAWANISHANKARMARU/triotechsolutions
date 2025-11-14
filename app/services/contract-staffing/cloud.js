import React from 'react';

const CloudInfrastructure = () => {
  const service = {
    title: 'Cloud & Infrastructure',
    subSections: [
      {
        title: 'Cloud Migration',
        items: ['AWS, Azure, GCP migrations', 'Hybrid cloud setup', 'Multi-cloud strategies'],
      },
      {
        title: 'Infrastructure Modernization',
        items: ['Server virtualization', 'Network redesign', 'Storage optimization'],
      },
      {
        title: 'DevOps Implementation',
        items: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code'],
      },
    ],
    roles: [
      'Cloud Architects',
      'Cloud Engineers',
      'DevOps Engineers',
      'Site Reliability Engineers',
      'Infrastructure Specialists',
    ],
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
      <div className="space-y-6">
        {service.subSections.map((sub) => (
          <div key={sub.title}>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">{sub.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudInfrastructure;