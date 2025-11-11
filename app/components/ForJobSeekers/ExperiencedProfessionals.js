"use client";
import Link from "next/link";
import {
  Star,
  Layers,
  TrendingUp,
  Target,
  Briefcase,
  Cpu,
  Users,
  Rocket,
} from "lucide-react";

const offerItems = [
  { text: "Leadership roles", icon: <Star className="h-5 w-5" /> },
  {
    text: "Architect and specialist positions",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    text: "Competitive compensation packages",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    text: "Access to high-impact projects",
    icon: <Target className="h-5 w-5" />,
  },
];

const whoShouldApplyItems = [
  {
    text: "Professionals with 2+ years of IT experience",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    text: "Individuals with specialized technical skills",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    text: "Candidates demonstrating leadership potential",
    icon: <Users className="h-5 w-5" />,
  },
  {
    text: "Ambitious individuals with clear career goals",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const ExperiencedProfessionals = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          For Experienced Professionals
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card-shadow">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              What We Offer
            </h3>
            <ul className="space-y-4">
              {offerItems.map((item) => (
                <li key={item.text} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                    {item.icon}
                  </div>
                  <span className="ml-4 text-muted-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-card-shadow">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Who Should Apply
            </h3>
            <ul className="space-y-4">
              {whoShouldApplyItems.map((item) => (
                <li key={item.text} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                    {item.icon}
                  </div>
                  <span className="ml-4 text-muted-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact#form"
            className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Upload Resume for Senior Roles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencedProfessionals;
