import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 className='my-20 text-center text-4xl'
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}} 
        transition={{duration:1.5}}>Projects</motion.h2>
        <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='flex flex-wrap lg:justify-center'>
                <motion.div className='w-full lg:w-1/4'
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}>
                    <img className='mb-6 rounded' alt = '' width={150} height={150} src={project.image}></img>
                </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4 mb-8'
                whileInView={{ opacity: 1, x: -100 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1 }}>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {
                        project.technologies.map((technology,index) => (
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

export default Projects