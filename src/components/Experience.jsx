import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity: 1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='flex flex-wrap lg:justify-center'>
                <motion.div className='w-full lg:w-1/4'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4 mb-8'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    {
                        experience.technologies.map((technology,index) => (
                            <span key={index} className='my-4 mr-2 px-2 py-1 rounded bg-neutral-800 text-purple-500 text-sm'>{technology}</span>
                        ))
                    }
                </motion.div>
            </div> 
        ))}
        </div>
    </div>
  )
}

export default Experience