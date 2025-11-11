"use client";
import { MapPin, Mail } from "lucide-react";

const offices = [
  {
    city: "Headquarters",
    address: "[Placeholder - Full Address, City, PIN]",
    email: "hq@triotechsolutions.com",
  },
  {
    city: "Branch Office 1",
    address: "[Placeholder - Full Address, City, PIN]",
    email: "branch1@triotechsolutions.com",
  },
  {
    city: "Branch Office 2",
    address: "[Placeholder - Full Address, City, PIN]",
    email: "branch2@triotechsolutions.com",
  },
];

export default function OfficeLocations() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Office Locations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find our teams at our strategic locations across the country. We're
            ready to connect with you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.city}
              className="bg-card border border-border rounded-xl p-8 text-center flex flex-col shadow-card-shadow hover-lift"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mt-6 mb-2">
                {office.city}
              </h3>
              <p className="text-muted-foreground flex-grow">
                {office.address}
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{office.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
