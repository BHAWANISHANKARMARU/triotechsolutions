import React from 'react';
import styles from './About.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.section}`}>
      <h1 className={styles.headline}>Connecting IT Talent with Opportunity</h1>
      <p className={styles.intro}>
        We're a specialized IT staffing agency dedicated to building bridges between exceptional technology professionals and innovative companies.
      </p>
    </section>
  );
};

export default Hero;
