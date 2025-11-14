import React from 'react';
import ServiceOverview from './servicesoverview.js';
import WhoItFor from './whoitfor.js';
import KeyBenefits from './benefits.js';
import CommonUseCases from './common.js';
import AvailableRoles from './available.js';
import HowItWorks from './howitworks.js';
import EngagementModels from './engagement.js';
import Pricing from './pricing.js';
import ContractTerms from './contract.js';
import WhatsIncluded from './included.js';
import SuccessMetrics from './sucess.js';
import WhyUs from './whyus.js';
import GetStarted from './started.js';
import Contact from './contact.js';

const FlexiblePlacementPage = () => {
  return (
    <main>
      <ServiceOverview />
      <WhoItFor />
      <KeyBenefits />
      <CommonUseCases />
      <AvailableRoles />
      <HowItWorks />
      <EngagementModels />
      <Pricing />
      <ContractTerms />
      <WhatsIncluded />
      <SuccessMetrics />
      <WhyUs />
      <GetStarted />
      <Contact />
    </main>
  );
};

export default FlexiblePlacementPage;
