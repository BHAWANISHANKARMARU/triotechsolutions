"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Is there any fee to register?",
    answer:
      "No, our service is completely free for job seekers. Our fees are covered by the hiring companies.",
  },
  {
    question: "How long does the placement process take?",
    answer:
      "The timeline can vary, but typically it takes between 1 to 4 weeks from initial contact to job offer, depending on the role's seniority and specific client requirements.",
  },
  {
    question: "Do you help with resume writing?",
    answer:
      "Yes, we provide complimentary resume review and optimization services to ensure your profile stands out to hiring managers.",
  },
  {
    question: "Can I apply for multiple jobs?",
    answer:
      "Absolutely! We encourage you to apply for any positions that align with your skills and career aspirations. Our recruiters can also suggest roles you might be a good fit for.",
  },
  {
    question: "Do you offer remote job opportunities?",
    answer:
      "Yes, we have a wide range of remote, hybrid, and on-site opportunities with our partner companies across the country.",
  },
  {
    question: "What if I'm currently employed?",
    answer:
      "We operate with the utmost discretion and maintain complete confidentiality throughout your job search process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our process and services for
            job seekers.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg bg-card overflow-hidden shadow-sm"
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
