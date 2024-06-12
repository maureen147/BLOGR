import React from 'react'
import img1 from '../assets/images/illustration-laptop-mobile.svg'
import NavBar from '../Component/NavBar'

const Detail = () => {
  return (
    <>
    <NavBar/>
      <div className="step4">
        <div className="first">
          <img src={img1} alt="" />
        </div>
        <div className="second">
          <h4>free,open,simple</h4>
          <p>blogr is a free and open source application backed by a large community of helpful developer.it support futures such as code syntax highlighting.RSS feeds.social media interogation,third party commenting tools and work seemlessly with google analytics.the architecture is clean and is relatively easy to learn</p>
          <h4>powerful tooling</h4>
          <p>battaries included.we built and straight forward CLI tool that makes customization and development a breeze.but capable of producing even the most complicated sites</p>
        </div>
      </div>

    </>
  )
}

export default Detail