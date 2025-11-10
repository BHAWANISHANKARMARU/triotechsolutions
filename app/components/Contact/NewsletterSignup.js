import styles from './Contact.module.css';

export default function NewsletterSignup() {
  return (
    <div className={styles.newsletterSignup}>
      <h2 className={styles.title}>Stay Updated</h2>
      <p className={styles.subtitle}>Subscribe to Our Newsletter</p>
      <p>Get the latest IT job openings, hiring trends, and career tips delivered to your inbox.</p>
      <form className={styles.newsletterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="newsletter-email">Email Address*</label>
          <input type="email" id="newsletter-email" name="newsletter-email" required />
        </div>
        <div className={styles.formGroup}>
          <label>I'm interested in:</label>
          <div className={styles.checkboxGroup}>
            <div>
              <input type="checkbox" id="job-opportunities" name="job-opportunities" />
              <label htmlFor="job-opportunities">IT Job Opportunities</label>
            </div>
            <div>
              <input type="checkbox" id="hiring-tips" name="hiring-tips" />
              <label htmlFor="hiring-tips">Hiring & Recruitment Tips</label>
            </div>
            <div>
              <input type="checkbox" id="industry-news" name="industry-news" />
              <label htmlFor="industry-news">Industry News & Trends</label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Subscribe Now</button>
      </form>
      <p className={styles.privacyNote}><small>We respect your privacy. Unsubscribe anytime.</small></p>
    </div>
  );
}
