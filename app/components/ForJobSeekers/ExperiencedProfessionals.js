import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const ExperiencedProfessionals = () => {
  return (
    <div className={styles.experiencedProfessionals}>
      <h2>For Experienced Professionals</h2>
      <div className={styles.content}>
        <div>
          <h3>What We Offer</h3>
          <ul>
            <li>Leadership roles</li>
            <li>Architect and specialist positions</li>
            <li>Competitive compensation</li>
            <li>Challenging projects</li>
          </ul>
        </div>
        <div>
          <h3>Who Should Apply</h3>
          <ul>
            <li>2+ years IT experience</li>
            <li>Specialized technical skills</li>
            <li>Leadership potential</li>
            <li>Career advancement goals</li>
          </ul>
        </div>
      </div>
      <button className={styles.cta}>Upload Resume for Senior Roles</button>
    </div>
  );
};

export default ExperiencedProfessionals;