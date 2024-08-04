import React from 'react'
import TimelineSection from './Timeline'

const Work = () => {
    const workExperienceData = [
        {
          title: "Freelancer",
          role: "Web developer",
          skills: ["Next.js", "React", "Node.js"],
          period: "2023-Present",
          logo: "/work/freelance.png",
        },
      ];

      const TURQUOISE = "#06b6d4";
  return (
    <div>
        <TimelineSection 
        data={workExperienceData}
        title="Experience"
        underlineColor={TURQUOISE}
        emoji='💼'
        />
    </div>
  )
}

export default Work