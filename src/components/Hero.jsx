import React from 'react'
import { HERO_CONTENT } from '../constants'
import coding from '../assets/coding.png'
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

function Hero() {
    return (
        <div className='border-bottom border-neutral-900 p-4 mb-36'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className='text-5xl pb-16 font-thin tracking-tight lg:mt-8 lg:text-8xl'>Nithyashree S K</motion.h1>
                        <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Front End Developer</motion.span>
                        <motion.p variants={container(1)}
                        initial="hidden"
                        animate="visible"className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div className='flex justify-center' initial={{opacity:0,x:100}} transition={{duration:0.5}} whileInView={{opacity:1,x:0}}>
                        {/* <img className='w-1/2 h-1/2 rounded-full' alt="nithyashree profile" src={profilePic}></img> */}
                        <img className='w-1/2 h-1/2 rounded-s' alt="nithyashree profile" src={coding}></img>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero