import styles from './Contact.module.css';

export default function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <h2 className={styles.title}>Quick Links</h2>
      <div className={styles.quickLinksGrid}>
        <div className={styles.quickLinksColumn}>
          <h3>For Employers</h3>
          <ul>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">View Our Services</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Pricing Information</a></li>
          </ul>
        </div>
        <div className={styles.quickLinksColumn}>
          <h3>For Job Seekers</h3>
          <ul>
            <li><a href="#">Browse IT Jobs</a></li>
            <li><a href="#">Create Profile</a></li>
            <li><a href="#">Career Resources</a></li>
            <li><a href="#">Resume Tips</a></li>
          </ul>
        </div>
        <div className={styles.quickLinksColumn}>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Industries We Serve</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
