import React from 'react';
import Hero from './hero.js';
import ServiceOverview from './servicesoverview.js';
import WhoItFor from './whoitfor.js';
import KeyBenefits from './benefits.js';
import RolesWeRecruit from './roles.js';
import RecruitmentProcess from './process.js';
import WhyUs from './whyus.js';
import PricingModels from './pricing.js';
import SuccessStories from './success.js';
import FAQ from './faq.js';
import AssessmentProcess from './assessment.js';
import Industries from './industries.js';
import GetStarted from './started.js';
import styles from './PermanentRecruitment.module.css';

const PermanentRecruitmentPage = () => {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <ServiceOverview />
        <WhoItFor />
        <KeyBenefits />
        <RolesWeRecruit />
        <RecruitmentProcess />
        <WhyUs />
        <PricingModels />
        <SuccessStories />
        <FAQ />
        <AssessmentProcess />
        <Industries />
        <GetStarted />
      </div>
    </>
  );
};

export default PermanentRecruitmentPage;
