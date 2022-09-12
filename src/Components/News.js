import React, { Component } from 'react';
import NewsItem from './NewsItem';
import articles from './sampleOutput.json';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    captilizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            articlesData: [],
            page: 1,
        }
        document.title = `NewsMonkey - ${this.captilizeFirstLetter(this.props.category)}`;
    }

    async updateNews(pageNo) {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e1bd06f25544f399975122857782f19&page=${pageNo}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articlesData: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews(this.state.page);
    }
    // handlePrevClick = async () => {
    //     console.log("previous button Clicked!")
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews(this.state.page - 1);
    // }
    // handleNextClick = async () => {
    //     console.log("Next button Clicked!")
    //     this.setState({ loading: true })
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //         return; // stop the function from running
    //     }
    //     else {
    //         this.setState({ page: this.state.page + 1 })
    //         this.updateNews(this.state.page + 1);
    //     }
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articlesData: this.state.articlesData.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    };
    render() {

        return (
            <div className='p-4 flex flex-col min-h-screen'>
                <h1 className='font-bold text-indigo-800 text-3xl text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articlesData.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articlesData.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='flex flex-wrap w-full justify-center mx-auto gap-6 p-4 md:gap-10 my-4 min-h-screen items-center'>
                        {this.state.articlesData.map((article, index) => {
                            return (
                                <NewsItem
                                    item={article}
                                    key={index}
                                />
                            )
                        })}
                        {/* {this.state.loading ?
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
                                } */}
                    </div>
                </InfiniteScroll>
                {/* <div className="button--container w-3/4 mx-auto self-center flex justify-around p-2 px-4">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className='py-2 px-6 disabled:opacity-50 bg-amber-500 shadow-md cursor-pointer transition ease-in duration-300 hover:bg-amber-300 text-white font-bold'>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className='py-2 px-6 bg-lime-500 disabled:opacity-50 shadow-md cursor-pointer transition ease-in duration-300 hover:bg-lime-300 text-white font-bold'>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
