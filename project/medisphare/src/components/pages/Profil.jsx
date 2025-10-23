import React, { useState } from "react";
import {
  ChevronDown,
  Building2,
  Target,
  Map,
  History,
  Calendar,
} from "lucide-react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import farmasiImg from "../../assets/Sejarah.svg";
import denahImg from "../../assets/denah.svg";

const Profil = () => {
  const [activeTimeline, setActiveTimeline] = useState(null);

  const timelineData = [
    {
      year: "2015",
      title: "Pendirian dan Awal Perjalanan",
      description:
        "Medisphere Pharma resmi didirikan dengan visi menghadirkan solusi medis yang menyeluruh dan inovatif. Fokus awal pada pengembangan produk antibiotik oral generasi baru dengan tablet amoxicillin dan clarithromycin untuk infeksi saluran pernapasan dan kulit.",
      color: "bg-[#85c1e2]",
    },
    {
      year: "2017",
      title: "Pengembangan Produk Fitofarmaka dan Nutraceutical",
      description:
        "Meluncurkan Medisphere Naturix, lini produk berbasis ekstrak tumbuhan berstandar farmasi seperti ekstrak sambiloto dan jahe merah untuk mendukung daya tahan tubuh dan kesehatan pernapasan.",
      color: "bg-green-500",
    },
    {
      year: "2019",
      title: "Inovasi Formulasi dan Teknologi Nano",
      description:
        "Memperkenalkan teknologi nanopartikel dalam formulasi obat. Produk NanoCure® diluncurkan sebagai antibiotik topikal nanoteknologi yang meningkatkan penyerapan obat dan mempercepat penyembuhan luka.",
      color: "bg-purple-500",
    },
    {
      year: "2021",
      title: "Fokus pada Penelitian Respiratori dan Imunologi",
      description:
        "Memperkuat riset pada infeksi saluran pernapasan dan sistem imun. Mengembangkan inhaler kombinasi budesonide-formoterol untuk asma serta suplemen imunomodulator. Membentuk Divisi Penelitian Imunofarmasi.",
      color: "bg-red-500",
    },
    {
      year: "2023",
      title: "Digitalisasi dan Farmasi Cerdas",
      description:
        "Meluncurkan platform Medisphere SmartHealth untuk menghubungkan pasien, apotek, dan tenaga medis. Memperkenalkan Medisphere Smart Inhaler dengan sensor digital untuk memantau kepatuhan penggunaan obat.",
      color: "bg-[#5e89a0]",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full bg-gradient-to-b from-[#F6F9FF] to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#5e89a0] to-[#496a7c] text-white py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Profil Perusahaan</h1>
            <p className="text-xl text-[#c7e2f2]">
              Medisphere - Inovasi untuk Kesehatan Masa Depan
            </p>
          </div>
        </div>

        {/* Sejarah Section */}
        <section id="sejarah" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-[#c7e2f2] text-[#496a7c] rounded-full text-sm font-semibold mb-4">
                  Tentang Kami
                </div>
                <h2 className="text-4xl font-bold text-[#404040] mb-6">
                  Sejarah Medisphere
                </h2>
                <p className="text-lg text-[#404040] leading-relaxed mb-6">
                  Medisphere berdiri pada tahun 2015 dengan komitmen menghadirkan solusi kesehatan yang inovatif, aman, dan berkelanjutan. Sejak awal, perusahaan berfokus pada riset dan pengembangan obat modern berbasis ilmiah untuk menjawab tantangan kesehatan global.
                </p>
                <p className="text-lg text-[#404040] leading-relaxed">
                  Dalam perjalanannya, Medisphere terus berinovasi melalui pengembangan produk fitofarmaka, penerapan teknologi nano, hingga digitalisasi layanan kesehatan melalui platform SmartHealth, menjadikannya pelopor dalam transformasi farmasi cerdas di Indonesia.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#85c1e2]">10+</div>
                    <div className="text-sm text-gray-600">
                      Tahun Pengalaman
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#85c1e2]">50+</div>
                    <div className="text-sm text-gray-600">Produk Inovatif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#85c1e2]">
                      100K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Pasien Terlayani
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#c7e2f2] rounded-3xl transform rotate-3"></div>

                <div className="relative rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
                  <img
                    src={farmasiImg}
                    alt="Sejarah Medisphere"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visi Misi Section */}
        <section id="visi-misi" className="py-20 px-8 bg-[#F6F9FF]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Tujuan Kami
              </div>
              <h2 className="text-4xl font-bold text-[#404040] mb-4">
                Visi & Misi
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="bg-[#FEFFFC] rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-[#c7e2f2] rounded-full flex items-center justify-center mb-6">
                  <Target className="text-[#496a7c]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#404040] mb-4">Visi</h3>
                <p className="text-[#404040] leading-relaxed text-lg">
                  "Menjadi perusahaan farmasi global yang menghadirkan solusi
                  kesehatan menyeluruh, inovatif, dan berkelanjutan demi
                  meningkatkan kualitas hidup masyarakat dunia"
                </p>
              </div>

              {/* Misi */}
              <div className="bg-gradient-to-br from-[#79b0ce] to-[#5e89a0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Mengembangkan inovasi farmasi berbasis riset ilmiah,
                      teknologi modern, dan kearifan alam
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Menyediakan produk obat yang aman, efektif, dan
                      berkualitas tinggi sesuai standar internasional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Mendorong kolaborasi multidisiplin untuk membangun
                      ekosistem kesehatan terpadu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Mengedepankan keberlanjutan dengan memanfaatkan sumber
                      daya secara bijak dan ramah lingkungan
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">
                      Meningkatkan akses kesehatan secara merata tanpa batas
                      geografis
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Perjalanan Kami
              </div>
              <h2 className="text-4xl font-bold text-[#404040] mb-4">
                Timeline History
              </h2>
              <p className="text-gray-600 text-lg">
                Jejak langkah Medisphere Pharma menuju inovasi kesehatan
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#c7e2f2]"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                >
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`bg-[#FEFFFC] rounded-2xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer ${
                          activeTimeline === index
                            ? "ring-2 ring-[#85c1e2]"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveTimeline(
                            activeTimeline === index ? null : index
                          )
                        }
                      >
                        <div
                          className={`inline-block px-4 py-1 ${item.color} text-white rounded-full text-sm font-bold mb-3`}
                        >
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#404040] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#c7e2f2] items-center justify-center z-10">
                      <Calendar className="text-[#79b0ce]" size={20} />
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Denah Section */}
        <section id="denah" className="py-20 px-8 bg-[#F6F9FF]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                Lokasi Kami
              </div>
              <h2 className="text-4xl font-bold text-[#404040] mb-4">
                Denah Lokasi
              </h2>
              <p className="text-gray-600 text-lg">
                Temukan kami di alamat berikut
              </p>
            </div>

            <div className="bg-[#FEFFFC] rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-video rounded-3xl overflow-hidden">
                <img
                  src={denahImg}
                  alt="Denah Lokasi Medisphere"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#c7e2f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Map className="text-[#496a7c]" size={24} />
                    </div>
                    <h4 className="font-semibold text-[#404040] mb-1">
                      Alamat
                    </h4>
                    <p className="text-sm text-gray-600">
                      Jl. Dua-puluh Ilir Tiga, Kec. Ilir Timur Satu, Kota Palembang
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="text-green-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-[#404040] mb-1">
                      Kantor Pusat
                    </h4>
                    <p className="text-sm text-gray-600">Tower Medhisphere</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="text-purple-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-[#404040] mb-1">Area</h4>
                    <p className="text-sm text-gray-600">Palembang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
