import React from 'react';
import styles from './ForEmployers.module.css';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Client Testimonials</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <p>"Trio Tech Solutions reduced our time-to-hire from 60 days to 15 days. Their IT expertise is unmatched."</p>
          <p><strong>- CTO, Leading SaaS Company</strong></p>
        </div>
        <div className={styles.card}>
          <p>"They understand both technical skills and cultural fit. Best IT staffing partner we've worked with."</p>
          <p><strong>- VP Engineering, E-commerce Platform</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
