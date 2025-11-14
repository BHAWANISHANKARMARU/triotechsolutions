"use client";
import { CheckCircle2, Clock } from "lucide-react";

const programs = [
  {
    category: 'Full Stack Development',
    items: ['Frontend Frameworks (React, Vue)', 'Backend APIs (Node.js, Python)', 'SQL & NoSQL Databases', 'Deployment & CI/CD'],
    duration: '12 Weeks',
  },
  {
    category: 'Cloud Engineering',
    items: ['AWS, Azure, or GCP Fundamentals', 'Infrastructure as Code (Terraform)', 'Serverless & Microservices', 'Cloud Security Best Practices'],
    duration: '8 Weeks',
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Containerization (Docker, k8s)', 'Automated Pipelines (Jenkins, GitLab)', 'Monitoring & Observability', 'GitOps Principles'],
    duration: '8 Weeks',
  },
  {
    category: 'Data Science & Machine Learning',
    items: ['Python for Data Analysis', 'ML Fundamentals & Algorithms', 'Data Visualization & Storytelling', 'Model Deployment & MLOps'],
    duration: '12 Weeks',
  },
  {
    category: 'Mobile App Development',
    items: ['Cross-Platform (React Native, Flutter)', 'Native iOS (Swift) & Android (Kotlin)', 'API Integration & State Management', 'App Store Deployment'],
    duration: '10 Weeks',
  },
  {
    category: 'Cybersecurity Foundations',
    items: ['Network Security Principles', 'Ethical Hacking & Pen Testing', 'Cloud Security (IAM, VPC)', 'Compliance & Risk Management'],
    duration: '10 Weeks',
  }
];

const TrainingPrograms = () => {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Core Curriculum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Flagship Training Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Intensive, hands-on bootcamps designed to build job-ready skills in high-demand technology domains.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.category}
              className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-card-shadow"
            >
              <h3 className="text-xl font-semibold leading-7 text-foreground">
                {program.category}
              </h3>
              <ul role="list" className="mt-6 space-y-4 flex-grow">
                {program.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4 flex items-center text-sm font-semibold text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>{program.duration} Full-Time</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
