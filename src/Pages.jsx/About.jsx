import React from 'react'
import Phones from '../assets/images/phones.svg'
import NavBar from '../Component/NavBar'

const About = () => {
  return (
    <>
      <NavBar />
      <div className='about'>
        <div className="phone">
          <img src={Phones} alt='' className='' />
        </div>
        <div className='write'>
          <h1>state of the Art infrustrature</h1>
          <p>with reliability and speed in mind,world wide space centers provide the  backbone of ultra-fast connectivity.this ensure that your site will load instanstly.no matter where your readers are.keep your site save competitive</p>
        </div>
      </div>

    </>

  )
}

export default About

