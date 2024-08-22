import React from 'react'
import face from '/face.png'
const Home = () => {
  return (
    <div id='Home'
    className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className="md:w-2/4 md:pt-10">
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello' I am Sujal</h1>
        <p className='text-sm md:text-2xl tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit facilis aperiam quaerat eius ad suscipit quia inv</p>
        <button className='mt-5 md:md-10 text-white text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button>
        </div>
        <div>
            <img className="h-96 w-96" src={face} alt="" />
        </div>
        
    </div>
  )
}

export default Home