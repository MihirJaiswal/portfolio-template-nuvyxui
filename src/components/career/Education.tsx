import React from 'react'
import TimelineSection from './Timeline'

const Education = () => {
    const educationData = [
        {
          title: "Chameli Devi Group of Institutions",
          role: "B.Tech in AI and DS",
          skills: [],
          period: "2021-2025",
          logo: "/education/cdgi.png",
        },
        {
          title: "K.K. Convent Hr. Sec. School",
          role: "",
          skills: ["Physics", "Chemistry", "Maths"],
          period: "2018-2020",
          logo: "/education/kk.png",
        },
        {
          title: "St Jude's Higher Secondary School",
          role: "",
          skills: [],
          period: "2005-2017",
          logo: "/education/sjs.png",
        },
        // Add more institutes as needed
      ];
      
      const TURQUOISE = "#06b6d4";
  return (
    <div>
        <TimelineSection 
        data={educationData}
        title="Education"
        underlineColor={TURQUOISE}
        emoji='🎓'
        />
    </div>
  )
}

export default Education