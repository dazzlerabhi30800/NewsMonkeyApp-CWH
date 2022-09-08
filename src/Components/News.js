import React, { Component } from 'react';
import NewsItem from './NewsItem';
import articles from './sampleOutput.json';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        }
    }
    render() {
        const newsComp = articles.map((article, index) => {
            return (
                <NewsItem
                    item={article}
                    key={index}
                />
            )
        })
        return (
            <div className='p-4'>
                <h1 className='font-bold text-indigo-800 text-xl text-center md:text-left'>NewsMonkey - Top Headlines</h1>
                <div className='flex flex-wrap gap-6 my-4 w-full justify-center md:justify-start'>
                    {newsComp}
                    {/* <NewsItem title="Hello Title" description="Best in the world description is here" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" /> */}
                    {/* <NewsItem title="Hello Title" description="Best in the world description is here" /> */}
                    {/* <NewsItem title="Hello Title" description="Best in the world description is here" /> */}
                </div>
            </div>
        )
    }
}
