import React from 'react';
import styles from './ForEmployers.module.css';

const ITStaffingSolutions = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Our IT Staffing Solutions</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>1. Flexible Placement</h3>
          <ul>
            <li>Short-term project staffing</li>
            <li>Quick deployment (24-48 hours)</li>
            <li>Scale up/down as needed</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>2. Permanent Recruitment</h3>
          <ul>
            <li>Full-time hiring solutions</li>
            <li>Cultural fit assessment</li>
            <li>Long-term talent acquisition</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>3. Contract Staffing</h3>
          <ul>
            <li>Project-based specialists</li>
            <li>Cloud, DevOps, Cybersecurity experts</li>
            <li>Business transformation teams</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>4. Outsourcing</h3>
          <ul>
            <li>Managed team solutions</li>
            <li>Complete HR administration</li>
            <li>Focus on your core business</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>5. Campus Hiring</h3>
          <ul>
            <li>Fresh IT graduate programs</li>
            <li>Entry-level developer hiring</li>
            <li>Build your talent pipeline</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>6. Training & Upskilling</h3>
          <ul>
            <li>Reskill existing teams</li>
            <li>New technology adoption</li>
            <li>Custom training programs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ITStaffingSolutions;
