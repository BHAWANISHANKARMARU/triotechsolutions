"use client";
import Link from "next/link";

const JoinOurNetwork = () => {
  return (
    <section className="bg-background/70">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join Our Network
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Companies */}
          <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col shadow-card-shadow hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              For Companies
            </h3>
            <p className="text-muted-foreground flex-grow">
              Partner with us to access top IT talent and streamline your hiring
              process.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* For IT Professionals */}
          <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col shadow-card-shadow hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              For IT Professionals
            </h3>
            <p className="text-muted-foreground flex-grow">
              Register with us to discover exciting career opportunities in
              technology.
            </p>
            <Link
              href="/jobs"
              className="mt-8 inline-block rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Join Our Talent Network
            </Link>
          </div>

          {/* Work With Us */}
          <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col shadow-card-shadow hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Work With Us
            </h3>
            <p className="text-muted-foreground flex-grow">
              Looking for a career in recruitment? We're growing our team.
            </p>
            <Link
              href="/careers"
              className="mt-8 inline-block rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurNetwork;
