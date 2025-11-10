import React from 'react';
import styles from './About.module.css';

const WhyChooseUs = () => {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <h2 className={styles.sectionTitle}>Why Choose Trio Tech Solutions</h2>
      <div className={`${styles.grid} ${styles.gridThree}`}>
        <div className={styles.card}>
          <h3>IT-Specialized Expertise</h3>
          <ul>
            <li>Exclusive focus on technology roles</li>
            <li>Technical recruiters with IT backgrounds</li>
            <li>Deep understanding of tech stacks and skills</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Fast & Efficient</h3>
          <ul>
            <li>24-48 hour initial candidate shortlist</li>
            <li>Streamlined interview coordination</li>
            <li>Quick onboarding support</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Quality Guarantee</h3>
          <ul>
            <li>Pre-screened IT professionals</li>
            <li>Technical skill assessments</li>
            <li>Background verification included</li>
            <li>90-day replacement guarantee</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Comprehensive Services</h3>
          <ul>
            <li>Flexible placement to permanent hiring</li>
            <li>Training and upskilling programs</li>
            <li>Campus recruitment solutions</li>
            <li>Contract staffing for projects</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Proven Results</h3>
          <ul>
            <li>98% client satisfaction rate</li>
            <li>500+ successful IT placements</li>
            <li>50+ partner companies</li>
            <li>5+ years industry experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
