import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className='flex items-center justify-center h-full bg-bg6 dark:bg-bg4'>
        <a
          href="/assests/resume.pdf" 
          download
          className="bg-pink-500 dark:bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 dark:hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <FaDownload size={16} />
          <span>Download My Resume</span>
        </a>
    </div>
  )
}

export default Resume 