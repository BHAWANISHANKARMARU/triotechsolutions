import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const JobCategories = () => {
  return (
    <div className={styles.jobCategories}>
      <h2>Job Categories</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>Software Development</h3>
          <ul>
            <li>Full Stack Developer</li>
            <li>Frontend Developer (React, Angular, Vue)</li>
            <li>Backend Developer (Java, Python, Node.js)</li>
            <li>Mobile Developer (iOS, Android, React Native)</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Cloud & Infrastructure</h3>
          <ul>
            <li>Cloud Engineer (AWS, Azure, GCP)</li>
            <li>DevOps Engineer</li>
            <li>Site Reliability Engineer</li>
            <li>System Administrator</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Data & Analytics</h3>
          <ul>
            <li>Data Engineer</li>
            <li>Data Scientist</li>
            <li>ML/AI Engineer</li>
            <li>Business Intelligence Analyst</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Cybersecurity</h3>
          <ul>
            <li>Security Engineer</li>
            <li>Penetration Tester</li>
            <li>Security Analyst</li>
            <li>Compliance Manager</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Product & Management</h3>
          <ul>
            <li>Product Manager</li>
            <li>Technical Project Manager</li>
            <li>Scrum Master</li>
            <li>Engineering Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;