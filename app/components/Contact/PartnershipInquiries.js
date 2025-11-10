import styles from './Contact.module.css';

export default function PartnershipInquiries() {
  return (
    <div className={styles.partnershipInquiries}>
      <h2 className={styles.title}>Interested in Partnering With Us?</h2>
      <p>We collaborate with:</p>
      <ul>
        <li>Educational institutions</li>
        <li>Training providers</li>
        <li>Technology companies</li>
        <li>Business consultants</li>
      </ul>
      <p>Contact: [Placeholder - partnerships@triotechsolutions.com]</p>
      <button>Explore Partnership Opportunities</button>
    </div>
  );
}
