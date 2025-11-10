import React from 'react';
import Hero from '../components/ForJobSeekers/Hero';
import WhyWorkWithUs from '../components/ForJobSeekers/WhyWorkWithUs';
import HowItWorks from '../components/ForJobSeekers/HowItWorks';
import JobOpenings from '../components/ForJobSeekers/JobOpenings';
import JobCategories from '../components/ForJobSeekers/JobCategories';
import EmploymentTypes from '../components/ForJobSeekers/EmploymentTypes';
import CareerResources from '../components/ForJobSeekers/CareerResources';
import SuccessStories from '../components/ForJobSeekers/SuccessStories';
import ExperiencedProfessionals from '../components/ForJobSeekers/ExperiencedProfessionals';
import FAQ from '../components/ForJobSeekers/FAQ';
import RegistrationProcess from '../components/ForJobSeekers/RegistrationProcess';
import WhatToExpect from '../components/ForJobSeekers/WhatToExpect';
import Contact from '../components/ForJobSeekers/Contact';
import ReadyToStart from '../components/ForJobSeekers/ReadyToStart';
import styles from './ForJobSeekers.module.css'; // Added comment to trigger rebuild

const ForJobSeekersPage = () => {
  return (
    <div>
      <Hero />
      <WhyWorkWithUs />
      <HowItWorks />
      <JobOpenings />
      <JobCategories />
      <EmploymentTypes />
      <CareerResources />
      <SuccessStories />
      <ExperiencedProfessionals />
      <FAQ />
      <RegistrationProcess />
      <WhatToExpect />
      <Contact />
      <ReadyToStart />
    </div>
  );
};

export default ForJobSeekersPage;
