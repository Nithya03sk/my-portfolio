import React from 'react';
import logo from '../assets/nithyashreeLogo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='w-14 h-14' src={logo} alt='logo'></img>
            </div>
            <div className='m-8 flex gap-4 items-center justify-center text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaTwitterSquare />
            </div>
        </nav>
    )
}

export default Navbar