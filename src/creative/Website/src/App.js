import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Course from './components/Course'
import Aboutus from './components/Aboutus'
import Testimonial from './components/Testimonial'
import Card from './components/Card'
import Placement from './components/Placement'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


import Development from './components/Development'

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Course />
      <Aboutus />
      <Testimonial />
      <Card />
      <Placement />
      {/* <Routes>
        <Route path="/development" element={<Development />} />
      </Routes> */}
      <Footer />
   
    </div>
  )
}

export default App
