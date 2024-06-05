import React from 'react'
import Hero from '../Component/Hero'
import firstimg from '../assets/images/first img.svg'


const Home = () => {
  return (
    <>
    <Hero/>
    <h1>Designed for the future</h1>
  <div className="general">
    <div className="div2 ">
  <h5>introducing an extensible editor</h5>
  <p>blogr features an exceeding intuitive interface which let you forcus on one thing:creating content.the editot supports managment of multiply blogs and allow easy manipulation of embeds such as images,videos,and markdown extensibility with plugin and themes provide easy ways to add functunality or change the look of blogs</p>
  <h5>Rebust content managment</h5>
  <p>flexible content management enble users to easily move through posts.increase the usability of you blog by adding customized categories,section,format,or flow,with this functunality,,you're in full control  </p>
  </div>
  <div className="div3">
  <img src={firstimg} alt="First"/>
  </div>
  </div>
    </>
  )
}

export default Home