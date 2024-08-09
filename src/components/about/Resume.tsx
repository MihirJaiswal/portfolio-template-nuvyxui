import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className='flex items-center justify-center h-full mt-2'>
        <a
          href="/assests/resume.pdf" 
          download
          className="bg-teal-500 dark:bg-purple-500 text-white py-2 px-4 rounded-lg text-center hover:bg-teal-600 dark:hover:bg-purple-700 flex items-center justify-center space-x-2"
        >
          <FaDownload size={16} />
          <span>Download My Resume</span>
        </a>
    </div>
  )
}

export default Resume 