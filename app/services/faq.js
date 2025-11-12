"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What's the typical cost per hire?",
    a: "Costs vary based on the model. It's typically ₹[X] for direct placement and ₹[Y] for our 'Train & Hire' model. Contact us for a custom quote.",
  },
  {
    q: "How long does the entire process take?",
    a: "The full cycle, from campus drive to candidate joining, usually takes about 3-4 months, including any pre-joining training.",
  },
  {
    q: "Can we target specific colleges?",
    a: "Yes, absolutely. We can customize our outreach to target specific colleges based on your preferences and hiring strategy.",
  },
  {
    q: "What if a hired candidate doesn't perform?",
    a: "We offer a 90-day replacement guarantee. If a candidate doesn't meet expectations, we will find a suitable replacement at no additional cost.",
  },
  {
    q: "Do you handle offer letters and onboarding?",
    a: "Yes, we provide complete administrative support, including offer letter processing and initial onboarding formalities.",
  },
  {
    q: "Can we hire for internships?",
    a: "Yes, we offer flexible internship-to-hire programs, allowing you to evaluate talent before making a full-time commitment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find quick answers to common questions about our campus hiring services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mt-16">
            {faqData.map((item, index) => (
              <div key={index} className="border border-border rounded-lg bg-card overflow-hidden shadow-sm">
                <button className="w-full flex justify-between items-center text-left p-6" onClick={() => toggleFAQ(index)}>
                  <span className="text-lg font-semibold text-foreground">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`}>
                  <p className="text-muted-foreground px-6 pb-6">{item.a}</p>
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