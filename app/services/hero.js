import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroServes from "../../assats/heroserves.svg";

const Hero = () => {
  return (
    <section className="bg-muted/40">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-fade-in-down">
              Campus Hiring Solutions
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              End-to-end campus recruitment solutions to hire fresh IT
              graduates. From college partnerships to trained, job-ready
              professionals, we help you build your future tech talent pipeline.
            </p>
            <div
              className="mt-10 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/contact"
                className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Plan a Campus Drive
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 " style={{ animationDelay: "0.9s" }}>
            <Image src={heroServes} alt="Campus Hiring Solutions" width={500} height={500} className="w-full max-w-md mx-auto h-auto" priority />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;