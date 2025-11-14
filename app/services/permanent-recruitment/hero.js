"use client";
import Image from "next/image";
import heroserves from "../../../assats/heroserves.svg";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8080800D 1px, transparent 1px), linear-gradient(to bottom, #8080800D 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-down">
              Permanent Recruitment
            </h1>
            <p
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Building the core of your team with dedicated, long-term IT professionals who align with your company's vision and culture.
            </p>
          </div>

          {/* Image Content */}
          <div
            className="mt-12 lg:mt-0 "
            style={{ animationDelay: "0.6s" }}
          >
          <Image
            src={heroserves}
            alt="Building your core team with long-term talent"
            width={700}
            height={542}
            className="w-full max-w-2xl mx-auto"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
