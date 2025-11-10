'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MultiColumnDropdown from './MultiColumnDropdown';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showEmployers, setShowEmployers] = useState(false);
  const [showJobSeekers, setShowJobSeekers] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Data definitions remain the same
  const aboutData = {
    columns: [
      { title: 'Company', links: [{ title: 'About Us', href: '/about' }, { title: 'Our Story', href: '/about-us#story' }, { title: 'Our Values', href: '/about-us#values' }] },
      { title: 'People', links: [{ title: 'Careers', href: '/careers' }, { title: 'Why Work With Us', href: '/careers#culture' }, { title: 'Leadership Team', href: '/about-us#team' }] },
      { title: 'Connect', links: [{ title: 'Contact Us', href: '/contact' }, { title: 'Locations', href: '/contact#locations' }, { title: 'LinkedIn', href: '#' }] }
    ]
  };
  const employersData = {
    columns: [
        { title: 'Our Solutions', links: [{ title: 'Permanent Recruitment', href: '/services/permanent-recruitment' }, { title: 'Contract Staffing', href: '/services/contract-staffing' }, { title: 'Flexible Placement', href: '/services/flexible-placement' }, { title: 'Outsourcing', href: '/services/outsourcing' }] },
        { title: 'Why Partner With Us?', links: [{ title: 'Solve Hiring Challenges', href: '/for-employers#challenges' }, { title: 'Our Process', href: '/for-employers#process' }, { title: 'Success Stories', href: '/for-employers#success' }] },
        { title: 'Roles We Fill', links: [{ title: 'Software Development', href: '#' }, { title: 'Cloud & Infrastructure', href: '#' }, { title: 'Data & AI', href: '#' }] },
    ]
  };
  const jobSeekersData = {
    columns: [
        {
            title: 'Find a Job',
            links: [
              { title: 'Browse IT Jobs', href: '/jobs' },
              { title: 'Job Categories', href: '/for-job-seekers#categories' },
              { title: 'Types of Employment', href: '/for-job-seekers#employment-types' },
            ]
          },
          {
            title: 'Career Growth',
            links: [
              { title: 'Career Resources', href: '/for-job-seekers#resources' },
              { title: 'Resume Tips', href: '#' },
              { title: 'Interview Prep', href: '#' },
            ]
          },
          {
            title: 'Why Work With Us?',
            links: [
              { title: 'Benefits of Trio Tech', href: '/for-job-seekers#benefits' },
              { title: 'How It Works', href: '/for-job-seekers#process' },
              { title: 'Success Stories', href: '/for-job-seekers#success-stories' },
            ]
          },
    ]
  };
  const servicesData = {
    columns: [
      { title: 'Our Staffing Solutions', links: [{ title: 'Permanent Recruitment', href: '/services/permanent-recruitment' }, { title: 'Contract Staffing', href: '/services/contract-staffing' }, { title: 'Flexible Placement', href: '/services/flexible-placement' }, { title: 'Outsourcing', href: '/services/outsourcing' }, { title: 'Campus Hiring', href: '/services/campus-hiring' }, { title: 'Training & Upskilling', href: '/services/training' }] },
      { title: 'Roles We Fill', links: [{ title: 'Software Development', href: '#' }, { title: 'Cloud & Infrastructure', href: '#' }, { title: 'Data & AI', href: '#' }, { title: 'Cybersecurity', href: '#' }, { title: 'Product & Management', href: '#' }] },
      { title: 'Industries We Serve', links: [{ title: 'Financial Services & FinTech', href: '#' }, { title: 'Healthcare Technology', href: '#' }, { title: 'E-commerce & Retail', href: '#' }, { title: 'SaaS & Enterprise Software', href: '#' }, { title: 'Startups & Growth Companies', href: '#' }] }
    ]
  };

  const NavLinkWithDropdown = ({ title, show, setShow, data, href }) => (
    <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="relative">
      <Link href={href} className="text-foreground/80 hover:text-foreground transition-colors flex items-center">
        {title}
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </Link>
      {show && (
        <div className="absolute top-full left-0 mt-2 w-max">
            <div className="bg-popover text-popover-foreground rounded-lg shadow-lg border border-border p-6">
                <MultiColumnDropdown data={data} />
            </div>
        </div>
      )}
    </li>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Trio Tech
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-6 text-base font-medium">
              <li><Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link></li>
              <NavLinkWithDropdown title="About" href="/about" show={showAbout} setShow={setShowAbout} data={aboutData} />
              <NavLinkWithDropdown title="Services" href="/services" show={showServices} setShow={setShowServices} data={servicesData} />
              <NavLinkWithDropdown title="For Employers" href="/for-employers" show={showEmployers} setShow={setShowEmployers} data={employersData} />
              <NavLinkWithDropdown title="For Job Seekers" href="/for-job-seekers" show={showJobSeekers} setShow={setShowJobSeekers} data={jobSeekersData} />
              <li><Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 rounded-md text-sm font-medium transition-colors">
              Schedule a Consultation
          </button>
        </div>

        <div className="md:hidden">
            <button className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
