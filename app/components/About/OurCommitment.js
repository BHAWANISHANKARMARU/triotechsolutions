import React from 'react';
import styles from './About.module.css';

const OurCommitment = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Commitment</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <h3>To Employers</h3>
          <ul>
            <li>Access to pre-vetted IT talent</li>
            <li>Faster hiring timelines</li>
            <li>Cultural fit assessments</li>
            <li>Ongoing candidate support</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>To Job Seekers</h3>
          <ul>
            <li>Career advancement opportunities</li>
            <li>Transparent communication</li>
            <li>Interview preparation support</li>
            <li>Fair compensation advocacy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
