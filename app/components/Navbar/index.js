"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Import Sun and Moon
import MultiColumnDropdown from "./MultiColumnDropdown";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Data definitions remain the same
  const aboutData = {
    columns: [
      {
        title: "Our Company",
        links: [
          { title: "Our Story", href: "/about#story" },
          { title: "Mission & Values", href: "/about#mission" },
          { title: "Why Choose Us", href: "/about#why-choose-us" },
        ],
      },
      {
        title: "Our Team",
        links: [
          { title: "Leadership", href: "/about#team" },
          { title: "Join Our Team", href: "/careers" },
          { title: "Life at Trio Tech", href: "/careers#culture" },
        ],
      },
      {
        title: "Connect",
        links: [
          { title: "Contact Us", href: "/contact" },
          { title: "Our Locations", href: "/contact#locations" },
          { title: "LinkedIn", href: "#" },
        ],
      },
    ],
  };
  const employersData = {
    columns: [
      {
        title: "Our Solutions",
        links: [
          {
            title: "Permanent Recruitment",
            href: "/services/permanent-recruitment",
          },
          { title: "Contract Staffing", href: "/services/contract-staffing" },
          { title: "Flexible Placement", href: "/services/flexible-placement" },
          { title: "Outsourcing", href: "/services/outsourcing" },
        ],
      },
      {
        title: "Why Partner With Us?",
        links: [
          {
            title: "Solve Hiring Challenges",
            href: "/for-employers#challenges",
          },
          { title: "Our Process", href: "/for-employers#process" },
          { title: "Success Stories", href: "/for-employers#success" },
        ],
      },
      {
        title: "Roles We Fill",
        links: [
          { title: "Software Development", href: "#" },
          { title: "Cloud & Infrastructure", href: "#" },
          { title: "Data & AI", href: "#" },
        ],
      },
    ],
  };
  const jobSeekersData = {
    columns: [
      {
        title: "Find a Job",
        links: [
          { title: "Browse IT Jobs", href: "/jobs" },
          { title: "Job Categories", href: "/for-job-seekers#categories" },
          {
            title: "Types of Employment",
            href: "/for-job-seekers#employment-types",
          },
        ],
      },
      {
        title: "Career Growth",
        links: [
          { title: "Career Resources", href: "/for-job-seekers#resources" },
          { title: "Resume Tips", href: "#" },
          { title: "Interview Prep", href: "#" },
        ],
      },
      {
        title: "Why Work With Us?",
        links: [
          { title: "Benefits of Trio Tech", href: "/for-job-seekers#benefits" },
          { title: "How It Works", href: "/for-job-seekers#process" },
          {
            title: "Success Stories",
            href: "/for-job-seekers#success-stories",
          },
        ],
      },
    ],
  };
  const servicesData = {
    columns: [
      {
        title: "Core Services",
        links: [
          {
            title: "Campus Hiring",
            href: "/services",
          },
          { title: "Contract Staffing", href: "/services/contract-staffing" },
          {
            title: "Flexible Placement",
            href: "/services/flexible-placement",
          },
        ],
      },
      {
        title: "Strategic Solutions",
        links: [
          { title: "Outsourcing", href: "/services/outsourcing" },
          {
            title: "Permanent Recruitment",
            href: "/services/permanent-recruitment",
          },
          { title: "Training", href: "/services/training" },
        ],
      },
    ],
  };

  const NavLinkWithDropdown = ({ title, show, setShow, data, href }) => (
    <li
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative"
    >
      <Link
        href={href}
        className="text-foreground/80 hover:text-foreground transition-colors flex items-center"
      >
        {title}
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
      {show && (
        <div className="absolute top-full left-0 w-max pt-2">
          <div className="bg-popover text-popover-foreground rounded-lg shadow-lg border border-border p-6">
            <MultiColumnDropdown data={data} />
          </div>
        </div>
      )}
    </li>
  );

  const MobileNavLink = ({ title, href }) => (
    <li>
      <Link
        href={href}
        className="block py-2 text-base text-foreground/80 hover:text-foreground"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {title}
      </Link>
    </li>
  );

  const MobileNavLinkWithDropdown = ({ title, data, href }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <li className="py-2">
        <div className="flex justify-between items-center">
          <Link
            href={href}
            className="text-base text-foreground/80 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {title}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2">
            <svg
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <ul className="pl-4 mt-2 space-y-2">
            {data.columns
              .flatMap((col) => col.links)
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        {/* Left: Brand */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Trio Tech
          </Link>
        </div>

        {/* Middle: Nav Links */}
        <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center space-x-6 text-base font-medium">
              <li>
                <Link
                  href="/"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <NavLinkWithDropdown
                title="Services"
                href="/services"
                show={showServices}
                setShow={setShowServices}
                data={servicesData}
              />
              <li>
                <Link
                  href="/for-employers"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  For Employers
                </Link>
              </li>
              <li>
                <Link
                  href="/for-job-seekers"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  For Job Seekers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
        </div>

        {/* Right: Theme Toggle */}
        <div className="hidden md:flex items-center justify-end">
          <button
            onClick={toggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2">
              <MobileNavLink title="Home" href="/" />
              <MobileNavLink title="About" href="/about" />
              <MobileNavLinkWithDropdown
                title="Services"
                href="/services"
                data={servicesData}
              />
              <MobileNavLink title="For Employers" href="/for-employers" />
              <MobileNavLink title="For Job Seekers" href="/for-job-seekers" />
              <MobileNavLink title="Contact" href="/contact" />
            </ul>
            <div className="border-t border-border mt-4 pt-4 flex items-center justify-center">
              <button
                onClick={toggleTheme}
                className="h-10 w-full flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                {isDarkMode ? <Sun size={20} className="mr-2"/> : <Moon size={20} className="mr-2"/>}
                Toggle Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
