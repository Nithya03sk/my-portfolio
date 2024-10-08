import React from 'react'
import profilePic from '../assets/profilePic.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion";

function About() {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About Me</h2>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl w-1/2" src={profilePic} alt="about" />
                    </div>
                </motion.div>
                <motion.div className="w-full lg:w-1/3"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}>
                    <div className="flex justify-center lg:justify-start">
                        <p className=''>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About