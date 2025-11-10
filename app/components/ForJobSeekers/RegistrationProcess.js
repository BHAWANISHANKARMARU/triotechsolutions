import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const RegistrationProcess = () => {
  return (
    <div className={styles.registrationProcess}>
      <h2>Quick & Easy Signup</h2>
      <p>Less than 5 minutes to complete</p>
      <div className={styles.steps}>
        <div className={styles.step}>
            <span>Step 1</span>
            <p>Create account with email</p>
        </div>
        <div className={styles.step}>
            <span>Step 2</span>
            <p>Upload resume (PDF/DOC)</p>
        </div>
        <div className={styles.step}>
            <span>Step 3</span>
            <p>Complete your profile</p>
        </div>
        <div className={styles.step}>
            <span>Step 4</span>
            <p>Start applying to jobs</p>
        </div>
      </div>
      <button className={styles.cta}>Register Now</button>
    </div>
  );
};

export default RegistrationProcess;