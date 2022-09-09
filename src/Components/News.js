import React, { Component } from 'react';
import NewsItem from './NewsItem';
import articles from './sampleOutput.json';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            loading: true,
            articlesData: [],
            page: 1,
        }
    }
    async componentDidMount() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e1bd06f25544f399975122857782f19&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articlesData: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    handlePrevClick = async () => {
        console.log("previous button Clicked!")
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articlesData: parsedData.articles,
            loading: false,
        });
    }
    handleNextClick = async () => {
        console.log("Next button Clicked!")
        this.setState({ loading: true })
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
            return; // stop the function from running
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articlesData: parsedData.articles,
                loading: false,
            })
        }
    }
    render() {
        console.log('render')
        // const newsComp = this.state.articlesData.map((article, index) => {
        //     return (
        //         <NewsItem
        //             item={article}
        //             key={index}
        //         />
        //     )
        // })
        return (
            <div className='p-4 flex flex-col min-h-screen'>
                <h1 className='font-bold text-indigo-800 text-3xl text-center'>NewsMonkey - Top Headlines</h1>
                <div className='flex flex-wrap w-full justify-center mx-auto gap-6 p-4 md:gap-10 my-4 min-h-screen items-center'>
                    {this.state.loading ?
                        // <p className='text-3xl text-red-800'>News is Fetching...</p>
                        <Spinner />
                        :
                        (
                            this.state.articlesData.map((article, index) => {
                                return (
                                    <NewsItem
                                        item={article}
                                        key={index}
                                    />
                                )
                            })
                        )
                    }
                </div>
                <div className="button--container w-3/4 mx-auto self-center flex justify-around p-2 px-4">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className='py-2 px-6 disabled:opacity-50 bg-amber-500 shadow-md cursor-pointer transition ease-in duration-300 hover:bg-amber-300 text-white font-bold'>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className='py-2 px-6 bg-lime-500 disabled:opacity-50 shadow-md cursor-pointer transition ease-in duration-300 hover:bg-lime-300 text-white font-bold'>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
