import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};
  // 029c82a6864640fa85c3e517520ee25e
  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>
        This is a News Component.
        <div className="row my-2">
          <div className="col-md-3">
            <NewsItem title="TTITLEEEEEEEE" description="DECRIPTIONNNNNN" />
          </div>
          <div className="col-md-4">
            <NewsItem title="TTITLEEEEEEEE" description="DECRIPTIONNNNNN" />
          </div>
          <div className="col-md-4">
            <NewsItem title="TTITLEEEEEEEE" description="DECRIPTIONNNNNN" />
          </div>
          <div className="col-md-4">
            <NewsItem title="TTITLEEEEEEEE" description="DECRIPTIONNNNNN" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
