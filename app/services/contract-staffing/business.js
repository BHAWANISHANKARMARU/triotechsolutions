import React from 'react';

const BusinessTransformation = () => {
  const service = {
    title: 'Business Transformation',
    subSections: [
      {
        title: 'Digital Transformation',
        items: ['Legacy system modernization', 'Process automation', 'Digital strategy implementation'],
      },
      {
        title: 'Enterprise Architecture',
        items: ['Solution architecture design', 'Technology roadmap development', 'System integration'],
      },
      {
        title: 'Change Management',
        items: ['Process reengineering', 'User adoption strategies', 'Training and enablement'],
      },
    ],
    roles: [
      'Business Analysts',
      'Solution Architects',
      'Digital Transformation Consultants',
      'Change Management Specialists',
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

export default BusinessTransformation;