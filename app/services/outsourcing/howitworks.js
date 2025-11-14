"use client";
import { Check } from "lucide-react";

const steps = [
  {
    step: 'Step 1: Requirement Analysis (Week 1)',
    title: 'Understand project scope',
    items: ['Define team structure', 'Identify skill requirements', 'Determine timelines'],
  },
  {
    step: 'Step 2: Team Assembly (Week 1-2)',
    title: 'Handpick team members',
    items: ['Match skills to requirements', 'Prepare team profiles', 'Arrange team interviews'],
  },
  {
    step: 'Step 3: Onboarding (Week 2-3)',
    title: 'Contract finalization',
    items: ['Team introduction', 'Access and tools setup', 'Process alignment'],
  },
  {
    step: 'Step 4: Project Kickoff (Week 3)',
    title: 'Sprint planning',
    items: ['Communication protocols', 'Deliverable definition', 'Timeline confirmation'],
  },
  {
    step: 'Step 5: Ongoing Delivery',
    title: 'Regular sprint cycles',
    items: ['Weekly progress reports', 'Monthly reviews', 'Continuous support'],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Outsourcing Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent and structured process to ensure your team is built
            and integrated efficiently.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* The vertical line */}
          <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>

          {steps.map((item, index) => (
            <div key={item.step} className="mb-8 flex justify-between md:items-center w-full flex-col md:flex-row">
              {/* Left or Right side content based on index */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover-lift">
                  <p className="text-sm font-semibold text-primary mb-1">{item.step}</p>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {item.items.map((detail) => (
                      <li key={detail} className="flex items-start text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* The center dot */}
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground font-bold order-1 md:order-2 my-4 md:my-0">
                {index + 1}
              </div>
              {/* Empty spacer for alignment */}
              <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
