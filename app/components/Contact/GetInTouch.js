import styles from './Contact.module.css';

export default function GetInTouch() {
  return (
    <div className={styles.getInTouch}>
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>For Employers</h3>
          <p>Looking to Hire IT Talent?</p>
          <ul>
            <li>Discuss hiring needs</li>
            <li>Request custom quote</li>
            <li>Schedule consultation</li>
          </ul>
          <p>Email: [Placeholder - employers@triotechsolutions.com]</p>
          <div className={styles.buttonContainer}>
            <button>Schedule Employer Consultation</button>
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>For Job Seekers</h3>
          <p>Looking for IT Career Opportunities?</p>
          <ul>
            <li>Browse current openings</li>
            <li>Upload your resume</li>
            <li>Career counseling</li>
            <li>Application status</li>
          </ul>
          <p>Email: [Placeholder - careers@triotechsolutions.com]</p>
          <div className={styles.buttonContainer}>
            <button>Upload Resume / Browse Jobs</button>
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>General Inquiries</h3>
          <p>Have Questions About Our Services?</p>
           <ul>
            <li>Service offerings</li>
            <li>Partnership opportunities</li>
            <li>Media inquiries</li>
            <li>Other questions</li>
          </ul>
          <p>Email: [Placeholder - info@triotechsolutions.com]</p>
          <div className={styles.buttonContainer}>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
