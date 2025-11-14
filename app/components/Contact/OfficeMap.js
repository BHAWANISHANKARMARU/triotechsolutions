export default function OfficeMap() {
  return (
    <section id="map" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Location
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us on the map. We look forward to welcoming you to our office.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-border overflow-hidden shadow-card-shadow">
            <iframe
              src="https://maps.google.com/maps?q=Jaipur&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
