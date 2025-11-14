"use client";
import Link from "next/link";
import Image from "next/image";
import heroemjobseek from "../../../assats/herojobseek.svg";

const Hero = () => {
  return (
    <section className="bg-muted/40">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-fade-in-down"
            >
              Find Your Next IT Career Opportunity
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Access exclusive tech jobs with leading companies. Your dream
              career is just a click away.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
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

          {/* Image Content */}
          <div
            className="mt-12 lg:mt-0 "
            style={{ animationDelay: "0.9s" }}
          >
            <Image
              src={heroemjobseek}
              alt="Illustration for job seekers"
              width={600}
              height={450}
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
