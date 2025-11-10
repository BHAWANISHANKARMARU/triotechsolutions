"use client";

import { useState } from 'react';
import styles from './Contact.module.css'; // Revert to Contact.module.css

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What's the fastest way to reach you?",
      answer: "A: Email us anytime. We respond within 24 hours during business days.",
    },
    {
      question: "Do you offer in-person consultations?",
      answer: "A: Yes, we offer both in-person and virtual consultations.",
    },
    {
      question: "Can I visit your office without an appointment?",
      answer: "A: We recommend scheduling an appointment for dedicated time with our team.",
    },
    {
      question: "What information should employers provide when contacting?",
      answer: "A: Job description, required skills, timeline, and budget range.",
    },
    {
      question: "What should job seekers include when reaching out?",
      answer: "A: Updated resume, target role, preferred location, and availability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}> {/* Changed class name */}
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2> {/* Changed class name */}
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={`${styles.faqQuestion} ${openIndex === index ? styles.open : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          <div
            className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
