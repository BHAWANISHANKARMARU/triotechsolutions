import Hero from '../components/Contact/Hero';
import ContactInfo from '../components/Contact/ContactInfo';
import GetInTouch from '../components/Contact/GetInTouch';
import ContactForm from '../components/Contact/ContactForm';
import OfficeLocations from '../components/Contact/OfficeLocations';
import QuickLinks from '../components/Contact/QuickLinks';
import SocialMedia from '../components/Contact/SocialMedia';
import FAQ from '../components/Contact/FAQ';
import OfficeMap from '../components/Contact/OfficeMap';
import NewsletterSignup from '../components/Contact/NewsletterSignup';
import ResponseTime from '../components/Contact/ResponseTime';
import PartnershipInquiries from '../components/Contact/PartnershipInquiries';
import styles from '../components/Contact/Contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <Hero />
      <ContactInfo />
      <GetInTouch />
      <ContactForm />
      <OfficeLocations />
      <QuickLinks />
      <SocialMedia />
      <FAQ />
      <OfficeMap />
      <NewsletterSignup />
      <ResponseTime />
      <PartnershipInquiries />
    </main>
  );
}
