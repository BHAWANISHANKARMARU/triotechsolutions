import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the next generation of our user interface.",
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description:
      "We are looking for a Product Manager to help us build the future of our platform. You will be responsible for the product roadmap and strategy.",
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    description:
      "We are looking for a talented UX/UI Designer to create amazing user experiences. You will be responsible for the design of our web and mobile applications.",
  },
];

const values = [
  {
    name: "Innovation",
    description:
      "We are constantly looking for new and better ways to do things. We are not afraid to take risks and try new things.",
  },
  {
    name: "Collaboration",
    description:
      "We believe that the best ideas come from working together. We are a team of passionate individuals who are dedicated to helping each other succeed.",
  },
  {
    name: "Customer Focus",
    description:
      "We are obsessed with our customers. We are constantly looking for ways to improve their experience and make their lives better.",
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Join Our Team
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We are looking for passionate and talented individuals to join us on
            our mission to build the future of IT staffing.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-background/70">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Culture
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Principles That Drive Us
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col p-8 bg-card border border-border rounded-xl shadow-card-shadow hover-lift text-center"
              >
                <dt className="text-xl font-semibold text-foreground">
                  {value.name}
                </dt>
                <dd className="mt-2 flex-auto text-muted-foreground">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Careers
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Open Positions
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-card-shadow hover-lift"
              >
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.location}
                  </p>
                  <p className="mt-3 text-base text-foreground/80 max-w-2xl">
                    {job.description}
                  </p>
                </div>
                <Link
                  href="/apply"
                  className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background/70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Don't see an opening for you?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are always looking for talented individuals. Send us your resume
            and we will be in touch.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
