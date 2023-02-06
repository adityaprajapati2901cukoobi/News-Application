import React, { Component } from 'react'
import NewsDisplay from './NewsDisplay'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    articles = [];
    static defaultProps = {
        country: "in",
        category: "business"
    }
    constructor(props) {
        super(props);
        console.log("I am Constructor");
        this.state = {
            articles: this.articles,
            load: true,
            page: 1
        }
    }
    async update() {

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ load: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            load: false,
            totalResults: parsedData.totalResults
        });
    }
    //React Lifecycle
    async componentDidMount() {
        this.props.setProgress(0)
        this.update();
        this.props.setProgress(100)
    }

    // //Arrow functions
    // handleNext = () => {
    //     this.setState({ load: true })
    //     this.update();
    //     this.setState({
    //         page: this.state.page + 1,
    //         load: false
    //     })
    // }
    // handlePrev = () => {
    //     this.setState({ load: true })
    //     this.update();
    //     this.setState({
    //         page: this.state.page - 1,
    //         load: false
    //     })
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=094a77e266ba4a2d81708f2263d3185d&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ load: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            load: false,
            totalResults: parsedData.totalResults
        });
    }

    render() {
        return (
            <>

                {/* {this.state.load && <Loader />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.load && <Loader />}>
                    <div className="container">
                        <div className="row" >
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.id}>
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
}

export default News