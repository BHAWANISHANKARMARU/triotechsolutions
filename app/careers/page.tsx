import Link from "next/link";
import {
  Lightbulb,
  Users,
  Heart,
  MapPin,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import jobOpenings from "@/data/company-jobs.json";

const values = [
  {
    name: "Innovation",
    description:
      "We are constantly looking for new and better ways to do things. We are not afraid to take risks and try new things.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    name: "Collaboration",
    description:
      "We believe that the best ideas come from working together. We are a team of passionate individuals who are dedicated to helping each other succeed.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    name: "Customer Focus",
    description:
      "We are obsessed with our customers. We are constantly looking for ways to improve their experience and make their lives better.",
    icon: <Heart className="h-8 w-8" />,
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
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
      <section className="py-16 sm:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Culture
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Principles That Drive Us
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col items-center p-8 bg-card border border-border rounded-xl shadow-card-shadow hover-lift text-center"
              >
                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.name}
                </h3>
                <p className="mt-2 flex-auto text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
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
          <div className="mt-16 max-w-4xl mx-auto space-y-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-card border border-border rounded-xl p-6 shadow-card-shadow hover-lift transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">
                      <Link href={`/careers/${job.id}`}>{job.title}</Link>
                    </h3>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-base text-foreground/80 max-w-2xl">
                      {job.description}
                    </p>
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-muted/40">
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
