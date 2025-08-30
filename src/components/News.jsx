import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 6,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 38,
      pageSize: 9,
      progress: 0
    };
    document.title = `NewsApp - ${this.props.category
      .charAt(0)
      .toUpperCase()}${this.props.category.slice(
      1
    )} - Latest Breaking News, Live Updates, Trending Stories & Headlines 2025 | Global & Local News Coverage`;
  }
  apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
setProgress = (set) => 
{
  this.setState({ progress: set})
}
  fetchNews = async (page) => {
    this.setProgress(25);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.apiKey}&category=${this.props.category}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.setProgress(70)
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page + 1,
      hasMore: true,
    })
    this.setProgress(100);
    console.log(parsedData);
  };
  async componentDidMount() {
    this.fetchNews(this.state.page);
  }
  // handlePreviousClick = async () => {
  //   if (this.state.page - 1 >= 1) {
  //     this.fetchNews(this.state.page - 1);
  //   } else {
  //   }
  // };
  // handleNextClick = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pageSize)
  //     )
  //   ) {
  //     this.fetchNews(this.state.page + 1);
  //   } else {
  //   }
  // };
  fetchMoreData = async () => {
    if (this.state.loading) return; // avoid double fetch

    this.setState({
      loading: true,
    });
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    const data = await res.json();

    this.setState({
      articles: [...this.state.articles, ...data.articles],
      page: this.state.page + 1,
    });

    // If API returns fewer items than requested → no more data
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({ hasMore: false });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <>
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <h1 className="my-3 text-center">
          News<span style={{ color: "red" }}>App</span> - Top Headlines on{" "}
          {this.props.category.charAt(0).toUpperCase()}
          {this.props.category.slice(1)}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row my-2">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      url={element.url}
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="
                      }
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {this.state.loading && <Spinner />} */}
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <h3>{this.state.page}</h3>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
export default News;
