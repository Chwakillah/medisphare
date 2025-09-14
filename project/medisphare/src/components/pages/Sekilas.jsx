import React from "react"

const Sekilas = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6 py-16">
      {/* Left - Gambar */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/assets/dokter.png"
          alt="Dokter Medisphere"
          className="rounded-xl shadow-lg"
        />

        {/* Icon kiri bawah */}
        <div className="absolute -left-6 bottom-6 bg-[#38515F] p-3 rounded-lg">
          <img src="/assets/icon-user.svg" alt="icon user" className="w-8 h-8" />
        </div>

        {/* Icon kanan atas */}
        <div className="absolute -right-6 -top-6 bg-[#F5DABF] p-3 rounded-lg">
          <img src="/assets/icon-briefcase.svg" alt="icon briefcase" className="w-8 h-8" />
        </div>

        {/* Tagline */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-3">
          <span className="bg-[#ADD5EC] text-[#38515F] font-medium px-4 py-1 rounded-full text-sm">
            Kesehatan berkualitas
          </span>
          <span className="bg-[#F5DABF] text-[#404040] font-medium px-4 py-1 rounded-full text-sm">
            Hidup berkualitas
          </span>
        </div>
      </div>

      {/* Right - Teks */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-[#404040] mb-6">
          Sekilas Tentang Medisphere
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae
          pellentesque sem placerat in id cursus mi. Tempus leo eu aenean sed
          diam urna tempor. Nec metus bibendum egestas iaculis massa nisl
          malesuada.
        </p>
        <button className="bg-[#ADD5EC] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7bbbdc] transition">
          Selengkapnya
        </button>
      </div>
    </section>
  )
}

export default Sekilas
