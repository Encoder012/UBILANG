import React from 'react'
// import { Carousel } from "@material-tailwind/react";
// import Slider from 'react-slick';
import { videos } from '../content/UbilangVideos'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { GrLinkNext } from 'react-icons/gr ';
// import { MdArrowBack } from 'react-icons/md ';

function Carousel() {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= [650];
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += [650];
    }

    return (
        <div className='pb-5'>
            <div className="relative">
                {/* <div className="text-center py-4 text-white text-xl font-bold">Exercises</div> */}
                <div className='flex text-xl'>
                    <div className='m-auto'>
                        <button onClick={scrollLeft} className="p-2 m-2 right-0 h-9 rounded-full bg-white">
                            <FiChevronLeft />
                        </button>
                    </div>


                    <div id="content" className="w-[50vw] carousel my-10 mx-auto flex items-center justify-start overflow-x-auto scroll-smooth">

                        {videos.map((videos) =>

                            <div key={videos.id} className='w-[100vw]'>
                                <h2 className='text-lg'>
                                    {videos.title}
                                </h2>
                                <div className='w-[50vw]'>

                                    <iframe className='lg:w-full w-fit h-[50vh]' src={videos.vidUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>

                        )}
                    </div>





                    <div className='m-auto'>
                        <button onClick={scrollRight} className="p-2 m-2 h-9 rounded-full bg-white">
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
