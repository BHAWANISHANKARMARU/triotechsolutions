"use client";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: [
      "5+ years in IT recruitment.",
      "Technology industry veteran.",
      "Passionate about connecting talent with opportunity.",
    ],
    social: {
      linkedin: "#",
    },
  },
  // Example of a second team member. Uncomment and replace to add more.
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    imageUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    bio: [
      "Expert in streamlining recruitment processes.",
      "Ensures a seamless experience for clients.",
      "Dedicated to operational excellence.",
    ],
    social: {
      linkedin: "#",
    },
  },
  // Add more team members here
];

const LeadershipTeam = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Minds Behind Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the experienced leader guiding our vision.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-4xl mx-auto">
          {team.map((person) => (
            <div
              key={person.name}
              className="bg-card p-8 rounded-xl border border-border shadow-card-shadow hover-lift flex flex-col items-center text-center"
            >
              <div className="relative">
                <img
                  className="mx-auto h-32 w-32 rounded-full "
                  src={person.imageUrl}
                  alt={`Photo of ${person.name}`}
                  width={128}
                  height={128}
                />
                <a
                  href={person.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="text-base text-primary font-medium">
                {person.role}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-left list-disc pl-5">
                {person.bio.map((point) => (
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

export default LeadershipTeam;
