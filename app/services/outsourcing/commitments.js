"use client";
import {
  Server,
  BadgeCheck,
  MessageSquare,
  RefreshCw,
  Check,
} from "lucide-react";

const slas = [
  {
    title: "Availability",
    icon: Server,
    items: [
      "99% team availability",
      "24-hour response for critical issues",
      "Maximum 5 sick days per resource/year",
    ],
  },
  {
    title: "Quality Standards",
    icon: BadgeCheck,
    items: [
      "Code quality metrics",
      "Bug-free delivery targets",
      "Documentation standards",
      "Security best practices",
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    items: [
      "Daily standups",
      "Weekly progress reports",
      "Monthly review meetings",
      "Quarterly business reviews",
    ],
  },
  {
    title: "Replacement",
    icon: RefreshCw,
    items: [
      "15-day notice for planned departures",
      "Immediate replacement for performance issues",
      "Knowledge transfer ensured",
    ],
  },
];

const Commitments = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Service Level Commitments
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We guarantee a high standard of service and clear communication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {slas.map((sla) => (
            <div key={sla.title} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <sla.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{sla.title}</h3>
              </div>
              <ul className="space-y-3 mt-6 flex-grow">
                {sla.items.map((item) => (
                  <li key={item} className="flex items-start text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
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

export default Commitments;
