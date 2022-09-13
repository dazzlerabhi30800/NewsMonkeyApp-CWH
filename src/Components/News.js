import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import articles from './sampleOutput.json';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {
    const [loading, setLoading] = useState(true)
    const [articlesData, setArticlesData] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const captilizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async (pageNo) => {
        props.setProgress(10);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}&category=${props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticlesData(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews(page);
        document.title = `NewsMonkey - ${captilizeFirstLetter(props.category)}`;
    }, [])



    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticlesData(articlesData.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <div className='p-4 flex flex-col min-h-screen'>
            <h1 className='font-bold text-indigo-800 text-3xl text-center'>NewsMonkey - Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articlesData.length}
                next={fetchMoreData}
                hasMore={articlesData.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='flex flex-wrap w-full justify-center mx-auto gap-6 p-4 md:gap-10 my-4 min-h-screen items-center'>
                    {articlesData.map((article, index) => {
                        return (
                            <NewsItem
                                item={article}
                                key={index}
                            />
                        )
                    })}

                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
