"use client";
import { Award, Activity, HeartHandshake, Smile } from "lucide-react";

const stats = [
  {
    value: "75%",
    label: "Average Skill Proficiency Gain",
    icon: <Award className="h-8 w-8" />,
  },
  {
    value: "25%",
    label: "Increase in Team Productivity",
    icon: <Activity className="h-8 w-8" />,
  },
  {
    value: "30%",
    label: "Improvement in Employee Retention",
    icon: <HeartHandshake className="h-8 w-8" />,
  },
  {
    value: "95%",
    label: "Participant Satisfaction Rate",
    icon: <Smile className="h-8 w-8" />,
  },
];

const SuccessMetrics = () => {
  return (
    <section id="metrics" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Data-Driven Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We measure our success by the tangible impact our training has on your teams and your business objectives.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl shadow-card-shadow"
              >
                <div className="text-primary mb-4">{stat.icon}</div>
                <dt className="text-5xl font-extrabold text-foreground leading-none tracking-tight">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
