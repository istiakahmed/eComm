import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className='banner flex justify-center items-center bg-cover bg-center h-screen' style={{ background:"url('images/ecombanner.png')" }}>
    <div className=''>
        <h2 className='font-volkhov font-extrabold text-[#F5F5F5] text-[75px]'>URBAN FASION</h2>
        <h3 className='font-semibold text-[#F5F5F5] text-[35px]'>the Best <span className='text-[#ffc107]'>Outfit</span> in the town</h3>
    </div>
       

    </div>
    </>
  )
}

export default Banner
