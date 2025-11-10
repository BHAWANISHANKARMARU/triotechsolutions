import styles from './Contact.module.css';

export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <h2 className={styles.title}>Contact Form</h2>
      <form>
        <div>
          <label>I am a:</label>
          <div className={styles.radioGroup}>
            <label><input type="radio" name="type" value="employer" /> Employer / Company</label>
            <label><input type="radio" name="type" value="job_seeker" /> Job Seeker</label>
            <label><input type="radio" name="type" value="other" /> Other</label>
          </div>
        </div>
        <div>
          <label htmlFor="name">Full Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>
        <div>
          <label htmlFor="subject">Subject*</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div className={styles.checkboxGroup}>
          <label><input type="checkbox" id="consultation" name="consultation" /> I'm interested in scheduling a consultation</label>
          <label><input type="checkbox" id="newsletter" name="newsletter" /> I'd like to receive updates and newsletters</label>
          <label><input type="checkbox" id="privacy" name="privacy" /> I agree to privacy policy and terms</label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
