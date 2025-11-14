"use client";
import Link from "next/link";
import { UploadCloud, Search } from "lucide-react";

const ReadyToStart = () => {
  return (
    <section id="ready-to-start" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="relative isolate overflow-hidden bg-card border border-border px-6 py-20 text-center shadow-card-shadow sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Start Your IT Career Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Take the first step today. Let us connect you with exciting IT
            opportunities and provide expert advice for your career growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <Link
              href="/contact#form"
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <UploadCloud className="h-5 w-5" />
              Upload Resume
            </Link>
            <Link
              href="/jobs"
              className="flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90"
            >
              <Search className="h-5 w-5" />
              Browse Jobs
            </Link>
          </div>
          <div
            className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-primary/50 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
