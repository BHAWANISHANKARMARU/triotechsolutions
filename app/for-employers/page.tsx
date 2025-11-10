import React from 'react';
import { Metadata } from 'next';
import Hero from '../components/ForEmployers/Hero';
import HiringChallenges from '../components/ForEmployers/HiringChallenges';
import ITStaffingSolutions from '../components/ForEmployers/ITStaffingSolutions';
import HowItWorks from '../components/ForEmployers/HowItWorks';
import Benefits from '../components/ForEmployers/Benefits';
import RolesWeFill from '../components/ForEmployers/RolesWeFill';
import IndustriesWeServe from '../components/ForEmployers/IndustriesWeServe';
import PricingModels from '../components/ForEmployers/PricingModels';
import SuccessStories from '../components/ForEmployers/SuccessStories';
import Testimonials from '../components/ForEmployers/Testimonials';
import FAQ from '../components/ForEmployers/FAQ';
import ReadyToHire from '../components/ForEmployers/ReadyToHire';
import Contact from '../components/ForEmployers/Contact';
import styles from './ForEmployers.module.css';

export const metadata: Metadata = {
    title: 'For Employers - Trio Tech Solutions',
    description: 'Find top IT talent fast. Access pre-vetted technology professionals ready to drive your business forward.',
};

const ForEmployersPage = () => {
    return (
        <div className={styles.container}>
            <Hero />
            <HiringChallenges />
            <ITStaffingSolutions />
            <HowItWorks />
            <Benefits />
            <RolesWeFill />
            <IndustriesWeServe />
            <PricingModels />
            <SuccessStories />
            <Testimonials />
            <FAQ />
            <ReadyToHire />
            <Contact />
        </div>
    );
};

export default ForEmployersPage;
