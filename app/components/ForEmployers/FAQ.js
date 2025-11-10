import React from 'react';
import styles from './ForEmployers.module.css';

const FAQ = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <p><strong>Q: What's your typical turnaround time?</strong></p>
          <p>A: Initial candidate shortlist within 24-48 hours.</p>
        </div>
        <div className={styles.card}>
          <p><strong>Q: Do you handle contract-to-permanent conversions?</strong></p>
          <p>A: Yes, we offer flexible conversion options.</p>
        </div>
        <div className={styles.card}>
          <p><strong>Q: What if the candidate doesn't work out?</strong></p>
          <p>A: 60-day replacement guarantee at no additional cost.</p>
        </div>
        <div className={styles.card}>
          <p><strong>Q: Do you work with startups?</strong></p>
          <p>A: Absolutely! We support companies at all stages.</p>
        </div>
        <div className={styles.card}>
          <p><strong>Q: Can you help with remote hiring?</strong></p>
          <p>A: Yes, nationwide IT talent access for remote roles.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
