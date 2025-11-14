"use client";
import { Replace, GraduationCap, Cloud } from "lucide-react";
import Image from "next/image";
import sucess from "../../../assats/sucess.svg";

const stories = [
  {
    category: "Legacy Modernization",
    icon: <Replace className="h-8 w-8" />,
    title: "Upskilling a .NET Team to Node.js for a Legacy Migration",
    challenge: "A financial services company needed to migrate a monolithic .NET application to a modern Node.js microservices architecture without hiring a new team.",
    solution: "We delivered an 8-week intensive Node.js bootcamp for their 12 existing .NET developers, focusing on API development, async patterns, and containerization.",
    result: "The entire team was successfully upskilled. They led the migration project, which was completed 3 months ahead of schedule, saving significant hiring costs.",
  },
  {
    category: "Campus to Corporate",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Building a Job-Ready Workforce from 30 Fresh Graduates",
    challenge: "A large tech consultancy needed to onboard 30 campus hires and make them billable full-stack developers within 4 months.",
    solution: "We designed and executed a comprehensive 4-month full-stack training program covering React, Java, Spring Boot, and professional skills.",
    result: "95% of the trainees were deployed to active projects by the end of the program, with a 90% retention rate after their first year.",
  },
  {
    category: "Cloud Transformation",
    icon: <Cloud className="h-8 w-8" />,
    title: "Enabling a Traditional Infrastructure Team for AWS",
    challenge: "An enterprise client's infrastructure team needed to transition from on-premise data centers to managing a large-scale AWS environment.",
    solution: "We provided a 6-week AWS Solutions Architect certification program, complete with hands-on labs and real-world migration scenarios.",
    result: "85% of the team (8 engineers) achieved AWS certification. The team now confidently manages their cloud infrastructure, reducing reliance on external consultants.",
  },
];

const SuccessStories = () => {
  const firstStory = stories[0];
  const otherStories = stories.slice(1);

  return (
    <section id="success" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real-World Training Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our training programs have empowered teams and driven business transformation.
          </p>
        </div>
        <div className="space-y-12">
          {/* Top Row: Featured Story and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              key={firstStory.title}
              className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-card-shadow hover-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 text-primary">
                  {firstStory.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {firstStory.category}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {firstStory.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground/80">Challenge:</strong>{" "}
                  {firstStory.challenge}
                </p>
                <p>
                  <strong className="text-foreground/80">Solution:</strong>{" "}
                  {firstStory.solution}
                </p>
                <p>
                  <strong className="text-primary">Result:</strong> {firstStory.result}
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up hidden lg:block">
              <Image
                src={sucess}
                alt="Illustration for success stories"
                width={500}
                height={400}
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Bottom Row: Other Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {otherStories.map((story) => (
              <div
                key={story.title}
                className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-card-shadow hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 text-primary">{story.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {story.category}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {story.title}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    <strong className="text-foreground/80">Challenge:</strong>{" "}
                    {story.challenge}
                  </p>
                  <p>
                    <strong className="text-foreground/80">Solution:</strong>{" "}
                    {story.solution}
                  </p>
                  <p>
                    <strong className="text-primary">Result:</strong> {story.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
