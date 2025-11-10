import React from 'react';
import styles from './About.module.css';

const JoinOurNetwork = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Join Our Network</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>For Companies</h3>
          <p>Partner with us to access top IT talent and streamline your hiring process.</p>
          <button className={styles.button}>Schedule a Consultation</button>
        </div>
        <div className={styles.card}>
          <h3>For IT Professionals</h3>
          <p>Register with us to discover exciting career opportunities in technology.</p>
          <button className={styles.button}>Join Our Talent Network</button>
        </div>
        <div className={styles.card}>
          <h3>Work With Us</h3>
          <p>Looking for a career in recruitment? We're growing our team.</p>
          <button className={styles.button}>View Career Opportunities</button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurNetwork;
