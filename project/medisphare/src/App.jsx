import React from 'react'
import Sekilas from './components/pages/Sekilas'
import Navbar from './components/layouts/Navbar'
import HeroSection from './components/pages/HeroSection'
import ProdukKami from './components/pages/ProdukKami'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Sekilas/>
      <ProdukKami/>
    </div>
  )
}

export default App
