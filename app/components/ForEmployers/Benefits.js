import React from 'react';
import styles from './ForEmployers.module.css';

const Benefits = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Benefits of Partnering With Us</h2>
      <div className={`${styles.grid} ${styles.gridFive}`}>
        <div className={styles.card}>
          <h3>Speed</h3>
          <ul>
            <li>48-hour candidate shortlisting</li>
            <li>Faster time-to-hire</li>
            <li>Reduce open position days</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Quality</h3>
          <ul>
            <li>Pre-screened IT professionals</li>
            <li>Technical assessments completed</li>
            <li>Background-verified candidates</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Cost Savings</h3>
          <ul>
            <li>No upfront fees</li>
            <li>Pay only on successful hire</li>
            <li>Reduce internal recruiting costs</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Risk Reduction</h3>
          <ul>
            <li>90-day replacement guarantee</li>
            <li>Thorough candidate vetting</li>
            <li>Legal compliance handled</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Expertise</h3>
          <ul>
            <li>IT-specialized recruiters</li>
            <li>Technical knowledge</li>
            <li>Industry insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
