import React from 'react'
import TimelineSection from './Timeline'
import { educationData } from '../../../constant';

const Education = () => {
const ORANGE = "#ff9400";
  return (
    <div >
        <TimelineSection 
        data={educationData}
        title="Education"
        underlineColor={ORANGE}
        emoji='🎓'
        />
    </div>
  )
}

export default Education