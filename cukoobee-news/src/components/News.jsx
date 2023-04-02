import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsDisplay from './NewsDisplay'
import Loader from './Loader'
//import ProgressBar from 'react-bootstrap/ProgressBar';


export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(0);
    const [load, setLoader] = useState(false);

    const update = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoader(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoader(false)
    };
    useEffect(() => {
        update();
    },[]);

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);

    }
    return (
        <>
            <h1 style={{ marginTop: '45px' }}> </h1>
            <div className="container text-center">
                {load && <Loader />}
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                Loader={<Loader/>}>

                <div className="container">

                    <div className="row" >
                        {articles.map((element,index) => {
                            return <div className="col-md-4" key={index}>
                                <br />
                                <NewsDisplay
                                    title={element.title ? element.title : ""}
                                    desc={element.description ? element.description.slice(0, 100) : ""}
                                    image={element.urlToImage}
                                    more={element.url}
                                    source={element.source.name}
                                    date={element.publishedAt}
                                /><br />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}
