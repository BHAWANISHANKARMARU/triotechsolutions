import React from 'react';
import { Metadata } from 'next';
import Hero from '../components/About/Hero';
import OurStory from '../components/About/OurStory';
import OurMission from '../components/About/OurMission';
import OurValues from '../components/About/OurValues';
import WhyChooseUs from '../components/About/WhyChooseUs';
import OurApproach from '../components/About/OurApproach';
import GeographicPresence from '../components/About/GeographicPresence';
import OurCommitment from '../components/About/OurCommitment';
import LeadershipTeam from '../components/About/LeadershipTeam';
import JoinOurNetwork from '../components/About/JoinOurNetwork';
import styles from './AboutPage.module.css';

export const metadata: Metadata = {
  title: 'About Us - Trio Tech Solutions',
  description: 'Learn more about Trio Tech Solutions, our mission, values, and what sets us apart in the IT staffing industry.',
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <OurStory />
      <OurMission />
      <OurValues />
      <WhyChooseUs />
      <OurApproach />
      <GeographicPresence />
      <OurCommitment />
      <LeadershipTeam />
      <JoinOurNetwork />
    </div>
  );
};

export default AboutPage;
