"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const partners = [
  "Educational institutions",
  "Training providers",
  "Technology companies",
  "Business consultants",
];

export default function PartnershipInquiries() {
  return (
    <section id="partnerships" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative isolate overflow-hidden bg-card border border-border px-6 py-20 text-center shadow-card-shadow sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interested in Partnering With Us?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            We believe in the power of collaboration to drive innovation and
            create opportunities. We actively partner with:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center sm:justify-start"
              >
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact#form"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Partnership
            </Link>
            <a
              href="mailto:partnerships@triotechsolutions.com"
              className="text-base font-semibold leading-6 text-foreground"
            >
              Email Us <span aria-hidden="true">→</span>
            </a>
          </div>
          <div
            className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-primary/50 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
