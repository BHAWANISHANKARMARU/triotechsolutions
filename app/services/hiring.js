import React from "react";
import { CheckCircle2 } from "lucide-react";

const recruitmentServices = [
  "College Partnerships: Tie-ups with top engineering colleges and brand building.",
  "Candidate Sourcing: Access to 50,000+ students from CS, IT, and Engineering streams.",
  "Screening & Assessment: Technical aptitude tests, coding assessments, and communication evaluation.",
  "Interview Coordination: Scheduled on-campus or virtual interviews and offer letter processing.",
];

const trainingServices = [
  "Pre-Joining Training: 4-8 week intensive programs with practical project experience.",
  "Customized Curriculum: Tailored to your technology stack, business domain, and coding standards.",
  "Post-Joining Support: First 90-day mentorship, performance tracking, and continuous learning paths.",
];

const HiringServices = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Our Campus Hiring Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of services covering the entire campus recruitment lifecycle, from sourcing to training.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* End-to-End Recruitment */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              End-to-End Recruitment
            </h3>
            <ul className="space-y-4 text-muted-foreground flex-grow">
              {recruitmentServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Programs */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Training Programs
            </h3>
            <ul className="space-y-4 text-muted-foreground flex-grow">
              {trainingServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringServices;