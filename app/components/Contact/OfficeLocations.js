import styles from './Contact.module.css';

export default function OfficeLocations() {
  return (
    <div className={styles.officeLocations}>
      <h2 className={styles.title}>Office Locations</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>[City Name Placeholder]</h3>
          <p>Full Address</p>
          <p>Email: [Placeholder]</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>[City Name Placeholder]</h3>
          <p>Full Address</p>
          <p>Email: [Placeholder]</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>[City Name Placeholder]</h3>
          <p>Full Address</p>
          <p>Email: [Placeholder]</p>
        </div>
      </div>
    </div>
  );
}
