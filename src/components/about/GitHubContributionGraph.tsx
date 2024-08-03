'use client';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributionGraph: React.FC = () => {
  return (
    <div className="">
      {/* Light Theme Graph */}
      <div className="dark:hidden block">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={12} 
          blockMargin={3} 
          colorScheme="light"
        />
      </div>

      {/* Dark Theme Graph */}
      <div className="hidden dark:block">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={12} 
          blockMargin={3} 
          colorScheme="dark"
        />
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
