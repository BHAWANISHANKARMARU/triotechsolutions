import React from 'react';
import styles from './ForEmployers.module.css';

const Contact = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Contact Our Employer Services Team</h2>
      <div className={styles.card}>
        <ul>
          <li><strong>Email</strong>: employers@triotechsolutions.com</li>
          <li><strong>Hours</strong>: Monday - Friday, 9 AM - 6 PM</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
