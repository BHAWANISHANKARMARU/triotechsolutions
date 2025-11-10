import React from 'react';
import styles from './About.module.css';

const OurStory = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Story</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <h3>Company Overview</h3>
          <p>Trio Tech Solutions was founded with a simple mission: make finding and hiring IT talent effortless and effective. With 5+ years of experience in the technology staffing industry, we've successfully placed over 500 IT professionals across various tech domains.</p>
        </div>
        <div className={styles.card}>
          <h3>What Sets Us Apart</h3>
          <p>We don't just match resumes to job descriptions. We understand technology, culture, and what makes teams successful. Our deep expertise in IT roles—from software developers to cloud architects—ensures we find the perfect fit every time.</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
