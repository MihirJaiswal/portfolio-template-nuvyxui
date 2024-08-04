'use client';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

// Define the type manually
type ThemeInput = {
  light: any;
};

const GitHubContributionGraph: React.FC = () => {
  const explicitTheme: ThemeInput = {
    light: ['#fce3ed', '#ffccd5', '#ff99aa', '#ff6680', '#ff3366'],

  };

  return (
    <div className="">
      {/* Light Theme Graph */}
      <div className="dark:hidden block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={15} 
          blockMargin={5} 
          colorScheme="light"
          theme={explicitTheme}
          hideColorLegend
        />
      </div>

      {/* Dark Theme Graph */}
      <div className="hidden dark:block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={15} 
          blockMargin={5} 
          colorScheme="dark"
          hideColorLegend
        />
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
