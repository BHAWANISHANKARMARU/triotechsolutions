import React from "react";
import Link from "next/link";
import Image from "next/image";
import team from "../../assats/team.svg";

const GetStarted = () => {
  return (
    <section className="bg-muted/40">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready to Build Your Junior Tech Team?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Whether you want to schedule your next recruitment cycle, hire
              pre-trained graduates, or get a custom proposal, we're here to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Plan Campus Drive
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90 transition-colors"
              >
                Request Proposal
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image src={team} alt="Build your tech team" className="w-full max-w-lg mx-auto h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;