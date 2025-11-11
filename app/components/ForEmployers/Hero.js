import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-muted/40 py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Find Top IT Talent Fast
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          Access pre-vetted technology professionals ready to drive your
          business forward.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
