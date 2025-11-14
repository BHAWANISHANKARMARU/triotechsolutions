import React from 'react';

const DigitalWorkspace = () => {
  const service = {
    title: 'Digital Workspace',
    subSections: [
      {
        title: 'Modern Workplace Solutions',
        items: ['Microsoft 365 implementation', 'Google Workspace deployment', 'Collaboration tools setup'],
      },
      {
        title: 'Endpoint Management',
        items: ['Device management (MDM)', 'Windows/Mac deployment', 'Mobile device policies'],
      },
      {
        title: 'Virtual Desktop Infrastructure',
        items: ['VDI implementation', 'Remote work enablement', 'Desktop virtualization'],
      },
    ],
    roles: [
      'Workplace Modernization Specialists',
      'Microsoft 365 Consultants',
      'Endpoint Management Engineers',
      'VDI Architects',
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

export default DigitalWorkspace;