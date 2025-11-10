import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.howItWorks}>
      <h2>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3>Step 1: Create Your Profile</h3>
          <p>Upload your resume, highlight your tech skills, and share your career goals.</p>
        </div>
        <div className={styles.step}>
          <h3>Step 2: We Match You</h3>
          <p>AI-powered job matching, personalized alerts, and access to hidden opportunities.</p>
        </div>
        <div className={styles.step}>
          <h3>Step 3: Interview Preparation</h3>
          <p>Resume review, technical coaching, and mock interview sessions.</p>
        </div>
        <div className={styles.step}>
          <h3>Step 4: Land Your Dream Job</h3>
          <p>Interview coordination, offer negotiation support, and onboarding assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;