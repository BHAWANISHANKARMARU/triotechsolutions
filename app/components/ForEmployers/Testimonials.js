"use client";

const testimonials = [
  {
    quote:
      "Trio Tech Solutions reduced our time-to-hire from 60 days to 15 days. Their IT expertise is unmatched, and the quality of candidates was exceptional.",
    author: "CTO",
    company: "Leading SaaS Company",
    rating: 5,
  },
  {
    quote:
      "They understand both technical skills and cultural fit. It's the best IT staffing partner we've worked with. The process was seamless from start to finish.",
    author: "VP Engineering",
    company: "E-commerce Platform",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the companies who trust us with their most critical IT
            hiring needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-card-shadow"
            >
              <div className="flex-grow">
                <p className="text-lg leading-8 text-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center text-primary">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
