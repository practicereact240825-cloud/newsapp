import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img src="https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </>
    )
  }
}

export default NewsItem
