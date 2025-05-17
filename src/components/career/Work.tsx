import TimelineSection from './Timeline'
import { workExperienceData } from '../../../constant';

const Work = () => {
const ORANGE = "#ff9400";
  return (
    <div id='career'>
        <TimelineSection 
        data={workExperienceData}
        title="Experience"
        underlineColor={ORANGE}
        emoji='💼'
        />
    </div>
  )
}

export default Work