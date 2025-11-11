"use client";
import { Hourglass, SearchX, TrendingDown, Globe } from "lucide-react";

const challenges = [
  {
    title: "Slow Hiring Process",
    icon: <Hourglass className="h-8 w-8" />,
    points: [
      "Time-to-hire exceeds 45+ days",
      "Missing out on top candidates",
      "Projects delayed due to staffing gaps",
    ],
  },
  {
    title: "Quality Concerns",
    icon: <SearchX className="h-8 w-8" />,
    points: [
      "Resumes don't match actual skills",
      "Poor cultural fit leading to turnover",
      "Lack of technical expertise assessment",
    ],
  },
  {
    title: "High Costs",
    icon: <TrendingDown className="h-8 w-8" />,
    points: [
      "Expensive job board subscriptions",
      "Internal recruiter overhead",
      "Lost productivity during vacancies",
    ],
  },
  {
    title: "Limited Reach",
    icon: <Globe className="h-8 w-8" />,
    points: [
      "Can't access passive candidates",
      "Restricted talent pool",
      "Geographic limitations",
    ],
  },
];

const HiringChallenges = () => {
  return (
    <section id="challenges" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your IT Hiring Challenges
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Common pain points we solve to streamline your recruitment and
            secure top talent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift"
            >
              <div className="text-primary">{challenge.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">
                {challenge.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-left list-disc pl-5">
                {challenge.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringChallenges;
