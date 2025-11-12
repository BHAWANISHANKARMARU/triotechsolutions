import React from "react";
import { Rocket, GraduationCap, HeartHandshake, CheckCircle2 } from "lucide-react";

const metricsData = [
  {
    title: "Hiring Speed",
    icon: <Rocket className="h-8 w-8" />,
    points: ["3-4 month complete cycle", "20-50 candidates per drive", "90% joining rate"],
  },
  {
    title: "Training Outcomes",
    icon: <GraduationCap className="h-8 w-8" />,
    points: ["85-90% successful completion", "Job-ready in 8-12 weeks", "Positive employer feedback"],
  },
  {
    title: "Retention",
    icon: <HeartHandshake className="h-8 w-8" />,
    points: ["75-80% retention after 1 year", "60-65% retention after 2 years", "Higher than industry average"],
  },
];

const Metrics = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Proven Success Metrics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our results-driven approach delivers measurable outcomes in hiring
            speed, talent quality, and long-term retention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {metricsData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col items-start"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
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

export default Metrics;