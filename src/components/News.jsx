import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        This is a News Component.
        <NewsItem />
      </div>
    )
  }
}

export default News
