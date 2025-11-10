import React from 'react';
import styles from './About.module.css';

const OurApproach = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Approach</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <h3>For Employers</h3>
          <ol>
            <li><strong>Understand</strong> - We learn your business, culture, and technical needs</li>
            <li><strong>Source</strong> - Access our vetted pool of IT professionals</li>
            <li><strong>Match</strong> - Present candidates aligned with your requirements</li>
            <li><strong>Support</strong> - Facilitate interviews and smooth onboarding</li>
          </ol>
        </div>
        <div className={styles.card}>
          <h3>For Job Seekers</h3>
          <ol>
            <li><strong>Connect</strong> - Share your skills, experience, and career goals</li>
            <li><strong>Match</strong> - We identify opportunities that fit your profile</li>
            <li><strong>Prepare</strong> - Interview coaching and career guidance</li>
            <li><strong>Succeed</strong> - Post-placement support and career development</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
