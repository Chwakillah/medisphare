import React from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "D:/project/medisphare/src/assets/news/1.png";
import img2 from "D:/project/medisphare/src/assets/news/2.png";
import img3 from "D:/project/medisphare/src/assets/news/3.png";
import img4 from "D:/project/medisphare/src/assets/news/4.png";

const newss = [
  {
      id: 1,
      name: "Program Donasi dan Distribusi Obat kepada Masyarakat",
      image: img1,
      desc: "Kegiatan ini dilakukan sebagai bentuk kepedulian PT Medisphere terhadap kesehatan masyarakat, terutama bagi kelompok yang kurang mampu atau wilayah yang terdampak bencana.",
      date: "20 Oktober 2025",
      readTime: "5 menit"
    },
    {
      id: 2,
      name: "Edukasi Kesehatan melalui Booth Informasi dan Konsultasi",
      image: img2,
      desc: "PT Medisphere secara rutin membuka booth edukasi kesehatan pada kegiatan masyarakat seperti posyandu, car free day, acara komunitas, maupun program pemerintah daerah.",
      date: "18 Oktober 2025",
      readTime: "4 menit"
    },
    {
      id: 3,
      name: "Layanan Kesehatan Bergerak (Mobile Health Service)",
      image: img3,
      desc: "Sebagai perusahaan yang memahami pentingnya akses kesehatan, PT Medisphere menyediakan layanan kesehatan bergerak menggunakan kendaraan operasional yang dilengkapi dengan alat kesehatan dasar.",
      date: "15 Oktober 2025",
      readTime: "6 menit"
    },
    {
      id: 4,
      name: "Seminar dan Pelatihan Kesehatan untuk Komunitas",
      image: img4,
      desc: "PT Medisphere juga melaksanakan kegiatan edukatif berupa seminar, penyuluhan, dan pelatihan kepada berbagai kelompok masyarakat, termasuk siswa sekolah, mahasiswa kesehatan, serta organisasi komunitas.",
      date: "15 Oktober 2025",
      readTime: "6 menit"
    },
];

const Berita = () => {
  return (
    <section className="w-full min-h-screen py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              📰 Informasi Terkini
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              Berita Terbaru
            </h2>
            <p className="text-gray-600 text-lg">
              Update informasi dan perkembangan terkini industri farmasi
            </p>
          </div>

          <Link
            to="/berita"
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Lihat Semua
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newss.map((news, index) => (
            <Link
              key={news.id}
              to={`/detail-berita/${news.id}`}
              state={{ news }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 bg-gray-200">
                <img
                  src={news.image}
                  alt={news.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                  Terbaru
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{news.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {news.desc}
                </p>

                {/* Read More Link */}
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Berita;