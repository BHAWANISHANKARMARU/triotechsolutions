"use client";

import Image from "next/image";
import ourmission from "../../../assats/ourmission.svg";

const OurMission = () => {
  return (
    <section id="mission" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <div className="animate-fade-in-up">
            <Image
              src={ourmission}
              alt="Illustration representing our mission"
              width={600}
              height={450}
              className="w-full max-w-lg mx-auto rounded-lg"
            />
          </div>
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              To empower businesses with the right technology talent and help IT
              professionals achieve their career goals.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              We believe that meaningful employment has the power to transform
              both companies and individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
