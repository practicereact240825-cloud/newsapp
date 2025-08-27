import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 38,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=029c82a6864640fa85c3e517520ee25e&page=" +
      this.state.page;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=029c82a6864640fa85c3e517520ee25e&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
    });
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    if ((this.state.page + 1) > Math.ceil(this.state.totalResults / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=029c82a6864640fa85c3e517520ee25e&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData + "in Next");
      this.setState({
        articles: parsedData.articles,
      });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="my-3">NewsApp - Top Headlines</h1>

        <div className="row my-2">
          {this.state.articles.map((element) => {
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
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
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
          disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / 18)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
