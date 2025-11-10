import React from 'react';
import styles from './ForEmployers.module.css';

const SuccessStories = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Success Stories</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>Case Study 1: FinTech Startup</h3>
          <p><strong>Challenge</strong>: Needed 5 full-stack developers within 2 weeks</p>
          <p><strong>Solution</strong>: Deployed pre-vetted React & Node.js developers</p>
          <p><strong>Result</strong>: Team hired in 10 days, project launched on time</p>
        </div>
        <div className={styles.card}>
          <h3>Case Study 2: E-commerce Company</h3>
          <p><strong>Challenge</strong>: Required cybersecurity team for compliance</p>
          <p><strong>Solution</strong>: Placed 3 security engineers with relevant certifications</p>
          <p><strong>Result</strong>: Achieved compliance certification, zero security incidents</p>
        </div>
        <div className={styles.card}>
          <h3>Case Study 3: Healthcare Tech</h3>
          <p><strong>Challenge</strong>: Campus hiring for 20 junior developers</p>
          <p><strong>Solution</strong>: Structured campus recruitment with training program</p>
          <p><strong>Result</strong>: Built strong junior team, 95% retention after 1 year</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
