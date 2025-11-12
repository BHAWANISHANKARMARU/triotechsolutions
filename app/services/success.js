import React from "react";
import { Rocket, ShoppingCart, Server } from "lucide-react";

const successData = [
  {
    title: "SaaS Startup",
    icon: <Rocket className="h-8 w-8" />,
    challenge: "Hire 25 junior developers for new product development.",
    solution: "Campus drives at 5 colleges + 10-week training.",
    result:
      "28 candidates hired, 26 completed training, 23 still employed after 18 months.",
  },
  {
    title: "E-commerce Company",
    icon: <ShoppingCart className="h-8 w-8" />,
    challenge: "Build QA team with 15 fresh graduates.",
    solution: "Targeted campus hiring + specialized QA training.",
    result:
      "Team ready in 4 months, 90% retention, now handling full QA operations.",
  },
  {
    title: "Service Company",
    icon: <Server className="h-8 w-8" />,
    challenge: "Annual need for 50+ entry-level developers.",
    solution: "Annual campus hiring program with us.",
    result:
      "Consistent quality talent, 30% cost savings vs experienced hiring.",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-world examples of how we've helped companies build their tech
            teams with fresh talent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {successData.map((story) => (
            <div
              key={story.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {story.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-4">
                  {story.title}
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm flex-grow">
                <p>
                  <strong className="text-foreground/80">Challenge:</strong> {story.challenge}
                </p>
                <p>
                  <strong className="text-foreground/80">Solution:</strong> {story.solution}
                </p>
                <p>
                  <strong className="text-primary">Result:</strong> {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;