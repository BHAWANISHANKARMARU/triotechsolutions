import Link from "next/link";
import Image from "next/image";
import heroemployers from "../../../assats/heroemployers.svg";

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
              Find Top IT Talent Fast
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Access pre-vetted technology professionals ready to drive your
              business forward.
            </p>
            <div
              className="mt-10 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/contact"
                className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="mt-12 lg:mt-0 "
            style={{ animationDelay: "0.9s" }}
          >
            <Image
              src={heroemployers}
              alt="Illustration of finding IT talent"
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
