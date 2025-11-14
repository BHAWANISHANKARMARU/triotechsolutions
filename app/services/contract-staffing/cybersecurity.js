import React from 'react';

const Cybersecurity = () => {
  const service = {
    title: 'Cybersecurity',
    subSections: [
      {
        title: 'Security Assessment',
        items: ['Vulnerability assessments', 'Penetration testing', 'Security audits'],
      },
      {
        title: 'Security Implementation',
        items: ['SIEM deployment', 'Firewall configuration', 'Zero Trust architecture'],
      },
      {
        title: 'Compliance & Governance',
        items: ['ISO 27001, SOC 2', 'GDPR, HIPAA compliance', 'Security policy development'],
      },
    ],
    roles: [
      'Security Engineers',
      'Security Architects',
      'Penetration Testers',
      'Security Analysts',
      'Compliance Specialists',
      'Security Consultants',
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

export default Cybersecurity;