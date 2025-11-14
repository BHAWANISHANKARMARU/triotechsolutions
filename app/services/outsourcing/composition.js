"use client";
import { Users2, Users, Building, Check } from "lucide-react";

const teams = [
  {
    size: "Small Team (3-5 members)",
    icon: Users2,
    members: ["1 Team Lead/Architect", "2-3 Developers", "1 QA Engineer"],
    cost: "₹[X] - ₹[X]",
  },
  {
    size: "Medium Team (6-10 members)",
    icon: Users,
    members: [
      "1 Project Manager",
      "1 Solution Architect",
      "4-6 Developers",
      "2 QA Engineers",
      "1 DevOps Engineer",
    ],
    cost: "₹[X] - ₹[X]",
  },
  {
    size: "Large Team (10+ members)",
    icon: Building,
    members: [
      "1 Delivery Manager",
      "2 Team Leads",
      "6-8 Developers",
      "2-3 QA Engineers",
      "1-2 DevOps Engineers",
      "1 UI/UX Designer",
    ],
    cost: "₹[X] - ₹[X]",
  },
];

const TeamComposition = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Team Composition Examples
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teams.map((team) => (
            <div key={team.size} className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <team.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{team.size}</h3>
              </div>
              <ul className="space-y-2 mt-6 flex-grow">
                {team.members.map((member) => (
                  <li key={member} className="flex items-start text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="font-semibold text-card-foreground">Monthly Cost:</p>
                <p className="font-bold text-2xl text-primary">{team.cost}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground">
          *Actual costs vary based on skills and experience.
        </p>
      </div>
    </section>
  );
};

export default TeamComposition;
