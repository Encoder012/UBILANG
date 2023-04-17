import React from 'react'
import styles from '../Music.css'
import { AiFillCaretDown } from 'react-icons/ai';
import { FaRegPlayCircle } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import EliteCards from './EliteCards';
import PremiumCards from './PremiumCards';

export default function Music() {
    return (
        <div>
            <div className='' id='container'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex mb-10 title-font text-gray-900" id='chooseVoice'>
                            <h1 className="font-extrabold m-auto">
                                Choose a Voice:
                            </h1>
                            <p className='m-auto'>&nbsp;Pick from over 10 voices available</p>
                            <button className="flex m-auto ml-auto text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-full" id='origin'>Origin
                                <div className='m-auto'>
                                    <AiFillCaretDown />
                                </div>
                            </button>
                        </div>



                        {/* cards */}

                        {/* <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">

                                <div className="border-2 border-gray-200 px-4 rounded-lg" id='cards'>
                                    <h1 className='text-black text-center pb-3'>Chloe Carter</h1>
                                    <img className='cardImage' id='cardImage' src='chloeCarter.png' />

                                    
                                    <h2 className="title-font text-gray-400" id='title'>35 Years
                                        <div className="leading-relaxed text-black ">Australia</div>
                                    </h2>
                                    <button className="flex text-2xl bg- border-0 py-3  focus:outline-none  rounded-full" id='playButton'>
                                 
                                            <FaRegPlayCircle />
                                   
                                    </button>
                                    <button className="flex text-2xl bg- border-0 py-3  focus:outline-none  rounded-full" id='download'>
                                 
                                            <MdDone />
                                   
                                    </button>
                                    <div className='elite' id='elite'>Elite</div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg" id='cards'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                        </div> */}
                        <div className='flex' id='cardss'>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <EliteCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <EliteCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <EliteCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <EliteCards />
                            </div>
                        </div>
                        <div className='flex' id='cardss'>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <PremiumCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <PremiumCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <PremiumCards />
                            </div>
                            <div className='p-4 md:w-1/4 sm:w-1/2 w-full' id='cardss'>
                                <PremiumCards />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
