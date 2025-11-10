import React from 'react';
import styles from './About.module.css';

const OurMission = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Our Mission</h2>
      <p className={styles.missionText}>
        "To empower businesses with the right technology talent and help IT professionals achieve their career goals."
      </p>
      <p>We believe that meaningful employment has the power to transform both companies and individuals.</p>
    </section>
  );
};

export default OurMission;
