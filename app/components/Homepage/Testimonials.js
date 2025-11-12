"use client";

import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Trio Tech Solutions helped us scale our engineering team quickly. Their deep understanding of IT roles made all the difference.",
      author: "Rajesh Kumar",
      title: "CTO, TechVenture Inc.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      quote:
        "Outstanding service! They found us a perfect DevOps engineer within a week. Professional and efficient.",
      author: "Priya Sharma",
      title: "VP Engineering, CloudScale Systems",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      quote:
        "Their campus hiring program helped us build a strong junior developer team. Highly recommend!",
      author: "Amit Patel",
      title: "HR Director, InnovateSoft",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="bg-background/70 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            See what our clients have to say about our services.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card border border-border rounded-xl p-8 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-lg text-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full"
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
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-primary">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
