import React from 'react';

const skills = [
  'Python', 'Java', 'JavaScript', 'Go', 'Rust', 'Kotlin', 'C#', '.NET Core',
  'React.js', 'Angular', 'Vue.js', 'Spring Boot', 'Django', 'Express.js', 'FastAPI',
  'SQL', 'PostgreSQL', 'MySQL', 'NoSQL', 'MongoDB', 'Redis', 'Data Modeling',
  'AWS', 'Azure', 'Google Cloud Platform', 'Terraform', 'Docker', 'Kubernetes',
  'Machine Learning', 'AI', 'Data Analysis', 'Pandas', 'NumPy', 'TensorFlow',
  'Cybersecurity', 'Penetration Testing', 'Network Security', 'CI/CD', 'Jenkins', 'GitLab'
];

const SkillSpecificTraining = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Targeted Skill-Specific Training
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer focused training modules on the most in-demand technologies and platforms in the IT industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-card text-muted-foreground font-medium px-4 py-2 rounded-lg border border-border transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSpecificTraining;
