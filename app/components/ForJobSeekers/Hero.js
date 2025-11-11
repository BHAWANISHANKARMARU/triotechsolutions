"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-muted/40 py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Find Your Next IT Career Opportunity
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          Access exclusive tech jobs with leading companies. Your dream career
          is just a click away.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/jobs"
            className="w-full sm:w-auto rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Browse IT Jobs
          </Link>
          <Link
            href="/contact#form"
            className="w-full sm:w-auto rounded-md bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90 transition-colors"
          >
            Upload Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
