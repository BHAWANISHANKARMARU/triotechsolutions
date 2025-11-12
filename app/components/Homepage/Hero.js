"use client";
import Link from "next/link";
import Image from "next/image";
import herohome from "../../../assats/herogif.gif";

const Hero = () => {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down"
            >
              Connect Top IT Talent with Leading Companies
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Expert IT staffing solutions that drive business growth and career
              success.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/for-employers"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Find Top Talent
              </Link>
              <Link
                href="/jobs"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 border border-border flex items-center justify-center"
              >
                Browse IT Jobs
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="mt-12 lg:mt-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Image
              src={herohome}
              alt="IT Staffing and Recruitment Process"
              width={700}
              height={542}
              className="w-full max-w-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
