import React, { Component } from 'react'
import loading from '../LoadingSpinner.gif'
const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading..." style={{width: "75px"}} />
      </div>
    )
}

export default Spinner
