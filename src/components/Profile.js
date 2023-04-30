import React from 'react'
import { MdCameraEnhance } from 'react-icons/md';

function Profile() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-col" id='card'>
      <div className="lg:w-4/6 mx-auto" id=''>
        <div className="flex flex-col sm:flex-row mt-10  " id='profilecard'>
          <div className="sm:w-1/3 text-center sm: sm:py-8">
            {/* <div> */}
              <div className="w-28 h-20 mt-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img className='rounded-full' src='chloeCarter.png' alt='user'/>

              </div>

              <div className='profileChange text-3xl -mt-3'>
                <button className='hover:text-black'>
                  <MdCameraEnhance className='hover:text-black' id='profileChange' />
                </button>
                <h2 className="font-medium title-font mb-3 text-gray-800 text-base">Chloe Carter</h2>
                <hr />
              </div>

            {/* </div> */}

            <h2 className='font-semibold text-2xl mt-5 text-gray-900'>Subscription</h2>
            <div className="rounded-lg h-44 w-60 m-auto mt-5 overflow-hidden bg-white">
              <div alt="content" className="object-cover text-center justify-center mt-3 object-center flex">
                <h2 className='text-3xl font-bold'>Free</h2>
                <p className='mt-2 text-xl'>&nbsp; Trial Plan</p>
              </div>

              <div className='flex mt-3'>
                <h2 className='text-xl justify-start text-left font-bold m-auto'>Credit Left</h2>
                <div className='text-xl font-bold m-auto w-12 h-8 rounded-xl bg-green-300'>10</div>
              </div>
              <div className='text-xs justify-start -ml-20'>1 Credit = 1 Minute</div>


              <div className='text-xl font-bold m-auto mt-5 w-28 h-8 rounded-full bg-orange-400'>
                <a href='https://www.google.com/' className='object-cover' >Upgrade</a>
              </div>

            </div>
          </div>

          <div className="sm:w-2/3 sm:pl-8 sm:py-2 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h2 className='font-bold text-2xl text-gray-900'>My Account Settings</h2>
            <h2 className='font-base text-2xl mt-3 font-semibold text-gray-900'>Profile</h2>
            <section className="text-gray-600 body-font relative">
              <div className="container">
                <div className="flex flex-col w-full px-3 mb-5 mt-5">

                  <p className="lg:w-2/3 leading-relaxed text-sm">Change Your Name</p>
                </div>
                <div className="">
                  <div className="flex flex-wrap -m-2">
                    <div className="px-5 w-1/2">
                      <div className="relative">
                        <label for="name" className="leading-7 text-base font-semibold text-gray-900">First Name</label>
                        <input type="text" id="firstname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder='User First Name' />

                      </div>
                    </div>
                    <div className="px-5 w-1/2">
                      <div className="relative">
                        <label for="name" className="leading-7 text-base font-semibold text-gray-900">Last Name</label>
                        <input type="text" id="lastname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder='User Last Name' />

                      </div>
                    </div>

                    <div className="px-5 mt-2  w-full">
                      <button className="flex text-black py-2 px-8 focus:outline-none hover:bg-indigo-100 rounded-full border-2 border-indigo-500 hover:border-x-8 hover:border-x-indigo-900 hover:border-y-indigo-900  text-sm">Save</button>
                    </div>


                    <div className="flex flex-col w-full px-5 -mb-2 mt-5">
                      <p className="lg:w-2/3 leading-relaxed text-base text-black font-semibold">Change Your Email</p>
                    

                    <div className="flex w-full px- mt- ">
                      <div className="relative w-1/2 pr-5 ">
                        {/* <label for="email" className="leading-7 text-base font-semibold text-gray-900">Email Address</label> */}
                        <input type="email" id="email" name="email"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder='User Email'
                        />
                      {/* </div> */}
                      </div>
                    {/* </div> */}
                    <div className="px-5 mt-auto w-fit">
                      <button className="flex text-black py-2 px-8 focus:outline-none hover:bg-indigo-100 rounded-full border-2 border-indigo-500 hover:border-x-8 hover:border-x-indigo-900 hover:border-y-indigo-900  text-sm">Save</button>
                    </div>
                    </div>
                    </div>

                    <div className="flex flex-col w-full px-5 mb-2 mt-5">
                      <p className="lg:w-2/3 leading-relaxed text-sm">Change Your Password</p>
                    </div>
                    <div className="px-5 w-1/2">
                      <label for="email" className="leading-7 text-base font-semibold text-gray-900">Old Password</label>
                      <div className="relative">
                        <input type="text" id="lastname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder='********' />

                      </div>
                    </div>
                    <div className="px-5 w-1/2">
                      <div className="relative">
                        <label for="email" className="leading-7 text-base font-semibold text-gray-900">New Password</label>
                        <input type="text" id="lastname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder='********' />
                      </div>
                    </div>

                    <div className="px-5 mt-2  w-full">
                      <button className="flex text-black py-2 px-8 focus:outline-none hover:bg-indigo-100 rounded-full border-2 border-indigo-500 hover:border-x-8 hover:border-x-indigo-900 hover:border-y-indigo-900  text-sm">Save</button>
                    </div>

                    <div className="p-2 w-full pt- mt-4 border-t text-gray-900 font-semibold text-center">
                      {/* <a className="text-indigo-500">example@email.com</a> */}
                      <p className="leading-normal my-2 ">Need More Help?
                      </p>
                      <div className="justify-center my-2  w-full">
                        <button className="flex m-auto text-black py-2 px-8 focus:outline-none hover:bg-indigo-100 rounded-full border-2 border-indigo-500 text-sm">Contact Us</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
