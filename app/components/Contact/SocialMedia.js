import styles from './Contact.module.css';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';

export default function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <h2 className={styles.title}>Connect With Us</h2>
      <div className={styles.socialMediaGrid}>
        <div className={styles.socialMediaCard}>
          <div className={styles.socialMediaIcon}><LinkedInIcon /></div>
          <h3>LinkedIn</h3>
          <p>Follow us for IT hiring trends and job updates</p>
          <a href="#" className={styles.socialMediaLink}>Follow</a>
        </div>
        <div className={styles.socialMediaCard}>
          <div className={styles.socialMediaIcon}><TwitterIcon /></div>
          <h3>Twitter</h3>
          <p>Industry insights and company news</p>
          <a href="#" className={styles.socialMediaLink}>Follow</a>
        </div>
        <div className={styles.socialMediaCard}>
          <div className={styles.socialMediaIcon}><FacebookIcon /></div>
          <h3>Facebook</h3>
          <p>Company updates and career tips</p>
          <a href="#" className={styles.socialMediaLink}>Like</a>
        </div>
        <div className={styles.socialMediaCard}>
          <div className={styles.socialMediaIcon}><InstagramIcon /></div>
          <h3>Instagram</h3>
          <p>Company culture and team highlights</p>
          <a href="#" className={styles.socialMediaLink}>Follow</a>
        </div>
      </div>
    </div>
  );
}
