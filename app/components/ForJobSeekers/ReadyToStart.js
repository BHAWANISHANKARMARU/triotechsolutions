"use client";
import Link from "next/link";

const ReadyToStart = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Start Your IT Career Journey?
        </h2>
        <p className="mt-6 text-lg leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Take the first step today. Let us connect you with exciting IT
          opportunities and provide expert advice for your career growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact#form"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Upload Resume
          </Link>
          <Link
            href="/jobs"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-primary-foreground/50 px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
