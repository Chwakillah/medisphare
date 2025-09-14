import React from "react";
import dokterImg from "../../assets/medis.svg";
import briefcaseIcon from "../../assets/icon-briefcase.svg";
import userIcon from "../../assets/icon-user.svg";

const Sekilas = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6 py-16">
      {/* Left - Gambar */}
      <div className="relative w-full md:w-1/2">
        <img
          src={dokterImg}
          alt="Dokter Medisphere"
          className="rounded-xl shadow-lg"
        />
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
  );
};

export default Sekilas;