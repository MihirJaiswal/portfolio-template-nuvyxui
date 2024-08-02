'use client';
import React, { useEffect } from 'react';
import 'github-calendar/dist/github-calendar-responsive.css';

const GithubContribution: React.FC = () => {
  useEffect(() => {
    const GitHubCalendar = require('github-calendar');
    GitHubCalendar(".calendar", "MihirJaiswal", { responsive: true });
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div className="calendar"></div>
    </div>
  );
};

export default GithubContribution;
