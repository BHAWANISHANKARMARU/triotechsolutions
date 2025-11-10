import React from 'react';
import styles from './About.module.css';

const LeadershipTeam = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Leadership Team</h2>
      <div className={styles.card}>
        <h3>Founder & CEO</h3>
        <p><strong>[Name Placeholder]</strong></p>
        <ul>
          <li>5+ years in IT recruitment</li>
          <li>Technology industry veteran</li>
          <li>Passionate about connecting talent with opportunity</li>
        </ul>
        <p><em>Note: Leadership bio can be expanded with actual name and details</em></p>
      </div>
    </section>
  );
};

export default LeadershipTeam;
