import React from "react";
import medisImg from "../../assets/medis.svg";
import { Link } from "react-router-dom";

const Sekilas = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto px-6 py-16">
      {/* Pict */}
      <div className="relative w-full md:w-1/2">
        <img
          src={medisImg}
          alt="Dokter Medisphere"
          className="rounded-xl"
        />
      </div>

      {/* Desc Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-black mb-6">
          Sekilas Tentang Medisphere
        </h2>
        <p className="text-black leading-relaxed mb-6">
          Medisphere berdiri pada tahun 2015 dengan komitmen menghadirkan solusi kesehatan yang inovatif, aman, dan berkelanjutan. Sejak awal, perusahaan berfokus pada riset dan pengembangan obat modern berbasis ilmiah untuk menjawab tantangan kesehatan global.
        </p>
        <Link
          to="/profil"
          className="inline-block bg-blue-500 text-blue-50 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Selengkapnya
        </Link>
      </div>
    </section>
  );
};

export default Sekilas;