import React from 'react'
import './Login.css'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
    <div className='login-istiak'>
      <div className='loginData-istiak'>
        <form >
          <div className='log-content'>
            <div className='mb-8'>
              <h2 className='font-volkhov text-[#B7B7B7] font-bold text-[28px]'>Sign In</h2>
            </div>
            <div>
              <label className="text-gray-400 font-semibold text-md mb-2 block">Email</label>
              {/* <p className='text-[16px] text-red-600 font-semibold'>{error.EmailError}</p> */}
                <input name="password" type="mail" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Email" />
              </div>

          </div>

          <div className='mt-4'>
          <label className="text-gray-400 text-md font-semibold mb-2 block">Password</label>
          {/* <p className='text-[16px] text-red-600 font-semibold'>{error.passwordError}</p> */}
          <input type="text" className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500' placeholder='Enter password' />
          </div>

          <div className="!mt-12">
           
              <button  type='button' className="w-full bg-[#6439FF] hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transition ease-in duration-500 ">
              Login </button>
               {/* <button onClick={handleSubmit} type="button" classNameName="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
               </button> */}

               </div>

               <div>
               <p className="text-gray-500 text-sm mt-6 mb-4 text-center">Don't have an account? <Link to={'/reg'} className="text-[#FF6600] font-semibold hover:underline ml-1">Register</Link></p>
               </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Login
