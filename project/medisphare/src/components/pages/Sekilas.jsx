import React from "react";
import medisImg from "../../assets/medis.svg";

const Sekilas = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto px-6 py-16">
      {/* Pict */}
      <div className="relative w-full md:w-1/2">
        <img
          src={medisImg}
          alt="Dokter Medisphere"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Desc Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-black mb-6">
          Sekilas Tentang Medisphere
        </h2>
        <p className="text-black leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae
          pellentesque sem placerat in id cursus mi. Tempus leo eu aenean sed
          diam urna tempor. Nec metus bibendum egestas iaculis massa nisl
          malesuada.
        </p>
        <button className="bg-blue-500 text-blue-50 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Selengkapnya
        </button>
      </div>
    </section>
  );
};

export default Sekilas;