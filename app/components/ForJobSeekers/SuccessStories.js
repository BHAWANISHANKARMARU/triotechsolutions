import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const SuccessStories = () => {
  return (
    <div className={styles.successStories}>
      <h2>Success Stories</h2>
      <div className={styles.stories}>
        <div className={styles.story}>
          <p>"Trio Tech Solutions helped me transition from QA to DevOps. They found the perfect role that valued my testing background."</p>
          <h4>- Rohit M., DevOps Engineer</h4>
          <span>Placed in 2 weeks</span>
        </div>
        <div className={styles.story}>
          <p>"As a fresher, I was struggling to find opportunities. Their campus hiring program landed me my first developer job!"</p>
          <h4>- Sneha K., Junior Developer</h4>
          <span>Placed in 3 weeks</span>
        </div>
        <div className={styles.story}>
          <p>"They negotiated a 30% salary increase for me and found a remote role with an amazing company culture."</p>
          <h4>- Vikram S., Full Stack Developer</h4>
          <span>Placed in 10 days</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;