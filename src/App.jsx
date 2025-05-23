import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Project from './components/Projects'
import Contactus from './components/Contactus'
import OurPlans from './components/OurPlans'
import Footer from './components/Footer'
import ScrollWrapper from './components/ScrollWrapper'

function App() {
  return (
    <>
      <Header />

      <ScrollWrapper>
        <Home />
      </ScrollWrapper>

      <ScrollWrapper>
        <Project />
      </ScrollWrapper>

      <ScrollWrapper>
        <OurPlans />
      </ScrollWrapper>

      <ScrollWrapper>
        <Contactus />
      </ScrollWrapper>

      <Footer />
    </>
  )
}

export default App
