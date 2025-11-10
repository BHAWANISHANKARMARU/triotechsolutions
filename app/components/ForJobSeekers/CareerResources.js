import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const CareerResources = () => {
  return (
    <div className={styles.careerResources}>
      <h2>Career Resources</h2>
      <div className={styles.resources}>
        <div className={styles.resource}>
          <h3>Resume Tips</h3>
          <p>Optimize for IT roles, highlight technical skills, and quantify achievements.</p>
        </div>
        <div className={styles.resource}>
          <h3>Interview Preparation</h3>
          <p>Technical interview guides, coding challenges, and behavioral question prep.</p>
        </div>
        <div className={styles.resource}>
          <h3>Salary Information</h3>
          <p>IT salary benchmarks, negotiation strategies, and market rate insights.</p>
        </div>
        <div className={styles.resource}>
          <h3>Career Development</h3>
          <p>Skill gap analysis, learning recommendations, and certification guidance.</p>
        </div>
      </div>
    </div>
  );
};

export default CareerResources;