import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const ReadyToStart = () => {
  return (
    <div className={styles.readyToStart}>
      <h2>Ready to Start Your IT Career Journey?</h2>
      <p>Take the First Step Today</p>
      <div className={styles.ctaButtons}>
        <button className={styles.cta}>Upload Your Resume</button>
        <button className={styles.cta}>Browse Current Openings</button>
        <button className={styles.cta}>Schedule Career Consultation</button>
      </div>
    </div>
  );
};

export default ReadyToStart;