"use client";
import { Code2, Cloud, BarChart3, Shield, Briefcase } from "lucide-react";

const categories = [
  {
    name: "Software Development",
    icon: <Code2 className="h-8 w-8" />,
    jobs: [
      "Full Stack Developer",
      "Frontend Developer (React, Angular, Vue)",
      "Backend Developer (Java, Python, Node.js)",
      "Mobile Developer (iOS, Android, React Native)",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: <Cloud className="h-8 w-8" />,
    jobs: [
      "Cloud Engineer (AWS, Azure, GCP)",
      "DevOps Engineer",
      "Site Reliability Engineer",
      "System Administrator",
    ],
  },
  {
    name: "Data & Analytics",
    icon: <BarChart3 className="h-8 w-8" />,
    jobs: [
      "Data Engineer",
      "Data Scientist",
      "ML/AI Engineer",
      "Business Intelligence Analyst",
    ],
  },
  {
    name: "Cybersecurity",
    icon: <Shield className="h-8 w-8" />,
    jobs: [
      "Security Engineer",
      "Penetration Tester",
      "Security Analyst",
      "Compliance Manager",
    ],
  },
  {
    name: "Product & Management",
    icon: <Briefcase className="h-8 w-8" />,
    jobs: [
      "Product Manager",
      "Technical Project Manager",
      "Scrum Master",
      "Engineering Manager",
    ],
  },
];

const JobCategories = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Explore Job Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-card border border-border rounded-xl p-6 shadow-card-shadow hover-lift flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-4">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside flex-grow">
                {category.jobs.map((job) => (
                  <li key={job}>{job}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
