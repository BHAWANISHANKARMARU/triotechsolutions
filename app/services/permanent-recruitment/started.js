"use client";
import Link from "next/link";
import Image from "next/image";
import signup from "../../../assats/signup.svg";

const GetStarted = () => {
  return (
    <section id="get-started" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative isolate overflow-hidden bg-card border border-border shadow-card-shadow px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="absolute -left-24 -top-24 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1.1] w-[60rem] bg-gradient-to-tr from-primary/30 to-primary/10 opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Build Your Core Team?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's connect. Tell us about the role you need to fill, and we'll get back to you with a strategic hiring plan.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Hiring Now
              </Link>
              <Link href="/about-us" className="text-base font-semibold leading-6 text-foreground">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={signup}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
