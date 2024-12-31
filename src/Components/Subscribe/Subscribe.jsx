import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <>
    <div className='bg-[#FCC737] px-5 py-5 pb-10 transition-all duration-[.4s] dark:bg-black'>
        <div className='container'>
            {/* <div className='flex justify-center items-center h-[250px] bg-cover bg-center w-full overflow-hidden ' style={{background:"url('images/subscribe.png') no-repeat"}} > </div> */}
            <div className='flex justify-center items-center py-3'>
            <h2 className=" md:text-[48px] text-[20px] w-[280px] text-center text-white md:w-[640px] md:text-center font-volkhov  ">Subscribe and get exclusive deals & offer</h2>
            </div>

            <div className='flex justify-center items-center'>
                   
            <div className="relative w-[640px]">
             <input   placeholder="✉ Enter your mail" className='  w-full md:h-16 h-10 rounded-[10px] outline-none pl-6 '  type="text" />   
            <button className=' absolute md:top-[10%] top-[18%] md:right-[1%] right-[3%] flex items-center justify-center md:w-[160px] w-[60px] md:h-[50px] h-[25px] hover:text-[#000] text-white bg-[#fa7436] rounded-[5px] transition-all duration-150 md:text-[16px] text-[10px] font-poppins font-semibold ' type='submit' >Subscribe</button> 
                                
             </div>           


             </div>  



        </div>

    </div>
    </>
  )
}

export default Subscribe
