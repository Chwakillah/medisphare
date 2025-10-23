import React from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";


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

          <a
            href="/berita"
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Lihat Semua
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newss.map((news, index) => (
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
                  href={`/`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
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