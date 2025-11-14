"use client";
import { Sparkles, GaugeCircle, HeartHandshake, TrendingUp } from "lucide-react";

const outcomes = [
  {
    name: 'Enhanced Employee Skills & Confidence',
    description: 'Participants gain proficiency in new technologies and earn industry-recognized certifications, boosting their confidence and on-the-job performance.',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    name: 'Increased Team Productivity & Innovation',
    description: 'A better-skilled team leads to faster project delivery, higher code quality, and a greater capacity for innovation and creative problem-solving.',
    icon: <GaugeCircle className="h-6 w-6" />,
  },
  {
    name: 'Higher Employee Retention',
    description: 'Investing in career development shows employees they are valued, leading to increased job satisfaction and a 20-30% improvement in retention rates.',
    icon: <HeartHandshake className="h-6 w-6" />,
  },
  {
    name: 'Accelerated Internal Career Growth',
    description: 'Our programs create clear pathways for internal mobility, allowing you to promote from within and build a strong pipeline of future leaders.',
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

const TrainingOutcomes = () => {
  return (
    <section id="outcomes" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Tangible Results
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Measurable Training Outcomes
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our training isn't just theoretical. We focus on delivering concrete benefits for both your employees and your bottom line.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {outcome.icon}
                  </div>
                  {outcome.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {outcome.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default TrainingOutcomes;
