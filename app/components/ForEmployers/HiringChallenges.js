import React from 'react';
import styles from './ForEmployers.module.css';

const HiringChallenges = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Your IT Hiring Challenges</h2>
      <div className={`${styles.grid} ${styles.gridFour}`}>
        <div className={styles.card}>
          <h3>Slow Hiring Process</h3>
          <ul>
            <li>Time-to-hire exceeds 45+ days</li>
            <li>Missing out on top candidates</li>
            <li>Projects delayed due to staffing gaps</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Quality Concerns</h3>
          <ul>
            <li>Resumes don't match actual skills</li>
            <li>Poor cultural fit leading to turnover</li>
            <li>Lack of technical expertise assessment</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>High Costs</h3>
          <ul>
            <li>Expensive job board subscriptions</li>
            <li>Internal recruiter overhead</li>
            <li>Lost productivity during vacancies</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Limited Reach</h3>
          <ul>
            <li>Can't access passive candidates</li>
            <li>Restricted talent pool</li>
            <li>Geographic limitations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HiringChallenges;
