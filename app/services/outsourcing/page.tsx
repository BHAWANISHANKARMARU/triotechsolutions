import React from 'react';
import ServiceOverview from './servicesoverview.js';
import WhoItFor from './whoitfor.js';
import KeyBenefits from './benefits.js';
import OutsourcingModels from './models.js';
import AvailableServices from './available.js';
import TeamComposition from './composition.js';
import HowItWorks from './howitworks.js';
import Management from './managment.js';
import Pricing from './pricing.js';
import Commitments from './commitments.js';
import Security from './security.js';
import SuccessStories from './sucess.js';
import WhyUs from './whyus.js';
import GetStarted from './started.js';
import Contact from './contact.js';

const OutsourcingPage = () => {
  return (
    <main>
      <ServiceOverview />
      <WhoItFor />
      <KeyBenefits />
      <OutsourcingModels />
      <AvailableServices />
      <TeamComposition />
      <HowItWorks />
      <Management />
      <Pricing />
      <Commitments />
      <Security />
      <SuccessStories />
      <WhyUs />
      <GetStarted />
      <Contact />
    </main>
  );
};

export default OutsourcingPage;
