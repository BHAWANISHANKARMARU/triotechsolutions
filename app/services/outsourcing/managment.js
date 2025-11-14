"use client";
import { UserCheck, Shield, Check } from "lucide-react";

const yourControl = {
  title: 'Daily Management',
  items: ['Assign tasks directly', 'Set priorities', 'Daily standups', 'Sprint planning'],
};

const toolsAccess = {
  title: 'Tools & Access',
  items: ['Your project management tools', 'Your code repositories', 'Your communication channels', 'Your development environment'],
};

const ourSupport = {
  title: 'Administrative',
  items: ['HR and payroll', 'Leave management', 'Performance reviews', 'Replacement handling'],
};

const qualityOversight = {
  title: 'Quality Oversight',
  items: ['Code reviews', 'Quality audits', 'Best practices enforcement', 'Continuous improvement'],
};

const Management = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Management & Communication
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We ensure a seamless collaboration model where you retain full
            control over your project's direction while we handle the
            operational overhead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Your Control Card */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift">
            <div className="flex items-center justify-center flex-col text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Your Control</h3>
            </div>
            <div className="mt-8 space-y-6">
              {[yourControl, toolsAccess].map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-card-foreground">{section.title}</h4>
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item) => (
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

          {/* Our Support Card */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover-lift">
            <div className="flex items-center justify-center flex-col text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent-foreground mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">Our Support</h3>
            </div>
            <div className="mt-8 space-y-6">
              {[ourSupport, qualityOversight].map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-card-foreground">{section.title}</h4>
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item) => (
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
        </div>
      </div>
    </section>
  );
};

export default Management;
