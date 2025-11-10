import React from 'react';
import styles from './About.module.css';

const GeographicPresence = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Geographic Presence</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>Current Coverage</h3>
          <ul>
            <li><strong>Primary Markets</strong>: [Cities to be filled]</li>
            <li><strong>Service Areas</strong>: Pan-India coverage</li>
            <li><strong>Remote Hiring</strong>: Nationwide IT talent access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GeographicPresence;
