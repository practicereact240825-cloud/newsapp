import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, source } =
      this.props;
    return (
      <>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Author: {author ? author : "Unknown"}
                <br />
                Published:{" "}
                {publishedAt ? new Date(publishedAt).toUTCString() : "Unknown"}
              </small>
              <span
                className="position-absolute translate-middle badge rounded-pill bg-danger"
                style={{
                  left: "50%",
                  top: "2%",
                }}
              >
                {source.name}
              </span>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
