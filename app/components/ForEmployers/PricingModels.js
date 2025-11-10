import React from 'react';
import styles from './ForEmployers.module.css';

const PricingModels = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Pricing Models</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>Permanent Placement</h3>
          <ul>
            <li>Pay only on successful hire</li>
            <li>Percentage of annual salary</li>
            <li>60-day replacement guarantee</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Contract Staffing</h3>
          <ul>
            <li>Monthly billing per contractor</li>
            <li>Transparent rate cards</li>
            <li>Volume discounts available</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Managed Teams (Outsourcing)</h3>
          <ul>
            <li>Fixed monthly team cost</li>
            <li>All-inclusive pricing</li>
            <li>Scalable as needed</li>
          </ul>
        </div>
      </div>
      <button className={styles.button}>Request Custom Quote</button>
    </section>
  );
};

export default PricingModels;
