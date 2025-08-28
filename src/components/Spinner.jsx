import React, { Component } from 'react'
import loading from '../LoadingSpinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading..." style={{width: "75px"}} />
      </div>
    )
  }
}

export default Spinner
