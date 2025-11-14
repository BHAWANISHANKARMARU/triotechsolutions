"use client";
import { CheckCircle2 } from "lucide-react";

const roles = [
  {
    category: 'Software Engineering',
    items: ['Full Stack Developers', 'Frontend Specialists (React, Vue)', 'Backend Engineers (Java, Python, .NET)', 'Mobile Developers (iOS, Android)', 'QA/Test Automation Engineers'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['Cloud Architects (AWS, Azure, GCP)', 'DevOps Engineers', 'Site Reliability Engineers (SRE)', 'System Administrators', 'Network Engineers'],
  },
  {
    category: 'Data & AI',
    items: ['Data Engineers', 'Data Scientists', 'ML/AI Engineers', 'Data Analysts', 'BI Developers'],
  },
  {
    category: 'Cybersecurity',
    items: ['Security Engineers', 'Security Architects', 'Penetration Testers', 'Security Analysts', 'Compliance Officers'],
  },
  {
    category: 'Leadership & Management',
    items: ['Engineering Managers', 'Technical Project Managers', 'Product Managers', 'CTOs / VPs of Engineering', 'Scrum Masters / Agile Coaches'],
  },
  {
    category: 'Other Specializations',
    items: ['UI/UX Designers', 'ERP Specialists (SAP, Oracle)', 'CRM Developers (Salesforce)', 'Database Administrators (DBA)', 'IT Support Specialists'],
  }
];

const RolesWeRecruit = () => {
  return (
    <section id="roles" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Areas of Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive IT Roles We Recruit For
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our expertise covers the full spectrum of technology, from engineering and infrastructure to leadership and product management.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.category}
              className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-card-shadow"
            >
              <h3 className="text-xl font-semibold leading-7 text-foreground">
                {role.category}
              </h3>
              <ul role="list" className="mt-6 space-y-4 flex-1">
                {role.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesWeRecruit;
