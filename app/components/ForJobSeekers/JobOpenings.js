"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, CalendarDays, Tag } from "lucide-react";
import jobsData from "../../../data/jobs.json";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Display a limited number of jobs for the section, e.g., first 3 or 6
    setJobs(jobsData.jobs.slice(0, 6));
  }, []);

  return (
    <section id="job-openings" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Current IT Job Openings
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our latest opportunities with leading companies. Your next
            career move awaits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-xl p-6 flex flex-col shadow-card-shadow hover-lift"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {job.title}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground flex-grow">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {job.location}
                </p>
                <p className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-primary" />
                  {job.experience}
                </p>
                <p className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-primary" />
                  {job.salary}
                </p>
                <p className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-primary" />
                  {job.type}
                </p>
                <p className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                  Posted: {job.postedDate}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/jobs/${job.id}`} // Assuming a dynamic route for individual job details
                  className="inline-block w-full text-center rounded-md bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-block rounded-md bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/90 transition-colors"
          >
            View All IT Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
