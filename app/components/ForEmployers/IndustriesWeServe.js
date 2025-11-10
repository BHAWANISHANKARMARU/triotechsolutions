import React from 'react';
import styles from './ForEmployers.module.css';

const IndustriesWeServe = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Industries We Serve</h2>
      <div className={`${styles.grid} ${styles.gridFour}`}>
        <div className={styles.card}>
          <ul>
            <li>Financial Services & FinTech</li>
            <li>Healthcare Technology</li>
            <li>E-commerce & Retail Tech</li>
            <li>SaaS & Enterprise Software</li>
          </ul>
        </div>
        <div className={styles.card}>
          <ul>
            <li>Startups & Growth Companies</li>
            <li>Manufacturing & Industrial IoT</li>
            <li>Education Technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
