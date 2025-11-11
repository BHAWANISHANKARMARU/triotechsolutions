"use client";
import { Award, FileText, RefreshCw, Globe } from "lucide-react";

const types = [
  {
    name: "Permanent Roles",
    description:
      "Full-time positions with direct company employment, benefits, and long-term career growth.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    name: "Contract Positions",
    description:
      "Project-based work with competitive rates and diverse project experience.",
    icon: <FileText className="h-8 w-8" />,
  },
  {
    name: "Contract-to-Permanent",
    description:
      "Start as a contractor, evaluate the fit, and then convert to a full-time role.",
    icon: <RefreshCw className="h-8 w-8" />,
  },
  {
    name: "Remote Opportunities",
    description:
      "Work from anywhere with flexible schedules and home office support.",
    icon: <Globe className="h-8 w-8" />,
  },
];

const EmploymentTypes = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Flexible Employment Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {types.map((type) => (
            <div
              key={type.name}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-card-shadow hover-lift flex flex-col items-center"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {type.name}
              </h3>
              <p className="text-muted-foreground flex-grow">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentTypes;
