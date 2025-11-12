import React from "react";
import {
  DollarSign,
  Users,
  Award,
  Scaling,
  GraduationCap,
} from "lucide-react";

const benefitsData = [
  {
    title: "Cost-Effective Hiring",
    description:
      "Hire entry-level talent at 50-60% lower cost than experienced professionals, delivering a high ROI over 2-3 years.",
    icon: <DollarSign className="h-8 w-8" />,
  },
  {
    title: "Fresh Talent Pool",
    description:
      "Access enthusiastic, digital-native graduates with the latest academic knowledge and fresh perspectives.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Cultural Fit",
    description:
      "Cultivate your company culture from day one and build strong team loyalty, leading to lower long-term attrition rates.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    title: "Scalable Process",
    description:
      "Efficiently hire in batches of 10 to 100+ candidates through a standardized and streamlined evaluation process.",
    icon: <Scaling className="h-8 w-8" />,
  },
  {
    title: "Training Included",
    description:
      "Our 'Train & Hire' model delivers job-ready professionals pre-trained in your specific tech stack, reducing onboarding time.",
    icon: <GraduationCap className="h-8 w-8" />,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Key Benefits of Campus Hiring
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Invest in young talent and build a loyal, cost-effective team for the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefitsData.map((benefit) => (
            <div key={benefit.title} className="bg-card border border-border rounded-xl p-8 shadow-card-shadow hover-lift flex flex-col text-center items-center">
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;