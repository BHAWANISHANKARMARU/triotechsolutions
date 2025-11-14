"use client";
import { Award, Target, Lightbulb, TrendingUp } from "lucide-react";

const stories = [
  {
    title: 'Case Study 1: E-commerce Platform',
    challenge: 'Build entire e-commerce platform with 9-month deadline',
    solution: 'Dedicated 8-member team (full-stack + DevOps + QA)',
    result: 'Delivered on time, saved 45% vs in-house hiring, platform now processes $5M annually',
  },
  {
    title: 'Case Study 2: Healthcare App',
    challenge: 'Needed HIPAA-compliant mobile app development team',
    solution: 'Specialized 5-member team with healthcare domain expertise',
    result: 'App launched in 6 months, 50,000+ downloads, maintained for 2+ years',
  },
  {
    title: 'Case Study 3: FinTech Startup',
    challenge: 'Build MVP with limited budget',
    solution: 'Small 4-member team with startup experience',
    result: 'MVP delivered in 3 months, secured Series A funding, team scaled to 10 members',
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of how we help businesses achieve their goals
            through IT outsourcing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stories.map((story) => (
            <div key={story.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{story.title}</h3>
              </div>

              <div className="mt-6 space-y-4 flex-grow">
                <div>
                  <h4 className="font-semibold text-card-foreground flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    Challenge
                  </h4>
                  <p className="mt-1 text-muted-foreground text-sm">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground flex items-center gap-2 text-sm">
                    <Lightbulb className="h-4 w-4 text-muted-foreground" />
                    Solution
                  </h4>
                  <p className="mt-1 text-muted-foreground text-sm">{story.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-semibold text-primary flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  Result
                </h4>
                <p className="mt-1 text-muted-foreground font-medium text-sm">{story.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
