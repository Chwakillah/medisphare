import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import img1 from "../../assets/news/1.jpeg";
import img2 from "../../assets/news/2.jpg";
import img3 from "../../assets/news/3.jpg";

const newss = [
  {
    id: 1,
    name: "Indonesia Menjadi Tuan Rumah 26th DCVMN Annual General Meeting 2025, Bio Farma dan DCVMN Perkuat",
    image: img1,
    desc: "Indonesia kembali menjadi pusat perhatian dunia kesehatan global. Melalui PT Bio Farma (Persero), Indonesia dipercaya menjadi tuan rumah penyelenggaraan 26th Developing",
    date: "20 Oktober 2025",
    readTime: "5 menit"
  },
  {
    id: 2,
    name: "Jejak Indonesia di Lanskap Vaksin Dunia, Bio Farma dan DCVMN Wujudkan Ketahanan Kesehatan Lewat Kolaborasi Global",
    image: img2,
    desc: "Peran Indonesia melalui PT Bio Farma (Persero) dalam jejaring produsen vaksin negara berkembang atau Developing Countries Vaccine Manufacturers Network (DCVMN) memiliki sejarah panjang dan strategis dalam memperkuat kolaborasi global untuk memperluas akses terhadap vaksin yang aman, bermutu, dan terjangkau bagi masyarakat dunia.",
    date: "18 Oktober 2025",
    readTime: "4 menit"
  },
  {
    id: 3,
    name: "Sorak Sorai Warnai Pembukaan BiOlympics 2025!",
    image: img3,
    desc: "Kamis sore itu, kawasan Bio Farma berubah menjadi lautan semangat! Pembukaan BiOlympics 2025 berlangsung meriah, membuka rangkaian ajang olahraga tahunan yang selalu dinanti-nantikan. Suasana kian membara saat kompetisi pertama, poundfit, resmi dimulai diiringi tepuk tangan dan sorak-sorai dari para karyawan yang tumpah ruah memadati area acara.",
    date: "15 Oktober 2025",
    readTime: "6 menit"
  },
];

const Kabar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(newss);

  const handleSearch = () => {
    const filtered = newss.filter((news) =>
      news.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredNews(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") setFilteredNews(newss);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredNews(newss);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Improved Typography */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Kabar Terbaru
            <span className="block text-blue-600 mt-2">dari Kami</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Temukan berita terkini, artikel menarik, dan update terbaru seputar kegiatan kami
          </p>
        </div>

        {/* Search Bar — styled like Produk */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex items-center bg-white shadow-lg rounded-2xl px-6 py-4 border-2 border-transparent focus-within:border-blue-400 transition-all duration-200">
              {/* Search Icon (SVG similar to Produk) */}
              <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>

              <input
                type="text"
                placeholder="Cari berita atau artikel..."
                className="flex-grow outline-none text-gray-800 placeholder-gray-400 bg-transparent text-lg"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                aria-label="Cari berita"
              />

              {searchTerm && (
                <button onClick={clearSearch} className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors" aria-label="Hapus pencarian">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <button
                onClick={handleSearch}
                className="ml-3 bg-blue-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0"
              >
                Cari
              </button>
            </div>

            {/* Search Results Info */}
            {searchTerm && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Ditemukan <span className="font-semibold text-blue-600">{filteredNews.length}</span> hasil
                  {searchTerm && ` untuk "${searchTerm}"`}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* No Results State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              {/* reuse a simple SVG instead of lucide Search for consistent look */}
              <svg className="w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak ada hasil</h3>
            <p className="text-gray-600 mb-6">
              Maaf, kami tidak menemukan berita yang sesuai dengan pencarian Anda
            </p>
            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {/* Grid Berita */}
        {filteredNews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <article
                key={news.id}
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
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
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

export default Kabar;
