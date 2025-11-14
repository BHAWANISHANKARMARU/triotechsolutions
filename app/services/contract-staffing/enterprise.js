import React from 'react';

const EnterpriseApplications = () => {
  const service = {
    title: 'Enterprise Applications',
    subSections: [
      {
        title: 'ERP Implementation',
        items: ['SAP, Oracle, Microsoft Dynamics', 'Custom ERP solutions', 'ERP upgrades and migrations'],
      },
      {
        title: 'CRM & Marketing Automation',
        items: ['Salesforce implementation', 'HubSpot, Marketo setup', 'CRM customization'],
      },
      {
        title: 'Business Intelligence',
        items: ['Power BI, Tableau deployment', 'Data warehouse setup', 'Reporting and analytics'],
      },
    ],
    roles: [
      'SAP Consultants',
      'Salesforce Developers',
      'Business Intelligence Developers',
      'ERP Functional Consultants',
      'Technical Architects',
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

export default EnterpriseApplications;