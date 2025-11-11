"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What's your typical turnaround time for candidates?",
    answer:
      "You can expect an initial shortlist of qualified, pre-vetted candidates within 24-48 hours of sharing your requirements with us.",
  },
  {
    question: "What if a candidate we hire doesn't work out?",
    answer:
      "We stand by our placements with a 90-day replacement guarantee. If the candidate doesn't meet your expectations, we will find a suitable replacement at no additional cost.",
  },
  {
    question: "Do you handle contract-to-permanent conversions?",
    answer:
      "Absolutely. We offer flexible contract-to-hire models that allow you to assess a candidate's fit on a contract basis before making a full-time offer.",
  },
  {
    question: "Can you help with hiring for niche or specialized IT roles?",
    answer:
      "Yes, this is our specialty. Our recruiters have deep expertise in various IT domains and a vast network to source candidates for even the most niche technology stacks.",
  },
  {
    question: "Do you work with startups as well as large enterprises?",
    answer:
      "Yes, we support companies at all stages of growth, from early-stage startups looking for their first key hires to large enterprises scaling their teams.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first item to be open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions from employers.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={item.question}
                className="border border-border rounded-lg bg-card overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground px-6 pb-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
