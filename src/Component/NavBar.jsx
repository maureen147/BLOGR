import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-transparent">
  <div className="container">
    <a className="navbar-brand" href="#">Blogr</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Company</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/detail">Contact</NavLink>
        </li>
        
      </ul>
      <form action="">
        <button className='border-0 m-3'>login</button>
        <button className='border-1 rounded '>sign up</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar