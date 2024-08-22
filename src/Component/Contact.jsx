import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-centre'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>
                Feel Free to reach out!
            </h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <MdOutlineEmail size={20}/>
                sujaljagtap86@gmail.com
            </li>
            <li className='flex gap-1 items-center'>
            <CiLinkedin size={20}/>
            linkedin.com/in/sujal-jagtap-0a7745259/
            </li>
            <li className='flex gap-1 items-center'>
            <FaGithub size={20}/>
            github.com/Sujaljagtap27
            </li>
        </ul>
    </div>
  )
}

export default Contact