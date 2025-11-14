"use client";
import { Rocket, ShoppingCart, Landmark } from "lucide-react";
import Image from "next/image";
import sucess from "../../../assats/sucess.svg";

const stories = [
  {
    category: "SaaS Startup",
    icon: <Rocket className="h-8 w-8" />,
    title: "Building a Core Engineering Team from Scratch",
    challenge: "A seed-stage startup needed to hire its first three senior software engineers within one month to build its MVP.",
    solution: "We leveraged our network to find passive candidates with the specific tech stack experience (React, Node.js) and a passion for early-stage products.",
    result: "All three positions were filled in just 21 days. The team successfully launched the MVP, leading to a successful Series A funding round.",
  },
  {
    category: "E-commerce Company",
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Reducing Developer Turnover with Culture-Fit Hiring",
    challenge: "A mid-sized e-commerce firm was struggling with high developer turnover due to poor cultural fit and misaligned expectations.",
    solution: "We implemented an in-depth cultural assessment and behavioral interviews, focusing on candidates' long-term goals and work style.",
    result: "We placed four new developers over two months. After 18 months, all four are still with the company, and team morale has significantly improved.",
  },
  {
    category: "FinTech Firm",
    icon: <Landmark className="h-8 w-8" />,
    title: "Securing a Niche Engineering Leadership Role",
    challenge: "A FinTech company needed a VP of Engineering with rare experience in both blockchain technology and traditional banking compliance.",
    solution: "Our executive search team conducted a highly targeted, confidential search, engaging top-tier leaders across the globe.",
    result: "We successfully placed a candidate with the perfect blend of skills in 8 weeks. The new VP has since tripled the size of the engineering team.",
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
            Proven Success in Permanent Placement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our dedicated permanent recruitment approach has delivered lasting results for our partners.
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