import React from 'react'

function LandingPage() {
    return (
        <div className='bg-gradient-to-r from-[#B51BFFA6] via-[#C140FF8A] to-[#f9e5ff]'>

            <section class="text-gray-600 body-font">

                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div class="lg:flex-grow lg:w-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
                        <h1 class="title-font sm:text-5xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">Automate Your
                        </h1>
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 mx-auto font-semibold text-[#FFFFFF]">Content Dubbing
                        </h1>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">To 120+ Languages
                        </h1>
                    </div>

                    <div class="bg-[#FAD3FB] lg:max-w-lg lg:w-full h-[30rem] md:w-1/2 w-5/6 my-auto rounded-3xl">
                        <div className='w-[80%] h-[25rem] bg-[#F87CFF] rounded-full my-10 mx-auto'>
                            <img class="  object-center " alt="hero" src="landing1.png" />
                        </div>
                    </div>
                </div>


                <div class="container mx-auto flex py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex lg:w-fit md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify mx-auto">
                        <h1 class="title-font sm:text-5xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">Generate
                        </h1>
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 mx-auto font-semibold text-[#FFFFFF]">Videos
                        </h1>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">in seconds...
                        </h1>
                    </div>
                    <div className='w-[20%] mx-auto'>
                        <img class="  object-center " alt="hero" src="landing2.png" />
                    </div>
                    <div class="lg:flex lg:w-fit md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify mx-auto">
                        <h1 class="title-font sm:text-5xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">Create
                        </h1>
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 mx-auto font-semibold text-[#FFFFFF]">Audios
                        </h1>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">in a Snap!
                        </h1>
                    </div>
                </div>

                <section class="text-gray-600 body-font py-10">
                    <div class="container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">

                        <div class="bg-[#FAD3FB] lg:max-w-lg lg:w-full h-[30rem] md:w-1/2 w-5/6 my-auto rounded-3xl">
                            <div className='w-[80%] h-[25rem] bg-[#F87CFF] rounded-full my-10 mx-auto'>
                                <img class="  object-center " alt="hero" src="landing3.png" />
                            </div>
                        </div>

                        <div class="lg:flex lg:w-[55%] md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
                            <h1 class="title-font sm:text-5xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">Unlock Global Reach!
                                <h1 className='text-[#7A7A7A]'>Localize Your Content </h1> Across Multiple Languages.
                            </h1>

                        </div>
                    </div>
                    <button class="flex mx-auto text-black font-semibold bg-[#D301A8] border-0 py-2 px-8 focus:outline-none hover:bg-[#F87CFF] rounded-xl text-lg">Get Started</button>
                </section>
            </section>
        </div>
    )
}

export default LandingPage
