"use client";
import { Quote, Clock } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    quote:
      "Trio Tech Solutions helped me transition from QA to DevOps. They found the perfect role that valued my testing background and supported me at every step.",
    name: "Rohit M.",
    role: "DevOps Engineer",
    time: "Placed in 2 weeks",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    quote:
      "As a fresher, I was struggling to find opportunities. Their campus hiring program was a game-changer and landed me my first developer job at a great company!",
    name: "Sneha K.",
    role: "Junior Developer",
    time: "Placed in 3 weeks",
    avatar: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    quote:
      "They negotiated a 30% salary increase for me and found a remote role with an amazing company culture. The process was confidential and incredibly efficient.",
    name: "Vikram S.",
    role: "Full Stack Developer",
    time: "Placed in 10 days",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Success Stories from Our Candidates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-card border border-border rounded-xl p-6 shadow-card-shadow hover-lift flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
              <p className="text-muted-foreground flex-grow mb-6">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="mt-auto border-t border-border pt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={story.avatar}
                    alt={`Avatar of ${story.name}`}
                    width={40}
                    height={40}
                    objectFit="cover"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <div className="text-sm text-primary font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>{story.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
