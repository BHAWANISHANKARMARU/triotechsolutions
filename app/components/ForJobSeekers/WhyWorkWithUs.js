import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const WhyWorkWithUs = () => {
  return (
    <div className={styles.whyWorkWithUs}>
      <h2>Why Work With Trio Tech Solutions</h2>
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <h3>Access to Top Companies</h3>
          <ul>
            <li>50+ partner companies hiring</li>
            <li>Startups to Fortune 500 firms</li>
            <li>Exclusive job opportunities</li>
            <li>Direct connections to hiring managers</li>
          </ul>
        </div>
        <div className={styles.reason}>
          <h3>Career Growth Focus</h3>
          <ul>
            <li>Long-term career planning</li>
            <li>Skill development guidance</li>
            <li>Competitive compensation</li>
            <li>Growth-oriented roles</li>
          </ul>
        </div>
        <div className={styles.reason}>
          <h3>Free Service for You</h3>
          <ul>
            <li>No fees for job seekers</li>
            <li>No hidden costs</li>
            <li>Complete transparency</li>
            <li>Your success is our success</li>
          </ul>
        </div>
        <div className={styles.reason}>
          <h3>Expert Support</h3>
          <ul>
            <li>IT career counseling</li>
            <li>Resume optimization</li>
            <li>Interview preparation</li>
            <li>Salary negotiation assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;