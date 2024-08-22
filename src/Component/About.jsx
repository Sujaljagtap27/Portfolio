import React from 'react'
import { IoArrowForward } from 'react-icons/io5';


const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-centre bg-black shadow-xl mx-0 md:mx-20 bg-opacity-20 rounded-lg p-12'>
    <div>
     <h2 className="text-2xl md:text-4xl font-bold">About</h2>
     <div className="md:flex flex-wrap flex-col md:flex-row items-centre">
      <img className="md:h-80" src='' alt="" />    
      <ul>
        <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className='mt-1'/>
            <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                    BE in Information Technology.
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                    Currently persuing BE degree in IT at I2IT Pune.
                </p>
            </span>
        </div>
        <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className='mt-1'/>
            <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                    Frontend developer
                </h1>
                <p className='text-sm md:text-md leading-tight'>
                    Absorbing Frontend technology using & practising HTML,CSS,JS and REACT
                </p>
            </span>
        </div>
      </ul>
    </div>    
    </div>    
    </div>
  )
}

export default About