"use client";

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

      <div className="relative z-10 container mx-auto px-4 text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-down">
          Connecting IT Talent with Opportunity
        </h1>
        <p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          We're a specialized IT staffing agency dedicated to building bridges
          between exceptional technology professionals and innovative companies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
