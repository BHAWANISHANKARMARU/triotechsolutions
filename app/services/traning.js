import React from "react";
import { Code2, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import traning from "../../assats/traning.svg";
import traning2 from "../../assats/traning2.svg";

const technicalTraining = [
  {
    title: "Full Stack Development",
    details: "8-12 week intensive program covering Frontend, Backend, and Databases with real project experience.",
  },
  {
    title: "Mobile App Development",
    details: "8-10 week program on iOS/Android or React Native, including an app store deployment project.",
  },
  {
    title: "Cloud & DevOps",
    details: "6-8 week program introducing AWS/Azure basics, Docker, and Kubernetes.",
  },
  {
    title: "Data Engineering",
    details: "8-10 week program on Python, SQL, Big Data basics, and building ETL pipelines.",
  },
];

const softSkillsTraining = [
  {
    title: "Professional Skills",
    details: "Business communication, email etiquette, and presentation skills.",
  },
  {
    title: "Workplace Readiness",
    details: "Team collaboration, time management, and critical problem-solving.",
  },
  {
    title: "Corporate Culture",
    details: "Understanding hierarchies, professional behavior, and work ethics.",
  },
];

const Training = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Training Programs We Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive technical and soft skills training designed to build a job-ready, professional workforce.
          </p>
        </div>
        <div className="mt-16 space-y-24">
          {/* Row 1: Technical Training */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">Technical Training</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {technicalTraining.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>{item.title}:</strong> {item.details}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up">
              <Image src={traning} alt="Technical Training" className="w-full max-w-lg mx-auto h-auto" />
            </div>
          </div>

          {/* Row 2: Soft Skills Training */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up lg:order-first order-last">
              <Image src={traning2} alt="Soft Skills Training" className="w-full max-w-lg mx-auto h-auto" />
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground ml-4">Soft Skills Training</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {softSkillsTraining.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>{item.title}:</strong> {item.details}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;