import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const EmploymentTypes = () => {
  return (
    <div className={styles.employmentTypes}>
      <h2>Types of Employment</h2>
      <div className={styles.types}>
        <div className={styles.type}>
          <h3>Permanent Roles</h3>
          <p>Full-time positions with direct company employment, benefits, and long-term career growth.</p>
        </div>
        <div className={styles.type}>
          <h3>Contract Positions</h3>
          <p>Project-based work with competitive rates and diverse project experience.</p>
        </div>
        <div className={styles.type}>
          <h3>Contract-to-Permanent</h3>
          <p>Start as a contractor, evaluate the fit, and then convert to a full-time role.</p>
        </div>
        <div className={styles.type}>
          <h3>Remote Opportunities</h3>
          <p>Work from anywhere with flexible schedules and home office support.</p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypes;