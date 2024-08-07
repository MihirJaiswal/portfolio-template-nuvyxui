import React from 'react'
import TimelineSection from './Timeline'
import { educationData } from '../../../constant';

const Education = () => {
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