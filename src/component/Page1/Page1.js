import React from 'react'
import uzbekistan from '../Vedio bg/uzbekistan.mp4'
import './Page1.css'

const Main = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video className='main1' src={uzbekistan} autoPlay loop muted/>
      <div className="content">
        <h1>O'zbegim Travelga Xush Kelibsiz </h1>
        <p>O'zbekistonning istalgan hududida biz bilan birga sayohat qiling</p>
      </div>
    </div>
  )
}

export default Main