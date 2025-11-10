import React from 'react';
import styles from './ForEmployers.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.section}`}>
      <h1 className={styles.headline}>Find Top IT Talent Fast</h1>
      <p className={styles.intro}>Access pre-vetted technology professionals ready to drive your business forward.</p>
      <button className={styles.button}>Schedule Consultation</button>
    </section>
  );
};

export default Hero;
