import React from 'react';
import GitHubCalendar from 'react-github-calendar';

type ThemeInput = {
  light: any;
};

const GitHubContributionGraph: React.FC = () => {
  const explicitTheme: ThemeInput = {
    light: ['#dcf7fa', '#80deea', '#4dd0e1', '#00acc1', '#029db0'],

  };

  return (
    <div>
      <div className="dark:hidden block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={13} 
          blockMargin={3} 
          colorScheme="light"
          theme={explicitTheme}
          hideColorLegend
        />
      </div>
      <div className="hidden dark:block github">
        <GitHubCalendar 
          username="MihirJaiswal" 
          blockSize={13} 
          blockMargin={2} 
          colorScheme="dark"
          hideColorLegend
        />
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
