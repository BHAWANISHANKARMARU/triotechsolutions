"use client";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact-outsourcing" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="relative isolate overflow-hidden bg-card border border-border px-6 py-20 text-center shadow-sm sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Our Outsourcing Team
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Ready to build your dedicated team? Reach out to our specialists to
            discuss your project needs and get a detailed proposal.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
            <a href="mailto:outsourcing@triotechsolutions.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5 text-primary" />
              <span>outsourcing@triotechsolutions.com</span>
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 (XXX) XXX-XXXX</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Mon - Fri, 9 AM - 6 PM</span>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact?subject=Outsourcing+Inquiry" className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Contact Us Today
            </Link>
          </div>
          <div className="absolute -top-24 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-primary/50 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
