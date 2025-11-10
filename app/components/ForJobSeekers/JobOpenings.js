'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../for-job-seekers/ForJobSeekers.module.css';
import jobsData from '../../../data/jobs.json';

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData.jobs);
  }, []);

  return (
    <div className={styles.jobOpenings}>
      <h2>Current IT Job Openings</h2>
      <p>Browse our current job openings across various IT roles and technologies. New positions are added regularly.</p>
      <div className={styles.jobList}>
        {jobs.map(job => (
          <div key={job.id} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Posted:</strong> {job.postedDate}</p>
          </div>
        ))}
      </div>
      <button className={styles.cta}>View All IT Jobs</button>
    </div>
  );
};

export default JobOpenings;