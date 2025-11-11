"use client";

export default function ContactForm() {
  return (
    <section id="form" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="mx-auto max-w-3xl bg-card border border-border rounded-xl p-8 shadow-card-shadow">
          <form className="space-y-6">
            {/* I am a: */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                I am a:
              </label>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <label className="inline-flex items-center text-muted-foreground">
                  <input
                    type="radio"
                    name="type"
                    value="employer"
                    className="h-4 w-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="ml-2">Employer / Company</span>
                </label>
                <label className="inline-flex items-center text-muted-foreground">
                  <input
                    type="radio"
                    name="type"
                    value="job_seeker"
                    className="h-4 w-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="ml-2">Job Seeker</span>
                </label>
                <label className="inline-flex items-center text-muted-foreground">
                  <input
                    type="radio"
                    name="type"
                    value="other"
                    className="h-4 w-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            {/* Your Information */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full rounded-md border-border bg-input px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full rounded-md border-border bg-input px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Company Name (if employer)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="block w-full rounded-md border-border bg-input px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>

            {/* Your Message */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="block w-full rounded-md border-border bg-input px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="block w-full rounded-md border-border bg-input px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              ></textarea>
            </div>

            {/* Additional Info */}
            <div className="space-y-2">
              <label className="relative flex items-start">
                <input
                  type="checkbox"
                  id="consultation"
                  name="consultation"
                  className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="ml-3 text-sm text-muted-foreground">
                  I'm interested in scheduling a consultation
                </span>
              </label>
              <label className="relative flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="ml-3 text-sm text-muted-foreground">
                  I'd like to receive updates and newsletters
                </span>
              </label>
              <label className="relative flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required // Made privacy policy agreement required
                  className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="ml-3 text-sm text-muted-foreground">
                  I agree to privacy policy and terms*
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
       