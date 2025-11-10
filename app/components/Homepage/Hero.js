'use client';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 opacity-20">
      
      </div>
      <div className="absolute inset-0 bg-background/80"></div> {/* Removed backdrop-blur-sm */}

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-32 md:py-48 text-center">
        <h1 
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down"
          // Removed text-shadow
        >
          Connect Top IT Talent with Leading Companies
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Expert IT staffing solutions that drive business growth and career success.
        </p>
        <div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/for-employers" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"> {/* Removed shadow-lg shadow-primary/30 */}
            Find Top Talent
          </Link>
          <Link href="/jobs" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 border border-border flex items-center justify-center">
            Browse IT Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
