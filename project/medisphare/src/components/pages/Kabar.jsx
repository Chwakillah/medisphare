import React, { useState } from "react";
import paracetamolImg from "../../assets/paracetamol.svg";

const newss = [
  { 
    id: 1, 
    name: "Penggalangan Komitmen Maturitas Industri Farmasi Nasional", 
    image: paracetamolImg,
    desc: "Kegiatan ini dalam rangka meningkatkan kepatuhan industri farmasi terhadap regulasi dan standar..."
  },
  { 
    id: 2, 
    name: "Peningkatan Kualitas Produksi Obat Nasional", 
    image: paracetamolImg,
    desc: "Program ini bertujuan untuk memastikan setiap produk farmasi memenuhi standar mutu yang berlaku..."
  },
  { 
    id: 3, 
    name: "Kolaborasi Pemerintah dan Industri dalam Riset Obat Baru", 
    image: paracetamolImg,
    desc: "Kerja sama strategis ini diharapkan mampu mendorong inovasi dalam pengembangan obat lokal..."
  },
  { 
    id: 4, 
    name: "Distribusi Obat Generik ke Daerah Terpencil", 
    image: paracetamolImg,
    desc: "Inisiatif baru pemerintah untuk memperluas akses terhadap obat generik di seluruh wilayah Indonesia..."
  },
  { 
    id: 5, 
    name: "Workshop Digitalisasi Rantai Pasok Farmasi", 
    image: paracetamolImg,
    desc: "Kegiatan ini memperkenalkan teknologi baru untuk meningkatkan efisiensi distribusi obat nasional..."
  },
  { 
    id: 6, 
    name: "Peningkatan Kapasitas SDM Industri Kesehatan", 
    image: paracetamolImg,
    desc: "Pelatihan ini diselenggarakan guna memperkuat kompetensi tenaga kerja di sektor farmasi..."
  },
];

const Kabar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(newss);

  const handleSearch = () => {
    const filtered = newss.filter((news) =>
      news.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mt-10" />

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black text-center w-full">
            Kabar Terbaru dari Kami
          </h2>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center items-center gap-3 mb-12 w-full flex-nowrap">
          <div className="flex items-center bg-white shadow-md rounded-2xl flex-grow max-w-[600px] px-6 py-3 min-w-0">
            <svg
              className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari berita..."
              className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-blue-50 px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition shrink-0"
          >
            Cari
          </button>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[100px]">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <div
                key={news.id}
                className="card card-compact bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105"
              >
                <figure className="bg-gray-100">
                  <img
                    src={news.image}
                    alt={news.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body bg-card p-5">
                  <h2 className="text-xl font-bold text-black line-clamp-2">
                    {news.name}
                  </h2>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {news.desc}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Berita tidak ditemukan 😢
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Kabar;
