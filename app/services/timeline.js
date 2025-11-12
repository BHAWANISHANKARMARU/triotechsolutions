import React from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";

const timelineData = [
  { period: "July - September", tasks: ["Planning and college outreach", "Pre-placement presentations"] },
  { period: "October - December", tasks: ["Campus drives and interviews", "Offer letter distribution"] },
  { period: "January - March", tasks: ["Final exams period", "Pre-joining training begins"] },
  { period: "April - June", tasks: ["Graduation", "Joining and onboarding"] },
];

const Timeline = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Ideal Campus Hiring Calendar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A typical timeline for a successful campus recruitment cycle.
            <em className="block text-sm mt-2">*Timelines may vary based on specific college academic calendars.</em>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {timelineData.map((item) => (
            <div
              key={item.period}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground ml-4">
                  {item.period}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {item.tasks.map((task) => (
                  <li key={task} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{task}</span>
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

export default Timeline;