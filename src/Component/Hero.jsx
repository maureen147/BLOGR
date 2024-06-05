import React from 'react'
import bg from "../assets/images/bg-pattern-intro-desktop.svg"
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='hero text-light'  style={{backgroundImage: `url("${bg}")`, backgroundSize: "cover", backgroundPositionY: "center", backgroundPositionX: "200px", backgroundRepeat: "no-repeat"}}>
      <div className="container px-4">
      <NavBar/>
      </div>
        <h1>A Modern Publishing Platform</h1>
        <p>grow your audience and build your online brand</p>
        <button className='mt-4 border-0 m-3 rounded'>Start for free</button>
        <button className='mt-4  border-0'>Learn More</button>
        
    </div>
  )
}

export default Hero