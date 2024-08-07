import React from 'react'
import TimelineSection from './Timeline'
import { workExperienceData } from '../../../constant';

const Work = () => {
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