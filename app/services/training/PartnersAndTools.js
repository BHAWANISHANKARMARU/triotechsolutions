"use client";
import { Library, Laptop, Users, CheckCircle2 } from "lucide-react";

const partners = [
  { name: 'AWS' },
  { name: 'Google Cloud' },
  { name: 'Microsoft Azure' },
  { name: 'Kubernetes' },
  { name: 'Scrum.org' },
  { name: 'Oracle' },
];

const resources = [
  {
    icon: <Library className="h-8 w-8 text-primary" />,
    category: 'Online Learning Platform',
    items: ['Centralized LMS for all course content', 'Extensive library of video lectures', 'Access to code repositories and sandboxes'],
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    category: 'Hands-On Labs & Environments',
    items: ['Pre-configured cloud and development labs', 'Real-world project simulations', 'Interactive coding environments'],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    category: 'Expert & Peer Support',
    items: ['Dedicated channels for Q&A with instructors', 'Peer-to-peer discussion forums', 'Code review and feedback sessions'],
  },
];

const PartnersAndTools = () => {
  return (
    <section id="partners-tools" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 space-y-24">
        {/* Partners Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Certification & Technology Partners
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We align our curriculum with leading technology providers and certification bodies.
            </p>
          </div>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center items-center h-24 p-4 bg-card border border-border rounded-2xl shadow-card-shadow">
                <p className="text-2xl font-bold text-muted-foreground">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Resources Section */}
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Everything You Need to Succeed
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tools & Resources Included
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.category}
                className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-card-shadow"
              >
                <div className="flex-shrink-0">{resource.icon}</div>
                <h3 className="text-xl font-semibold leading-7 text-foreground mt-6">
                  {resource.category}
                </h3>
                <ul role="list" className="mt-6 space-y-4 flex-grow">
                  {resource.items.map((item) => (
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
      </div>
    </section>
  );
};

export default PartnersAndTools;
