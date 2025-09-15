import React from 'react'
import Sekilas from './components/pages/Sekilas'
import Navbar from './components/layouts/Navbar'
import HeroSection from './components/pages/HeroSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Sekilas/>
    </div>
  )
}

export default App
