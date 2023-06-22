import React from 'react'

function Signin() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#B51BFFA6] via-[#C140FF8A] to-[#f9e5ff]">
            <div className="bg-[#F87CFF] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className='flex mx-auto'>
                    <h2 className="w-fit text-2xl justify-start font-bold mb-6">Sign In</h2>
                    {/* <h2 className="w-fit text-base ml-auto font-semibold mb-6">Sign Up</h2> */}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Signin
