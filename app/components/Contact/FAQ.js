"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item to be open

  const faqData = [
    {
      question: "What's the fastest way to reach you?",
      answer:
        "A: Email us anytime. We respond within 24 hours during business days.",
    },
    {
      question: "Do you offer in-person consultations?",
      answer: "A: Yes, we offer both in-person and virtual consultations.",
    },
    {
      question: "Can I visit your office without an appointment?",
      answer:
        "A: We recommend scheduling an appointment for dedicated time with our team.",
    },
    {
      question: "What information should employers provide when contacting?",
      answer:
        "A: Job description, required skills, timeline, and budget range.",
    },
    {
      question: "What should job seekers include when reaching out?",
      answer:
        "A: Updated resume, target role, preferred location, and availability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common
            inquiries we receive.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
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
}
