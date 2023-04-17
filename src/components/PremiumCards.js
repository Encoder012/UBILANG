import React, { useState } from 'react'
import styles from '../Music.css'
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

export default function Cards() {
    const [isPlaying, setIsPlaying] = useState(false);

    function handleButtonClick() {
        setIsPlaying(!isPlaying);
    }
    return (
        <div>
            <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">

                    <div className="border-2 border-gray-200 px-4 rounded-lg" id='cards'>
                        <h1 className='text-black text-center pb-3'>Chloe Carter</h1>
                        <img className='cardImage' id='cardImage' src='chloeCarter.png' />


                        <h2 className="title-font text-gray-400" id='title'>35 Years
                            <div className="leading-relaxed text-black ">Australia</div>
                        </h2>
                        <button className="flex text-2xl bg- border-0 focus:outline-none  rounded-full" id='playButton' onClick={handleButtonClick}>

                            {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}

                        </button>
                        <button className="flex text-2xl bg- border-0 focus:outline-none  rounded-full" id='download'>

                            <MdDone />

                        </button>
                        <div className='premium' id='premium'>Premium</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
