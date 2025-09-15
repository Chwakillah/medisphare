import React from 'react'
import hero1 from '../../assets/hero1.png'
import obat from '../../assets/obat1.png'

const HeroSection = () => {
  return (
    <header
      className="w-full min-h-screen px-8 py-12 sm:py-16 md:px-20 md:py-12 justify-center items-center bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <img
            src={obat}
            alt="vektor"
            className="absolute top-24 lg:top-48 md:left-7 lg:left-8 md:size-6 lg:size-90 size-4 left-2"
          />
      <h1 className="font-montserrat text-blue2-900 text-5xl sm:text-7xl md:text-9xl font-bold justify-center items-center text-center">MEDISPHERE</h1>
      <div className='font-montserrat text-blue2-50 mr-16 sm:mr-60 mt-80 sm:mt-90 md:mt-80 md:mr-[900px]'>
        <h2 className='font-semibold text-lg md:text-xl pb-2 md:pb-4'>AMAN DAN TERPERCAYA</h2>
        <h3 className='font-normal text-base md:text-lg'>Menyediakan berbagai macam produk kesehatan dan obat-obatan yang lengkap dan terjamin keasliannya.</h3>
      </div>
    </header>
  )
}

export default HeroSection
