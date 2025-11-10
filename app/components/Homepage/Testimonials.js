'use client';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Trio Tech Solutions helped us scale our engineering team quickly. Their deep understanding of IT roles made all the difference.",
      author: "Rajesh Kumar",
      title: "CTO, TechVenture Inc.",
      rating: 5,
    },
    {
      quote: "Outstanding service! They found us a perfect DevOps engineer within a week. Professional and efficient.",
      author: "Priya Sharma",
      title: "VP Engineering, CloudScale Systems",
      rating: 5,
    },
    {
      quote: "Their campus hiring program helped us build a strong junior developer team. Highly recommend!",
      author: "Amit Patel",
      title: "HR Director, InnovateSoft",
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
            <div key={testimonial.author} className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="flex-grow">
                <p className="text-lg text-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {'⭐'.repeat(testimonial.rating)}
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
