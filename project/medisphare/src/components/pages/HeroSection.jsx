import React from 'react'
import hero1 from '../../assets/hero1.png'
import obat from '../../assets/obat2.svg'

const HeroSection = () => {
  return (
    <header
      className="w-full min-h-screen px-8 py-20 md:px-20 md:py-24 justify-center items-center bg-cover bg-center bg-fixed overflow-hidden relative"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <img
            src={obat}
            alt="vektor"
            className="absolute top-12 sm:top-44 md:top-56 left-1/5 sm:left-1/4 md:left-1/5 size-3/4 sm:size-3/6 md:size-3/5"
          />
      <h1 className="font-montserrat text-blue2-900 text-5xl sm:text-7xl md:text-9xl font-bold justify-center items-center text-center">MEDISPHERE</h1>
      <div className='font-montserrat text-blue2-50 mr-16 sm:mr-60 mt-96 sm:mt-[420px] md:mt-86 md:mr-[900px]'>
        <h2 className='font-semibold text-lg md:text-xl pb-2 md:pb-4'>AMAN DAN TERPERCAYA</h2>
        <h3 className='font-normal text-base md:text-lg'>Menyediakan berbagai macam produk kesehatan dan obat-obatan yang lengkap dan terjamin keasliannya.</h3>
      </div>
    </header>
  )
}

export default HeroSection
