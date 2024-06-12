
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import NavBar from './Component/NavBar'
import Home from './Pages.jsx/Home'
import About from './Pages.jsx/About'
import Detail from './Pages.jsx/Detail'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'







function App() {
  

  return (
    
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>

  )
}

export default App
