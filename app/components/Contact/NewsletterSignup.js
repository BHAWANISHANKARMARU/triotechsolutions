"use client";

export default function NewsletterSignup() {
  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Get the latest IT job openings, hiring trends, and career tips
            delivered to your inbox.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-border bg-input px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                I'm interested in:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="flex items-center text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="interest"
                    value="jobs"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="ml-2">Job Openings</span>
                </label>
                <label className="flex items-center text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="interest"
                    value="hiring"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="ml-2">Hiring Tips</span>
                </label>
                <label className="flex items-center text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="interest"
                    value="news"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="ml-2">Industry News</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
