import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Candidate Services Team</h2>
      <div className={styles.contactOptions}>
        <div className={styles.contactOption}>
          <h3>General Inquiries</h3>
          <p>Email: careers@triotechsolutions.com</p>
        </div>
        <div className={styles.contactOption}>
          <h3>Career Counseling</h3>
          <p>Schedule a call with our career advisors to get personalized guidance and discuss your career goals.</p>
        </div>
      </div>
      <button className={styles.cta}>Contact Us</button>
    </div>
  );
};

export default Contact;