import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='bg-slate-900 p-4 text-white flex justify-between md:justify-around items-center'>
                <div className="logo p-2 flex justify-center items-center gap-2 font-bold text-2xl ease-in duration-300 hover:text-pink-600 cursor-pointer">
                    <h1>NewsMonkey</h1>
                </div>
                <div className="link--wrapper flex justify-end md:justify-around items-center gap-4 p-1 w-3/4">
                    <ul className="nav--links hidden justify-between gap-6 md:flex">
                        <li><a className='cursor-pointer transition ease-in 300 hover:text-gray-500 font-medium' href="/">Home</a></li>
                        <li><a className='cursor-pointer transition ease-in 300 hover:text-gray-500 font-medium' href="/">About</a></li>
                        <li><a className='cursor-pointer transition ease-in 300 hover:text-gray-500 font-medium' href="/">Projects</a></li>
                        <li><a className='cursor-pointer transition ease-in 300 hover:text-gray-500 font-medium' href="/">Contact Us</a></li>
                    </ul>
                    <div className="button--wrapper flex justify-between items-center gap-6">
                        <button className='border-2 border-transparent bg-pink-500 font-bold py-1 px-6 rounded-md transition ease-in duration-300 hover:border-pink-500 hover:bg-transparent'>Login</button>
                        <button className='border-2 border-transparent bg-indigo-500 font-bold py-1 px-6 rounded-md transition ease-in duration-300 hover:border-indigo-500 hover:bg-transparent'>SignUp</button>
                    </div>
                </div>
            </nav>
        )

    }
}
