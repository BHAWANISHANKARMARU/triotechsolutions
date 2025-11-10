'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import nextWhiteIcon from '@/public/nextLabsWhiteLogo.png'
import nextBlackIcon from '@/public/nextLabsBlackLogo.webp'
import { useTheme } from '../context/ThemeContext'; // Use the context
import Image from 'next/image';
import { useState } from 'react';
import AboutDropdown from './AboutDropdown';
import ServicesDropdown from './ServicesDropdown';
import dropdownStyles from './Dropdown.module.css';


const Navbar = () => {
  const { theme, setTheme } = useTheme(); // Get theme from context
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const servicesData = {
    "services": [
        {
            "title": "App Store Optimization",
            "subtitle": "Explore the most powerful ASO Stack",
            "description": "Get your app or game at the top of app store search results with our advanced app store optimization and keyword research tools.",
            "link": "/services/app-store-optimization"
        },
        {
            "title": "Search Engine Optimization",
            "subtitle": "Empirical evidence based SEO",
            "link": "/services/seo" // Placeholder link
        },
        {
            "title": "Paid Campaigns",
            "subtitle": "We think and do, differently",
            "link": "/services/paid-campaigns" // Placeholder link
        },
        {
            "title": "Youtube Optimization",
            "subtitle": "Acquisition and Video Intelligence",
            "link": "/services/youtube-optimization" // Placeholder link
        }
    ],
    "cta": "All Services"
};

const aboutData = {
    "sections": [
        {
            "title": "About Us",
            "subtitle": "Who we are"
        },
        
        {
            "title": "Contact Us",
            "subtitle": "Reach out to us for any query"
        },
        {
            "title": "Blogs",
            "subtitle": "App marketing news and product releases",
            "featured": [
                {
                    "title": "Free Auto Suggest Google™ Search Keyword SEO Tool",
                    "cta": "Read more"
                },
                {
                    "title": "App Rank Checker - Android & IOS Rankings",
                    "cta": "Read more"
                }
            ]
        }
    ]
};




  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark' : ''} ${styles.navbar} ${styles[theme]}`}>
      <div className="container-fluid">
        <Link href="/" className={`navbar-brand ${styles.brand}`}>
          {theme === 'dark' ? (
            <Image src={nextWhiteIcon} alt="NextLabs.io" width={100} height={30} />
          ) : (
            <Image src={nextBlackIcon} alt="NextLabs.io" width={100} height={30} />
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setShowAbout(true)} onMouseLeave={() => setShowAbout(false)}>
              <Link href="/" className={`nav-link ${styles.navLink}`} id="aboutDropdown" role="button" aria-expanded={showAbout}>
                About
              </Link>
              {showAbout && (
                <div className={`${dropdownStyles.dropdownMenu} ${theme === 'dark' ? dropdownStyles.darkThemeDropdown : ''}`}>
                  <AboutDropdown data={aboutData} />
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link href="/career" className={`nav-link ${styles.navLink}`}>
                Career
              </Link>
            </li>
            <li className="nav-item dropdown" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
              <Link href="/" className={`nav-link ${styles.navLink}`} id="servicesDropdown" role="button" aria-expanded={showServices}>
                Services
              </Link>
              {showServices && (
                <div className={`${dropdownStyles.dropdownMenu} ${theme === 'dark' ? dropdownStyles.darkThemeDropdown : ''}`}>
                  <ServicesDropdown data={servicesData} />
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link href="/tools" className={`nav-link ${styles.navLink}`}>
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className={`nav-link ${styles.navLink}`}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button onClick={toggleTheme} className={`btn ${styles.themeToggleButton}`}>
              {theme === 'dark' ? <FaSun color="white" /> : <FaMoon />}
            </button>
            <button className={`btn ${styles.searchButton}`} type="submit">
                Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;