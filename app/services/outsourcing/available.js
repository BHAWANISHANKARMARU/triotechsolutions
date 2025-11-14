"use client";
import {
  Code2,
  CloudCog,
  BarChart3,
  ClipboardCheck,
  LifeBuoy,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    icon: Code2,
    items: [
      "Web application development",
      "Mobile app development",
      "API development and integration",
      "Legacy system modernization",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    items: [
      "Cloud infrastructure management",
      "CI/CD pipeline setup",
      "Container orchestration",
      "Monitoring and maintenance",
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    items: [
      "Data pipeline development",
      "Business intelligence solutions",
      "Data warehouse setup",
      "Analytics dashboard creation",
    ],
  },
  {
    title: "QA & Testing",
    icon: ClipboardCheck,
    items: [
      "Manual and automation testing",
      "Performance testing",
      "Security testing",
      "Test strategy and planning",
    ],
  },
  {
    title: "Support & Maintenance",
    icon: LifeBuoy,
    items: [
      "Application maintenance",
      "Bug fixing and updates",
      "24/7 technical support",
      "System monitoring",
    ],
  },
];

const AvailableServices = () => {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Available IT Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div key={service.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {service.items.map((item) => (
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

export default AvailableServices;
