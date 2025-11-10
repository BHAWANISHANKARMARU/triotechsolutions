import React from 'react';
import styles from './ForEmployers.module.css';

const RolesWeFill = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Types of IT Roles We Fill</h2>
      <div className={`${styles.grid} ${styles.gridFive}`}>
        <div className={styles.card}>
          <h3>Software Development</h3>
          <ul>
            <li>Full Stack Developers</li>
            <li>Frontend Engineers (React, Angular, Vue)</li>
            <li>Backend Engineers (Node.js, Python, Java)</li>
            <li>Mobile App Developers</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Cloud & Infrastructure</h3>
          <ul>
            <li>Cloud Architects (AWS, Azure, GCP)</li>
            <li>DevOps Engineers</li>
            <li>Site Reliability Engineers</li>
            <li>System Administrators</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Data & AI</h3>
          <ul>
            <li>Data Engineers</li>
            <li>Data Scientists</li>
            <li>ML/AI Engineers</li>
            <li>Business Intelligence Analysts</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Cybersecurity</h3>
          <ul>
            <li>Security Engineers</li>
            <li>Penetration Testers</li>
            <li>Security Analysts</li>
            <li>Compliance Specialists</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Product & Management</h3>
          <ul>
            <li>Product Managers</li>
            <li>Technical Project Managers</li>
            <li>Scrum Masters</li>
            <li>Engineering Managers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RolesWeFill;
