'use client';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributionGraph: React.FC = () => {
  return (
    <div className="">
      {/* Light Theme Graph */}
      <div className="dark:hidden block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={15} 
          blockMargin={5} 
          colorScheme="light"
        />
      </div>

      {/* Dark Theme Graph */}
      <div className="hidden dark:block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={15} 
          blockMargin={5} 
          colorScheme="dark"
        />
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
