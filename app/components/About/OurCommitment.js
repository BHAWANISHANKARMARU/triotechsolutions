"use client";

const commitments = [
  {
    title: "To Employers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 11.25h6.75M9 15.75h6.75"
        />
      </svg>
    ),
    points: [
      "Access to pre-vetted, top-tier IT talent.",
      "Faster hiring timelines to meet project deadlines.",
      "In-depth cultural fit assessments for long-term success.",
      "Ongoing support to ensure smooth candidate integration.",
    ],
  },
  {
    title: "To Job Seekers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    points: [
      "Access to exclusive career advancement opportunities.",
      "Transparent communication throughout the hiring process.",
      "Expert interview preparation and resume support.",
      "Advocacy for fair compensation and benefits.",
    ],
  },
];

const OurCommitment = () => {
  return (
    <section id="commitment" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Commitment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A pledge of excellence to our partners and candidates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="bg-card p-8 rounded-xl border border-border shadow-card-shadow hover-lift flex flex-col items-center text-center"
            >
              <div className="flex-shrink-0">{commitment.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mt-6 mb-4">
                {commitment.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-left list-disc pl-5">
                {commitment.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
