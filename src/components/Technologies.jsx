import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaPython, FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { motion } from "framer-motion"

function Technologies() {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 className='my-20 text-center text-4xl'
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.5}}>Technologies</motion.h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 animate-up-down'>
                    <FaReact className='text-4xl' style={{ color: '#61DBFB' }} />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 animate-down-up'>
                    <FaJsSquare className='text-4xl' style={{ color: '#F7DF1E' }} />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 animate-up-down'>
                    <FaHtml5 className='text-4xl' style={{ color: '#E34F26' }} />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 animate-down-up'>
                    <FaCss3Alt className='text-4xl' style={{ color: '#264DE4' }} />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 animate-up-down'>
                    <SiRedux className='text-4xl' style={{ color: '#764ABC' }} />
                </div>
            </div>
        </div>
    )
}

export default Technologies