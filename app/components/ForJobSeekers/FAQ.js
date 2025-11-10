import React from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.questions}>
        <div className={styles.question}>
          <h4>Is there any fee to register?</h4>
          <p>No, our service is completely free for job seekers.</p>
        </div>
        <div className={styles.question}>
          <h4>How long does the placement process take?</h4>
          <p>Typically 1-4 weeks depending on role and experience.</p>
        </div>
        <div className={styles.question}>
          <h4>Do you help with resume writing?</h4>
          <p>Yes, we provide resume review and optimization.</p>
        </div>
        <div className={styles.question}>
          <h4>Can I apply for multiple jobs?</h4>
          <p>Absolutely! Apply to as many relevant positions as you like.</p>
        </div>
        <div className={styles.question}>
          <h4>Do you offer remote job opportunities?</h4>
          <p>Yes, many of our partner companies hire remotely.</p>
        </div>
        <div className={styles.question}>
          <h4>What if I'm currently employed?</h4>
          <p>We maintain complete confidentiality during your job search.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;