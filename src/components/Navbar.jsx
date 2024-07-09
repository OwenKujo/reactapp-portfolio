import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaSquareInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo}alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-3xl'> 
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareFacebook/>
            <FaSquareInstagram/>
        </div>
    </nav>
  )
}

export default Navbar;