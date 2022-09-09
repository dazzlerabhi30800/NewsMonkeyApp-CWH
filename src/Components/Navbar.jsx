import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='bg-slate-900 p-4 text-white flex flex-col md:flex-row justify-between md:justify-around items-center'>
                <div className="logo p-2 flex justify-center items-center gap-2 font-bold text-3xl ease-in duration-300 hover:text-pink-600 cursor-pointer">
                    <h1>NewsMonkey</h1>
                </div>
                <ul className="nav--links flex flex-col md:flex-row justify-between gap-3 my-4 self-start md:gap-10">
                    <li><a className='cursor-pointer transition ease-in 300 hover:text-indigo-400 font-semibold' href="/">Home</a></li>
                    <li><a className='cursor-pointer transition ease-in 300 hover:text-red-400 font-semibold' href="/">Entertainment</a></li>
                    <li><a className='cursor-pointer transition ease-in 300 hover:text-yellow-400 font-semibold' href="/">Science</a></li>
                    <li><a className='cursor-pointer transition ease-in 300 hover:text-teal-400 font-semibold' href="/">Sports</a></li>
                </ul>
            </nav>
        )

    }
}
