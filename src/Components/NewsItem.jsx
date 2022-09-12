import React, { Component } from 'react';

export default class NewsItem extends Component {

    render() {
        let { item } = this.props;
        // const title = item.title.substring(0, 45);
        // const description = item.description;
        // const newDescription = description.substring(0, 88);
        return (
            <div className='flex flex-col relative h-auto w-96 gap-2 bg-indigo-300 shadow-md rounded-md'>
                <img src={item.urlToImage ? item.urlToImage : 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'} alt="..." className='h-66 rounded w-full rounded-t-md' />
                <div className="flex flex-col gap-2 p-2 px-3 pb-3">
                    <h1 className='text-xl font-bold mt-auto w-full'>{item.title ? item.title : ''}</h1>
                    <p className='text-sm w-full'>{item.description ? item.description : ''}</p>
                    <p className='my-2'>By <span className='text-white font-bold underline decoration-white'>- {item.author ? item.author : 'Unknown'}</span> On {new Date(item.publishedAt).toGMTString()}</p>
                    <a target="_blank" rel='norefferer' className='border-2 border-white py-1.5 px-4 w-fit text-white transition ease-in duration-300 cursor-pointer font-semibold hover:border-transparent hover:bg-white hover:text-indigo-400 mt-1' href={item.url}>Read More</a>
                </div>
                <span className='absolute -top-3 right-0 md:-right-3 text-white bg-orange-500 p-2 py-1 font-medium rounded-2xl text-sm'>{item.source.name}</span>
            </div>
        )
    }
}