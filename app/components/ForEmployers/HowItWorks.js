import React from 'react';
import styles from './ForEmployers.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>How It Works</h2>
      <div className={`${styles.grid} ${styles.gridFive}`}>
        <div className={styles.card}>
          <h3>Step 1: Share Your Requirements</h3>
          <ul>
            <li>Define the role and skills needed</li>
            <li>Discuss team culture and expectations</li>
            <li>Set timeline and budget parameters</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Step 2: We Source & Screen</h3>
          <ul>
            <li>Access our pool of 10,000+ IT professionals</li>
            <li>Technical skill assessments</li>
            <li>Background verification checks</li>
            <li>Cultural fit evaluation</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Step 3: Review Top Candidates</h3>
          <ul>
            <li>Receive shortlist within 24-48 hours</li>
            <li>Detailed candidate profiles</li>
            <li>Technical evaluation reports</li>
            <li>Availability and salary expectations</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Step 4: Interview & Select</h3>
          <ul>
            <li>We coordinate interviews</li>
            <li>Provide interview feedback support</li>
            <li>Negotiate offers on your behalf</li>
            <li>Handle all paperwork</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Step 5: Onboarding & Support</h3>
          <ul>
            <li>Smooth integration assistance</li>
            <li>60-day placement guarantee</li>
            <li>Ongoing performance check-ins</li>
            <li>Address any concerns quickly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
