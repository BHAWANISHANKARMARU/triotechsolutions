"use client";
import { Briefcase, Users, MessageSquare } from "lucide-react";

const responseData = [
  {
    title: "Employer Inquiries",
    icon: <Briefcase className="h-8 w-8" />,
    points: [
      "Initial response: Within 4 business hours",
      "Consultation scheduling: Within 24 hours",
    ],
  },
  {
    title: "Job Seeker Inquiries",
    icon: <Users className="h-8 w-8" />,
    points: [
      "Profile review: Within 24 hours",
      "Job matching: Within 48 hours",
    ],
  },
  {
    title: "General Inquiries",
    icon: <MessageSquare className="h-8 w-8" />,
    points: ["Response time: Within 24 business hours"],
  },
];

export default function ResponseTime() {
  return (
    <section id="response-time" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What to Expect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing timely and helpful responses to all
            inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {responseData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift"
            >
              <div className="text-primary">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
