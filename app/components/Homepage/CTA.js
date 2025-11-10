'use client';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-background/70">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="relative isolate overflow-hidden bg-card border border-border px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your IT Team?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Whether you're hiring tech talent or looking for your next IT role, we're here to help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Schedule a Consultation
            </Link>
            <Link href="#" className="text-base font-semibold leading-6 text-foreground">
              Upload Your Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-muted-foreground">Passionate about IT recruitment? Join our growing team.</p>
            <Link href="/careers" className="text-base font-semibold leading-6 text-primary hover:text-primary/90">
              View Open Positions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
