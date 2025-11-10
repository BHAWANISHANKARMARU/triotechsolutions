import styles from './Careers.module.css';
import Link from 'next/link';

const jobOpenings = [
  {
    title: 'Senior Frontend Developer',
    location: 'Remote',
    department: 'Engineering',
    description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the next generation of our user interface.',
  },
  {
    title: 'Product Manager',
    location: 'New York, NY',
    department: 'Product',
    description: 'We are looking for a Product Manager to help us build the future of our platform. You will be responsible for the product roadmap and strategy.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Remote',
    department: 'Design',
    description: 'We are looking for a talented UX/UI Designer to create amazing user experiences. You will be responsible for the design of our web and mobile applications.',
  },
];

export default function CareersPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Join Our Team</h1>
        <p>We are looking for passionate and talented individuals to join us on our mission to change the world.</p>
      </header>

      <section className={styles.values}>
        <div className={styles.sectionTitle}>Our Values</div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We are constantly looking for new and better ways to do things. We are not afraid to take risks and try new things.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Collaboration</h3>
            <p>We believe that the best ideas come from working together. We are a team of passionate individuals who are dedicated to helping each other succeed.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Customer Focus</h3>
            <p>We are obsessed with our customers. We are constantly looking for ways to improve their experience and make their lives better.</p>
          </div>
        </div>
      </section>

      <section className={styles.openings}>
        <div className={styles.sectionTitle}>Open Positions</div>
        <div className={styles.jobGrid}>
          {jobOpenings.map((job, index) => (
            <div key={index} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p className={styles.jobInfo}>{job.location} | {job.department}</p>
              <p>{job.description}</p>
              <Link href="/apply" className={styles.applyButton}>
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Don't see an opening for you?</h2>
        <p>We are always looking for talented individuals. Send us your resume and we will be in touch.</p>
        <Link href="/contact" className={styles.contactButton}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
