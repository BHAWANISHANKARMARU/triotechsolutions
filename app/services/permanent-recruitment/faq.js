"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is your average time-to-hire for a permanent role?",
    answer: "For most mid-to-senior level roles, our average time-to-hire is between 3 to 4 weeks. For highly specialized or executive roles, it may take 6 to 8 weeks.",
  },
  {
    question: "What happens if a candidate we hire leaves shortly after joining?",
    answer: "We stand by the quality of our placements. Our permanent recruitment service includes a 90-day replacement guarantee. If the candidate leaves for any reason within this period, we will find a suitable replacement at no additional cost.",
  },
  {
    question: "Do you specialize only in specific technology stacks?",
    answer: "While we have deep expertise in popular stacks like React, Node.js, Python, and Java, our specialization is in IT roles themselves. We can effectively recruit for any technology stack, from mainstream to niche.",
  },
  {
    question: "How do you assess a candidate's cultural fit?",
    answer: "Our process includes behavioral interviews and detailed discussions about work environment preferences. We work closely with you to understand your company culture and team dynamics to ensure we find a candidate who will thrive.",
  },
  {
    question: "Can you help us hire for remote or distributed teams?",
    answer: "Absolutely. We have a nationwide talent network and extensive experience in sourcing, vetting, and placing candidates for fully remote, hybrid, and geographically distributed teams.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
            Have questions about our permanent recruitment process? We've got answers.
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
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground px-6 pb-6 pt-2">
                      {item.answer}
                    </p>
                  </div>
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
