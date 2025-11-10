import React from 'react';
import styles from './About.module.css';

const OurValues = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Values</h2>
      <div className={`${styles.grid} ${styles.gridFour}`}>
        <div className={styles.card}>
          <h3>Excellence</h3>
          <ul>
            <li>Commitment to quality in every placement</li>
            <li>Rigorous candidate vetting process</li>
            <li>Continuous improvement mindset</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Integrity</h3>
          <ul>
            <li>Transparent communication</li>
            <li>Honest assessments</li>
            <li>Ethical business practices</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Partnership</h3>
          <ul>
            <li>Long-term relationships over transactions</li>
            <li>Understanding your unique needs</li>
            <li>Supporting success at every stage</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Innovation</h3>
          <ul>
            <li>Modern recruitment technology</li>
            <li>Agile hiring processes</li>
            <li>Adaptive solutions for changing needs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
