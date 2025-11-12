"use client";
import { Rocket, Shield, Users } from "lucide-react";
import Image from "next/image";
import sucess from "../../../assats/sucess.svg";

const stories = [
  {
    category: "FinTech Startup",
    icon: <Rocket className="h-8 w-8" />,
    title: "Accelerated Team Scaling for Product Launch",
    challenge:
      "Needed 5 full-stack developers within 2 weeks to meet a critical product launch deadline.",
    solution:
      "Deployed a team of pre-vetted React & Node.js developers from our talent pool.",
    result:
      "The team was hired in just 10 days, enabling the client to launch their product on schedule and secure their first round of funding.",
  },
  {
    category: "E-commerce Company",
    icon: <Shield className="h-8 w-8" />,
    title: "Building a Dedicated Cybersecurity Team",
    challenge:
      "Required a specialized cybersecurity team to meet new compliance standards and protect customer data.",
    solution:
      "Placed three certified security engineers with expertise in threat detection and compliance protocols.",
    result:
      "The client successfully achieved compliance certification and has reported zero security incidents since the team was onboarded.",
  },
  {
    category: "Healthcare Tech",
    icon: <Users className="h-8 w-8" />,
    title: "Scaling Junior Talent Through Campus Hiring",
    challenge:
      "Needed to build a pipeline of junior talent by hiring 20 entry-level developers.",
    solution:
      "Designed and executed a structured campus recruitment drive, including assessments and a custom training program.",
    result:
      "A strong junior team was built, with a 95% employee retention rate after the first year, significantly reducing future hiring costs.",
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
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of how we've helped companies like yours achieve
            their hiring goals.
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
            <div className="animate-fade-in-up">
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
