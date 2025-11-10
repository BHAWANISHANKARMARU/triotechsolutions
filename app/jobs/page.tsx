'use client';
import { useState } from 'react';
import { jobs as allJobs } from '../../data/jobs.json';

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header and Search */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Find Your Next IT Opportunity</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our open positions and find a role that's right for you.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by title or skill (e.g., 'React', 'DevOps')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-primary transition-colors">
                <div className="flex-grow mb-4 sm:mb-0">
                  <h2 className="text-xl font-bold text-primary">{job.title}</h2>
                  <div className="text-muted-foreground text-sm mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <span>📍 {job.location}</span>
                    <span>🕒 {job.experience}</span>
                    <span>💼 {job.type}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <span key={skill} className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="mailto:careers@triotechsolutions.com?subject=Application for [Job Title]"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No jobs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
