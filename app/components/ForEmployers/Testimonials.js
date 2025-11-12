"use client";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Trio Tech Solutions reduced our time-to-hire from 60 days to 15 days. Their IT expertise is unmatched, and the quality of candidates was exceptional.",
    author: "CTO",
    company: "Leading SaaS Company",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
  },
  {
    quote:
      "They understand both technical skills and cultural fit. It's the best IT staffing partner we've worked with. The process was seamless from start to finish.",
    author: "VP Engineering",
    company: "E-commerce Platform",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
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
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full  "
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.author}`}
                      width={48}
                      height={48}
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
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
