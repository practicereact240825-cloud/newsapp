import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(38);
  const [pageSize, setPageSize] = useState(9);
  const [progress, setProgress] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;

  useEffect(() => {
    document.title = `NewsApp - ${props.category
      .charAt(0)
      .toUpperCase()}${props.category.slice(
      1
    )} - Latest Breaking News, Live Updates, Trending Stories & Headlines 2025 | Global & Local News Coverage`;
    fetchNews(page);
  }, []);

  const fetchNews = async (pagePassed) => {
    setProgress(25);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}&category=${props.category}&page=${pagePassed}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(70);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setPage(pagePassed + 1);
    setTotalResults(parsedData.totalResults);
    setProgress(100);
    console.log(parsedData);
  };
  // const handlePreviousClick = async () => {
  //   if (page - 1 >= 1) {
  //     fetchNews(page - 1);
  //   } else {
  //   }
  // };
  // handleNextClick = async () => {
  //   if (
  //     !(
  //       page + 1 >
  //       Math.ceil(totalResults / props.pageSize)
  //     )
  //   ) {
  //     fetchNews(page + 1);
  //   } else {
  //   }
  // };
  const fetchMoreData = async () => {
    if (loading) return; // avoid double fetch

    setLoading(true);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`
    );
    const data = await res.json();
    setArticles([...articles, ...data.articles]);
    setPage(page + 1);

    // If API returns fewer items than requested → no more data
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
      setHasMore(false);
    }
    setLoading(false);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h1 className="my-3 text-center">
        News<span style={{ color: "red" }}>App</span> - Top Headlines on{" "}
        {props.category.charAt(0).toUpperCase()}
        {props.category.slice(1)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row my-2">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    url={element.url}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
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
      {/* loading && <Spinner /> */}
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <h3>{page}</h3>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
News.defaultProps = {
  country: "us",
  category: "general",
  pageSize: 6,
};

export default News;
