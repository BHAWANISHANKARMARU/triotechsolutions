import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const WhatToExpect = () => {
  return (
    <div className={styles.whatToExpect}>
      <h2>What to Expect After Registration</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <h3>Immediate</h3>
          <ul>
            <li>Profile review by our team</li>
            <li>Job matching begins</li>
            <li>Access to job portal</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <h3>Within 48 Hours</h3>
          <ul>
            <li>Recruiter contact</li>
            <li>Initial screening call</li>
            <li>Job recommendations</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <h3>Ongoing</h3>
          <ul>
            <li>Regular job alerts</li>
            <li>Interview opportunities</li>
            <li>Career guidance support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;