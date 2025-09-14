import React from 'react'
import Sekilas from './components/pages/Sekilas'
import Navbar from './components/layouts/Navbar'
import ProdukKami from './components/pages/ProdukKami'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sekilas/>
      <ProdukKami/>
    </div>
  )
}

export default App
