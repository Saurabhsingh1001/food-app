import { useState } from 'react'
import './App.css'
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Testimonial from './components/Testimonial.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div className="App">
        

        {/* <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          </Routes> */}
          <Home/>
          <About/>
          <Work/>
          <Testimonial/>
          <Contact/>

        
      </div>

      <Footer />
    </>
  )
}

export default App
