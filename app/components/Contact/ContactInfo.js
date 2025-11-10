import styles from './Contact.module.css';
import { MapPin, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.title}>Get In Touch With Us</h2>
      <p className={styles.subtitle}>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <MapPin size={32} className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactCardTitle}>Our Office</h3>
          <p>[Placeholder - Office Address Line 1]</p>
          <p>[Placeholder - City, State, PIN Code]</p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <Mail size={32} className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactCardTitle}>Email Us</h3>
          <p>info@triotechsolutions.com</p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <Clock size={32} className={styles.contactIcon} />
          </div>
          <h3 className={styles.contactCardTitle}>Business Hours</h3>
          <p>Mon - Fri: 9am - 6pm</p>
          <p>Sat: 10am - 2pm</p>
        </div>
      </div>
    </div>
  );
}
