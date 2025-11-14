"use client";
import { ShieldCheck, BadgeCheck, ServerCog, Check } from "lucide-react";

const securityPoints = [
  {
    title: 'Data Protection',
    icon: ShieldCheck,
    items: ['NDA for all team members', 'Secure development practices', 'IP rights protection', 'Data confidentiality maintained'],
  },
  {
    title: 'Compliance',
    icon: BadgeCheck,
    items: ['ISO 27001 certified processes', 'GDPR compliance (if applicable)', 'Industry-specific compliance', 'Regular security audits'],
  },
  {
    title: 'Infrastructure Security',
    icon: ServerCog,
    items: ['Secure VPN access', 'Multi-factor authentication', 'Encrypted communication', 'Access logging and monitoring'],
  },
];

const Security = () => {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Security & Compliance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We prioritize the security of your data and adhere to the highest
            industry standards for compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {securityPoints.map((point) => (
            <div key={point.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{point.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {point.items.map((item) => (
                  <li key={item} className="flex items-start text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
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

export default Security;
