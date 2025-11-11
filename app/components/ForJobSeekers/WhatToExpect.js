"use client";
import { PlayCircle, Clock, Repeat, CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    title: "Immediate",
    icon: <PlayCircle className="h-8 w-8" />,
    points: [
      "Profile review by our team",
      "Job matching begins",
      "Access to job portal",
    ],
  },
  {
    title: "Within 48 Hours",
    icon: <Clock className="h-8 w-8" />,
    points: [
      "Recruiter contact",
      "Initial screening call",
      "Personalized job recommendations",
    ],
  },
  {
    title: "Ongoing",
    icon: <Repeat className="h-8 w-8" />,
    points: [
      "Regular job alerts",
      "Interview opportunities",
      "Career guidance support",
    ],
  },
];

const WhatToExpect = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          What to Expect After Registration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {timelineData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 shadow-card-shadow hover-lift flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-4">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
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

export default WhatToExpect;
