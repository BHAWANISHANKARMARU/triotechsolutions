import React from "react";
import {
  FileSearch,
  ClipboardList,
  GraduationCap,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const includedData = [
  {
    title: "Sourcing & Screening",
    icon: <FileSearch className="h-8 w-8" />,
    points: [
      "Campus partnerships",
      "Pre-placement talks",
      "Resume collection",
      "Aptitude and technical tests",
      "Initial shortlisting",
    ],
  },
  {
    title: "Interview Support",
    icon: <ClipboardList className="h-8 w-8" />,
    points: [
      "Venue and logistics",
      "Interview coordination",
      "Panel support (if needed)",
      "Offer letter processing",
    ],
  },
  {
    title: "Training (Optional)",
    icon: <GraduationCap className="h-8 w-8" />,
    points: [
      "8-12 week bootcamp",
      "Technical and soft skills",
      "Project-based learning",
      "Certification",
    ],
  },
  {
    title: "Onboarding Support",
    icon: <UserCheck className="h-8 w-8" />,
    points: [
      "Joining formalities",
      "Initial orientation",
      "First 90-day mentorship",
      "Performance tracking",
    ],
  },
];

const Included = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What's Included in Our Service
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive, end-to-end service that covers every stage of the
            campus recruitment lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {includedData.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col"
            >
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
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

export default Included;