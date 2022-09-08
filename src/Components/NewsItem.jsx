import React, { Component } from 'react';

export default class NewsItem extends Component {

    render() {
        let { item } = this.props;
        const title = item.title.substring(0, 45);
        const description = item.description;
        const newDescription = description.substring(0, 88);
        return (
            <div className='flex flex-col h-auto w-96 gap-2 bg-indigo-200 shadow-md rounded-md'>
                <img src={item.urlToImage} alt="..." className='h-fit rounded w-full rounded-t-md' />
                <div className="flex flex-col gap-2 p-2 px-3 pb-3">
                    <h1 className='text-xl font-bold mt-auto w-full'>{title}...</h1>
                    <p className='text-sm w-full'>{newDescription}...</p>
                    <a className='border-2 py-1.5 px-4 w-fit text-white transition ease-in duration-300 cursor-pointer font-semibold hover:border-transparent hover:bg-white hover:text-indigo-400 mt-1' href={item.url}>Read More</a>
                </div>
            </div>
        )
    }
}