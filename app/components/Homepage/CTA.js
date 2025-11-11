"use client";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-background/70">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your IT Team?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Whether you're hiring tech talent or looking for your next IT role,
            we're here to help.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Employers */}
          <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              For Employers
            </h3>
            <p className="text-muted-foreground flex-grow">
              Find the perfect pre-vetted IT professionals to drive your
              business forward.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* For Job Seekers */}
          <div className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-card-shadow hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              For Job Seekers
            </h3>
            <p className="text-muted-foreground flex-grow">
              Discover exclusive career opportunities with innovative companies.
            </p>
            <Link
              href="/jobs"
              className="mt-8 inline-block rounded-md bg-secondary text-secondary-foreground px-6 py-3 text-base font-semibold shadow-sm hover:bg-secondary/90"
            >
              Upload Your Resume
            </Link>
          </div>
        </div>
        <div className="mt-16 text-center border-t border-border pt-8">
          <p className="text-muted-foreground">
            Passionate about IT recruitment? Join our growing team.
          </p>
          <Link
            href="/careers"
            className="mt-2 inline-block text-base font-semibold leading-6 text-primary hover:text-primary/90"
          >
            View Open Positions <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
