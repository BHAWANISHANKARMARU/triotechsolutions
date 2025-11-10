import styles from './Contact.module.css';

export default function ResponseTime() {
  return (
    <div className={styles.responseTime}>
      <h2 className={styles.title}>What to Expect</h2>
      <div className={styles.grid}>
        <div>
          <h3>Employer Inquiries</h3>
          <p>Initial response: Within 4 business hours</p>
          <p>Consultation scheduling: Within 24 hours</p>
        </div>
        <div>
          <h3>Job Seeker Inquiries</h3>
          <p>Profile review: Within 24 hours</p>
          <p>Job matching: Within 48 hours</p>
        </div>
        <div>
          <h3>General Inquiries</h3>
          <p>Response time: Within 24 business hours</p>
        </div>
      </div>
    </div>
  );
}
