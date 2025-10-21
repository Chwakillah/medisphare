import React from 'react'
import Sekilas from './components/pages/Sekilas'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HeroSection from './components/pages/HeroSection'
import ProdukKami from './components/pages/ProdukKami'
import Berita from './components/pages/BeritaSection'
import ScrollTop from './utils/ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Sekilas/>
      <ProdukKami/>
      <Berita/>
      <Footer/>
    </div>
  )
}

export default App
