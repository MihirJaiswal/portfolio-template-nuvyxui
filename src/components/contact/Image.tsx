import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../Header';

const ImageCard = () => {
  return (
    <div>
        <div className='hidden md:flex flex-col items-center justify-between gap-12 space-y-9 relative'>
         <AnimatePresence>
            <motion.div
              key="robot-div"
              initial={{ y: ontoggle ? 0 : 10 }}
              animate={{ y: ontoggle ? 10 : 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className='flex flex-col items-center justify-center'
            >
              <Image
                src='/assests/astronaut.svg'
                alt="space"
                width={500}
                height={500}
                loading='lazy'
                className="w-1/2 hidden dark:block"
              />
              <Image
                src='/assests/robot.png'
                alt="space"
                width={500}
                height={500}
                quality={100}
                loading='lazy'
                className="w-1/2 dark:hidden rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
              />
           
            </motion.div>
          </AnimatePresence>
          <Header underlineColor="#ff9400" emoji='✨' className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase">let&apos;s work together</Header>
         </div>
    </div>
  )
}

export default ImageCard