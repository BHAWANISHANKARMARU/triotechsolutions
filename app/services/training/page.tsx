import React from 'react';
import Hero from './hero.js';
import ServiceOverview from './servicesoverview.js';
import WhoItFor from './whoitfor.js';
import KeyBenefits from './benefits.js';
import TrainingPrograms from './programs.js';
import SkillSpecificTraining from './specific.js';
import CorporateTraining from './corporate.js';
import TrainingFormats from './formats.js';
import HowItWorks from './howitworks.js';
import TrainingOutcomes from './outcomes.js';
import SuccessMetrics from './metrics.js';
import PricingModels from './pricing.js';
import PartnersAndTools from './PartnersAndTools.js';
import SuccessStories from './success.js';
import WhyUs from './whyus.js';
import GetStarted from './started.js';
import styles from './TrainingPage.module.css';

const TrainingPage = () => {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <ServiceOverview />
        <WhoItFor />
        <KeyBenefits />
        <TrainingPrograms />
        <SkillSpecificTraining />
        <CorporateTraining />
        <TrainingFormats />
        <HowItWorks />
        <TrainingOutcomes />
        <SuccessMetrics />
        <PricingModels />
        <PartnersAndTools />
        <SuccessStories />
        <WhyUs />
        <GetStarted />
      </div>
    </>
  );
};

export default TrainingPage;
