"use client";
import { CheckCircle2, Presentation, Laptop, Users } from "lucide-react";

const formats = [
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    category: 'Instructor-Led Training (ILT)',
    subtitle: 'Live Virtual or On-Site',
    items: ['Real-time interaction with expert trainers', 'Immediate Q&A and feedback', 'Ideal for group discussions and collaboration', 'Structured, scheduled learning path'],
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    category: 'Self-Paced Learning',
    subtitle: 'Online Modules & On-Demand Content',
    items: ['Flexible learning schedule, accessible 24/7', 'Comprehensive video lectures and tutorials', 'Interactive labs and knowledge checks', 'Learn at your own individual pace'],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    category: 'Workshops & Bootcamps',
    subtitle: 'Intensive, Project-Based Sessions',
    items: ['Deep dives into a specific technology (2-5 days)', 'Hands-on, real-world project building', 'Fosters intense team collaboration and innovation', 'Rapidly develop practical, applicable skills'],
  },
];

const TrainingFormats = () => {
  return (
    <section id="formats" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Flexible Delivery
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Training Formats to Fit Your Needs
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We offer a variety of training formats to accommodate different learning styles, schedules, and organizational requirements.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {formats.map((format) => (
            <div
              key={format.category}
              className="flex flex-col p-8 bg-card border border-border rounded-2xl shadow-card-shadow"
            >
              <div className="flex-shrink-0">{format.icon}</div>
              <h3 className="text-xl font-semibold leading-7 text-foreground mt-6">
                {format.category}
              </h3>
              <p className="text-sm font-semibold text-muted-foreground mt-1">{format.subtitle}</p>
              <ul role="list" className="mt-6 space-y-4 flex-grow">
                {format.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingFormats;
