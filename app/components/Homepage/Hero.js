"use client";
import Link from "next/link";
import Image from "next/image";

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
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 pt-32 pb-20 md:pt-48 md:pb-28 text-center">
        <h1
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down"
          // Removed text-shadow
        >
          Connect Top IT Talent with Leading Companies
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Expert IT staffing solutions that drive business growth and career
          success.
        </p>
        <div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/for-employers"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
          >
            {" "}
            {/* Removed shadow-lg shadow-primary/30 */}
            Find Top Talent
          </Link>
          <Link
            href="/jobs"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 border border-border flex items-center justify-center"
          >
            Browse IT Jobs
          </Link>
        </div>
        <div
          className="mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-sm text-muted-foreground">
            Trusted by innovative companies
          </p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60">
            <div className="font-bold text-lg">Company A</div>
            <div className="font-bold text-lg">TechCorp</div>
            <div className="font-bold text-lg">Innovate Inc.</div>
            <div className="font-bold text-lg">Solutions Co.</div>
            <div className="font-bold text-lg">NextGen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
