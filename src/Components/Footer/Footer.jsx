import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'


const Footer = () => {
  return (
    <>
    <div className='bg-[#F5F5F5] transition-all duration-[.4s] dark:bg-black dark:text-white pt-10'>
        <div className='container'>
            <div className=''>

            <div className=" flex flex-wrap justify-between gap-8 mb-5 ">
                        <div className="">
                            <img src="images/logo.png" alt="bhum...." className="w-[150px]" />
                            <p className="Fp">Choose your life style outfit from us.</p>
                            <div className=" flex items-center gap-2 md:gap-[23px] ">
                            <FaFacebook  className=' duration-150 text-white bg-black hover:text-[#fa7436] hover:bg-white rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>
                            <IoLogoInstagram  className=' duration-150 text-black bg-white hover:text-[#ffffff] hover:bg-[#fa7436] rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>
                            <FaTwitter className=' duration-150 text-black bg-white hover:text-[#ffffff] hover:bg-[#fa7436] rounded-full md:h-[40px] h-[20px] md:w-[40px] w-[20px] '/>


                            </div>

                        </div>
                        {/* ------------------- */}

                        <div className="flex items-center gap-20">
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">Company</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">About</p>
                                
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Logistic</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Privacy & Policy</p>
                            </div>
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">Contact</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Help/FAQ</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Press</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Affilates</p>
                            </div>
                            <div className="">
                                <h2 className=" md:mb-[25px] mb-[10px] md:text-[18px] text-[13px] text-[#222222] font-poppins font-semibold  ">More</h2>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Press Centre</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Our Blog</p>
                                <p className=" md:text-[18px] md:mb-[10px] text-[14px] text-[#666666] font-poppins font-normal ">Low fare tips</p>
                            </div>

                        </div>
                      </div>
                        <hr />
                        <div className=" flex items-center justify-between md:mt-10 mt-7 ">
                        <p className=" md:text-[18px] md:mb-[10px] text-[10px] text-[#666666] font-poppins font-normal ">Copyright, eCommerce 2024. All rights reserved.</p>
                        <p className=" md:text-[18px] md:mb-[10px] text-[10px] text-[#666666] font-poppins font-normal ">Terms & Conditions</p>

                        </div>

 
            </div>

        </div>
    </div>
    </>
  )
}

export default Footer
