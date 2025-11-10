import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Find Your Next IT Career Opportunity</h1>
      <p>Access exclusive tech jobs with leading companies. Your dream career is just a click away.</p>
      <div className={styles.ctaButtons}>
        <button className={styles.cta}>Browse IT Jobs</button>
        <button className={styles.cta}>Upload Resume</button>
      </div>
    </div>
  );
};

export default Hero;