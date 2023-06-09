import React, { useState } from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { voices } from '../content/Voices'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function LandingPage() {
    const [isPlaying, setIsPlaying] = useState(false);

    function handleButtonClick() {
        setIsPlaying(!isPlaying);
    }
    return (
        <div className='bg-gradient-to-r from-[#B51BFFA6] via-[#C140FF8A] to-[#f9e5ff]'>
            <div>
                <Navbar />
            </div>

            <section className="text-gray-600 body-font">

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow lg:w-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
                        <h1 className="title-font sm:text-5xl text-3xl lg:mb-4 mb-2 mx-auto font-semibold text-[#620058]">Automate Your
                        </h1>
                        <h1 className="title-font sm:text-6xl text-3xl lg:mb-4 mb-2 mx-auto font-semibold text-[#FFFFFF]">Content Dubbing
                        </h1>
                        <h1 className="title-font sm:text-4xl text-3xl lg:mb-4 mb-2 mx-auto font-semibold text-[#620058]">To 120+ Languages
                        </h1>
                    </div>

                    <div className="bg-[#FAD3FB] lg:max-w-lg lg:w-full lg:h-[30rem] h-auto md:w-1/2 w-full my-auto rounded-3xl">
                        <div className='lg:w-[80%] w-[80%] lg:h-[25rem] bg-[#F87CFF] rounded-full my-10 mx-auto'>
                            <img className="  object-center " alt="hero" src="landing1.png" />
                        </div>
                    </div>
                </div>


                <div className="container mx-auto flex lg:py-24 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex lg:w-fit md:w-1/2 flex flex-col md:items-start md:text-left my-16 md:mb-0 items-center text-justify mx-auto">
                        <h1 className="title-font sm:text-5xl text-3xl mb-2 mx-auto font-semibold text-[#620058]">Generate
                        </h1>
                        <h1 className="title-font sm:text-6xl text-3xl mb-2 mx-auto font-semibold text-[#FFFFFF]">Videos
                        </h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 mx-auto font-semibold text-[#620058]">in seconds...
                        </h1>
                    </div>
                    <div className='lg:w-[20%] w-[50%] mx-auto'>
                        <img className="  object-center " alt="hero" src="landing2.png" />
                    </div>
                    <div className="lg:flex lg:w-fit md:w-1/2 flex flex-col md:items-start md:text-left my-16 md:mb-0 items-center text-justify mx-auto">
                        <h1 className="title-font sm:text-5xl text-3xl mb-2 mx-auto font-semibold text-[#620058]">Create
                        </h1>
                        <h1 className="title-font sm:text-6xl text-3xl mb-2 mx-auto font-semibold text-[#FFFFFF]">Audios
                        </h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 mx-auto font-semibold text-[#620058]">in a Snap!
                        </h1>
                    </div>
                </div>

                <section className="text-gray-600 body-font py-10">
                    <div className="container mx-auto flex px-5 lg:pt-24 pt-5 pb-12 md:flex-row flex-col items-center">

                        <div className="bg-[#FAD3FB] lg:max-w-lg lg:w-full lg:h-[30rem] h-auto md:w-1/2 w-full my-auto mb-14 rounded-3xl">
                            <div className='lg:w-[80%] w-[80%] lg:h-[25rem] bg-[#F87CFF] rounded-full my-10 mx-auto'>
                                <img className="  object-center " alt="hero" src="landing3.png" />
                            </div>
                        </div>

                        <div className="lg:flex lg:w-[55%] md:w-1/2 flex flex-col md:items-start md:text-left mb- md:mb-0 items-center text-center mx-auto">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 mx-auto font-semibold text-[#620058]">Unlock Global Reach!
                                <h1 className='text-[#7A7A7A]'>Localize Your Content </h1> Across Multiple Languages.
                            </h1>

                        </div>
                    </div>
                    <button className="flex mx-auto text-black font-semibold bg-[#D301A8] border-0 py-2 px-8 focus:outline-none hover:bg-[#F87CFF] rounded-xl text-lg">Get Started</button>
                </section>
            </section>



            <div className='w-full mx-auto my-20'>
                <h2 className='w-full mx-auto text-center font- my-20 text-[#4F0047] lg:text-7xl text-3xl'>
                    Ubilang Product Demo
                </h2>
                <div className='w-full mx-auto my-20'>
                    <iframe className='rounded-3xl lg:w-[50%] lg:h-[50vh] mx-auto' src="https://www.youtube.com/embed/vK6MXIWZPns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            <div className='w-full text-center text-2xl my-10'>
                <p className='font-semibold'>Transform Text into Speech: Unleash the Power of&nbsp;
                    <span className='text-[#B51BFFA6]'>
                        Adaptable AI Voices&nbsp;
                    </span>
                    Generation</p>
            </div>

            <div className='w-full my-10'>
                <h2 className='lg:w-[60%] w-[100%] mx-auto text-center lg:text-6xl text-3xl font-semibold'>Authentic Human Voices, Powered by AI</h2>
                <p className='lg:w-[70%] w-[100%] my-10 mx-auto text-center text-base font-semibold'>Effortless Studio-Quality Voice Overs in Seconds: Create Professional Narrations in Minutes. Ubilang: Your AI Voice Partner for Podcasts, Videos, and Professional Presentations</p>

                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow lg:w-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-justify">
                        <h1 className="title-font sm:text-5xl text-3xl mb-2 mx-auto font-semibold text-[#620058]">The perfect voice
                        </h1>
                        <h1 className="title-font sm:text-5xl text-3xl mb-2 mx-auto font-semibold text-[#FFFFFF]"><span className='text-[#620058]'>for&nbsp;</span>every
                        </h1>
                        <h1 className="title-font sm:text-5xl text-3xl mb-2 mx-auto font-semibold text-white">occasion.
                        </h1>
                    </div>

                    <div className="bg-[#FAD3FB] lg:max-w-lg lg:w-full lg:h-[30rem] h-auto md:w-1/2 w-full my-auto rounded-3xl">
                        <div className='lg:w-[80%] w-[80%] lg:h-[25rem] bg-[#F87CFF] rounded-full my-10 mx-auto'>
                            <img className="object-center " alt="hero" src="landing4.png" />
                        </div>
                    </div>
                </div>

                <h2 className='w-full mx-auto text-center lg:text-5xl text-3xl'>
                    Unlock the perfect voice for every creator.
                </h2>
                <p className='w-[70%] my-10 mx-auto text-center text-2xl font-light'> No matter if you're in the creative, corporate, or entertainment industry, Ubilang provides the ideal voice to bring your projects to life.</p>
            </div>


            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:py-10 py-10 mx-auto">
                    <div className="flex flex-wrap">
                        {voices.map((voices) =>
                            <div className="lg:p-10 p-5 lg:w-1/3" key={voices.id}>
                                <div style={{ backgroundColor: voices.bgColor, borderColor: voices.borderColor }} className="h-full lg:mx-10 mx-0 pt-5 rounded-lg overflow-hidden border-2 text-center relative hover:border-[#620058]">
                                    <div className='mx-auto items-center'>
                                        <img className='w-[90%] h-auto mx-auto' src={voices.imgUrl} alt='voice' />
                                    </div>

                                    <div>
                                        <h2 className='mt-5 text-xl text-black font-semibold'>{voices.category}</h2>
                                    </div>
                                    <div className='lg:my-5 my-5 mx-auto'>
                                        <button className="flex text-3xl mx-auto bg- border-0 focus:outline-none  rounded-full" id='playButton' onClick={handleButtonClick}>

                                            {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}

                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <h2 className='w-full mx-auto text-center font- lg:my-20 my-10 text-[#4F0047] lg:text-7xl text-5xl'>
                        Snap of Studio
                    </h2>
                    <div className='w-full h-[50vh] lg:my-20 my-10'>

                        <div className='w-full h-[50vh]'>
                            <div className='lg:flex hidden relative rounded-lg w-full mx-auto my-auto top-[35%] h-[25%] overflow-hidden bg-[#F87CFF]'></div>
                            <div className='lg:absolute lg:flex lg:left-[10%]'>
                                <img className=' w-fit lg:mx-5 lg:-mt-20 my-5' src='ss1.png' alt='snap' />
                                <img className=' w-fit lg:mx-5 lg:-mt-20 my-5' src='ss2.png' alt='snap' />
                            </div>
                        </div>
                    </div>

                    <button className="flex mx-auto text-black font-semibold bg-[#D301A8] border-0 py-2 my-20 px-8 focus:outline-none hover:bg-[#F87CFF] rounded-xl text-lg">
                        Unlock Studio
                    </button>


                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:py-24 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-6xl text-3xl pb-5 text-[#620058]">1000+</h2>
                            <p className="leading-relaxed text-black text-lg font-medium">Minutes Delivered</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-6xl text-3xl pb-5 text-[#620058]">10+</h2>
                            <p className="leading-relaxed text-black text-lg font-medium">Organization Served</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-6xl text-3xl pb-5 text-[#620058]">1</h2>
                            <p className="leading-relaxed text-black text-lg font-medium">Web Series Delivered</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-6xl text-3xl pb-5 text-[#620058]">1M+</h2>
                            <p className="leading-relaxed text-black text-lg font-medium">Words Translated</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='my-20'>
                <h2 className='w-full mx-auto text-center text-5xl'>
                    Discover Videos Created Using Ubilang
                </h2>
                <Carousel />
            </div>

            <div>
                <h2 style={{ background: "linear-gradient(90deg, #4F0047 36.72%, rgba(98, 0, 88, 0) 126.59%)", WebkitBackgroundClip: 'text', WebkitTextFillColor: "transparent" }} className='w-full mx-auto text-center lg:text-7xl text-3xl'>
                    Unleash Your Creativity
                </h2>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap mx-auto -mb-10 text-center">
                            <div className="sm:w-1/2 mb-10 px-4 my-10 ">
                                <div className="relative rounded-lg lg:w-[50%] mx-auto lg:h-[70vh] h-[50vh] overflow-hidden bg-gradient-to-r from-[#B51BFFA6] via-[#C140FF8A] to-[#f9e5ff]">
                                    <div className=' relative rounded-lg w-[25%] mx-auto my-5 justify- items-center h-[55%] overflow-hidden -rotate-45 bg-[#F87CFF]'></div>
                                    <img alt="content" className="absolute object-cover object-center w-[40%] bottom-[55%] left-[30%]" src="landing5.png" />
                                    <h2 className="title-font text-lg font-medium text-black mb-1">Explore our extensive</h2>
                                    <h2 className="title-font text-xl font-medium text-[#4F0047] mb-1">collection of voices</h2>
                                    <p className="leading-relaxed text-base font-light text-black">Discover a diverse range of text to speech voices available in more than 15 languages.</p>
                                </div>
                            </div>

                            <div className="sm:w-1/2 mb-10 px-4 my-10">
                                <div className="relative rounded-lg lg:w-[50%] mx-auto lg:h-[70vh] h-[50vh] overflow-hidden">
                                    <div className=' relative rounded-lg w-[25%] mx-auto my-5 justify- items-center h-[55%] overflow-hidden -rotate-45 bg-[#F87CFF]'></div>
                                    <img alt="content" className="absolute object-cover object-center w-[40%] bottom-[55%] left-[30%]" src="landing6.png" />
                                    <h2 className="title-font text-lg font-medium text-black mb-1">Enhance your creations</h2>
                                    <h2 className="title-font text-xl font-medium text-[#4F0047] mb-1">with full control</h2>
                                    <p className="leading-relaxed text-base font-light text-black">With our voice maker, you can customize the <span className='text-[#4F0047] font-medium'> text, adjust speed and pitch </span>, and seamlessly synchronize it with your creative content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <button className="flex mx-auto text-black font-semibold bg-[#D301A8] border-0 py-2 px-8 focus:outline-none hover:bg-[#F87CFF] rounded-xl text-lg">
                Get Started
            </button>





            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap mx-auto -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4 my-10 ">
                            <div className="relative rounded-lg lg:w-[50%] mx-auto lg:h-[70vh] h-[50vh] overflow-hidden bg-gradient-to-r from-[#B51BFFA6] via-[#C140FF8A] to-[#f9e5ff]">
                                <div className=' relative rounded-lg w-[25%] mx-auto my-5 justify- items-center h-[55%] overflow-hidden -rotate-45 bg-[#F87CFF]'></div>
                                <img alt="content" className="absolute object-cover object-center w-[40%] bottom-[55%] left-[30%]" src="landing8.png" />
                                <h2 className="title-font text-lg font-medium text-black mb-1">Create Transcription</h2>
                                <h2 className="title-font text-xl font-medium text-[#4F0047] mb-1">on the go</h2>
                                <p className="leading-relaxed text-base font-light text-black">Transcribe text, edit and convert into the real human voices professionally in seconds.....</p>
                            </div>
                        </div>

                        <div className="sm:w-1/2 mb-10 px-4 my-10">
                            <div className="relative rounded-lg lg:w-[50%] mx-auto lg:h-[70vh] h-[50vh] overflow-hidden">
                                <div className=' relative rounded-lg w-[25%] mx-auto my-5 justify- items-center h-[55%] overflow-hidden -rotate-45 bg-[#F87CFF]'></div>
                                <img alt="content" className="absolute object-cover object-center w-[40%] bottom-[55%] left-[30%]" src="landing7.png" />
                                <h2 className="title-font text-lg font-medium text-black mb-1">Universities are making</h2>
                                <h2 className="title-font text-xl font-medium text-[#4F0047] mb-1">Multi-lingual content</h2>
                                <p className="leading-relaxed text-base font-light text-black">Harness the power of our platform to effortlessly create multi-lingual course materials across various media formats.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section  >
            <h2 style={{ background: "linear-gradient(90deg, #4F0047 36.72%, rgba(98, 0, 88, 0) 126.59%)", WebkitBackgroundClip: 'text', WebkitTextFillColor: "transparent" }} className='lg:w-[75%] mx-auto my-20 text-center lg:text-5xl text-2xl'>
                Ubilang has been developed and hosted on GCP Cloud, with a focus on high availability and redundancy...
            </h2>


            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-1/2 md:w-2/3 mx-auto flex flex-col text-left w-full mb-12">
                        <h1 class="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    {/* <label for="name" class="leading-7 text-sm text-gray-600">Name</label> */}
                                    <input type="text" id="name" name="name" placeholder='Enter Your Name' class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}
                                    <input type="email" id="email" name="email" placeholder='Enter Your Email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    {/* <label for="email" class="leading-7 text-sm text-gray-600"></label> */}
                                    <input type="phone" id="phone" name="phone" placeholder='Enter Your Mobile Number' class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="p-2 pt-5 w-full">
                                    <button class="flex text-black bg-[#D301A8] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">Submit</button>
                                </div>
                                <div class="p-2 w-full border-gray-200 text-left">
                                    <a class="text-[#620058]">Or Say at hello@ubilang.com</a>
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    {/* <label for="message" class="leading-7 text-sm text-gray-600">Message</label> */}
                                    <textarea id="message" name="message" placeholder='Enter Your Message...' class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Footer />
            </div>
        </div >
    )
}

export default LandingPage
