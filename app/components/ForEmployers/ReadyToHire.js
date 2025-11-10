import React from 'react';
import styles from './ForEmployers.module.css';

const ReadyToHire = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Ready to Hire Top IT Talent?</h2>
      <div className={`${styles.grid} ${styles.gridTwo}`}>
        <div className={styles.card}>
          <h3>Option 1: Schedule Consultation</h3>
          <p>Discuss your hiring needs with our IT staffing experts.</p>
          <button className={styles.button}>Schedule a Call</button>
        </div>
        <div className={styles.card}>
          <h3>Option 2: Request Quote</h3>
          <p>Get custom pricing for your specific needs.</p>
          <button className={styles.button}>Request Quote</button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToHire;
