"use client";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Clock,
  Globe,
  GraduationCap,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const solutions = [
  {
    title: "Flexible Placement",
    description:
      "Short-term project staffing with quick deployment (24-48 hours) to scale your team up or down as needed.",
    href: "/services/flexible-placement",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    title: "Permanent Recruitment",
    description:
      "End-to-end, full-time hiring solutions with a focus on cultural fit for long-term talent acquisition.",
    href: "/services/permanent-recruitment",
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    title: "Contract Staffing",
    description:
      "Access project-based specialists in Cloud, DevOps, and Cybersecurity for your business transformation teams.",
    href: "/services/contract-staffing",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Outsourcing",
    description:
      "Delegate team management and HR administration to us, so you can focus on your core business.",
    href: "/services/outsourcing",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Campus Hiring",
    description:
      "Build your future talent pipeline with our fresh IT graduate programs and entry-level developer hiring.",
    href: "/services/campus-hiring",
    icon: <GraduationCap className="h-8 w-8" />,
  },
  {
    title: "Training & Upskilling",
    description:
      "Reskill your existing teams and accelerate new technology adoption with our custom training programs.",
    href: "/services/training",
    icon: <TrendingUp className="h-8 w-8" />,
  },
];

const ITStaffingSolutions = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our IT Staffing Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of services designed to meet your every
            technology hiring need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Link
              href={solution.href}
              key={solution.title}
              className="group block"
            >
              <div className="bg-card h-full border border-border rounded-xl p-8 flex flex-col shadow-card-shadow transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                    {solution.icon}
                  </div>
                </div>
                <div className="mt-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-primary flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITStaffingSolutions;
