import React, { Component } from 'react';
import NewsItem from './NewsItem';
import articles from './sampleOutput.json';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            articlesData: [],
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9e1bd06f25544f399975122857782f19";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articlesData: parsedData.articles });
    }
    render() {
        console.log('render')
        const newsComp = this.state.articlesData.map((article, index) => {
            return (
                <NewsItem
                    item={article}
                    key={index}
                />
            )
        })
        return (
            <div className='p-4'>
                <h1 className='font-bold text-indigo-800 text-xl text-center'>NewsMonkey - Top Headlines</h1>
                <div className='flex flex-wrap gap-6 my-4 w-full justify-center'>
                    {newsComp}
                </div>
            </div>
        )
    }
}
