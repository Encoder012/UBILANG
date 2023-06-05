import React from 'react'
import { RiVoiceprintFill } from 'react-icons/ri';

function VoiceSwap() {
    return (
        <div>
            <section className="text-gray-600 w-[100%] body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex  justify-center">

                        <div className="mx-10 bg-[#D9D9D9] py- xl:w-[10%] xl:h-[30vh] md:w-fit w-full border-2 rounded-3xl hover:bg-[#D641EE] hover:text-white transition-all" id='voiceswapbox'>
                            <div className='bg-white w-24 h-24 mx-auto m-5 rounded-full'>
                                <img className='relative w-16 mx-auto py-[15%] rounded-full' src='Bubble.png' alt='img' />
                                <div className='w-fit relative bottom-[70%] left-[35%] text-3xl text-[#531EA3] rounded-full'>
                                    <RiVoiceprintFill />
                                </div>
                                <div className='relative w-full bottom-5 mx-2 font-semibold text-black'>
                                    Voice Swap
                                </div>


                            </div>

                        </div>
                        <div className="bg-[#E9C7EF] py- xl:w-[45%] xl:h-[80vh] md:w-fit w-full border-2 rounded-3xl">

                            <div className=" w-full xl:h-[80vh] border-gray-100 flex flex-col relative overflow-hidden">

                                <h1 className="text-5xl text-gray-900 leading-none items-center pt-5 pb-4 mb-4 border-b border-gray-900">
                                    <span className='text-[#531EA3] px-5 font-semibold'>VOICE SWAP</span>

                                    <h2 className="text-sm text-gray-700 tracking-widest title-font px-5 mb-1 mt-1 font-light">Upload a video or audio to swap the voice </h2>
                                </h1>
                                <div className='w-full my-auto'>
                                    <div className='w-fit mx-auto mb-[2%] cursor-pointer'>
                                        Drop Files Here
                                    </div>

                                    <div className='w-fit mx-auto mb-[2%]'>
                                        OR
                                    </div>

                                    <button className="flex items-center mt-auto mx-auto text-white bg-[#E578F6] border-0 py-2 px-5 w-fit focus:outline-none hover:bg-[#f151ff] transition-all rounded-full">Select a file
                                    </button>
                                    <div className='w-fit mx-auto mt-[2%]'>
                                        Supports .mp3,.wav, mp4
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VoiceSwap
