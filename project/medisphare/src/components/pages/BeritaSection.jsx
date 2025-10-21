import React from "react";
import paracetamolImg from "../../assets/paracetamol.svg";
import { Link } from "react-router-dom";

const newss = [
  {
    id: 1,
    name: "Penggalangan Komitmen Maturitas Industri Farmasi...",
    image: paracetamolImg,
    desc: "Kegiatan ini dalam rangka meningkatkan kepatuhan industri farmasi terhadap regulasi dan standar...",
  },
  {
    id: 2,
    name: "Penggalangan Komitmen Maturitas Industri Farmasi...",
    image: paracetamolImg,
    desc: "Kegiatan ini dalam rangka meningkatkan kepatuhan industri farmasi terhadap regulasi dan standar...",
  },
  {
    id: 3,
    name: "Penggalangan Komitmen Maturitas Industri Farmasi...",
    image: paracetamolImg,
    desc: "Kegiatan ini dalam rangka meningkatkan kepatuhan industri farmasi terhadap regulasi dan standar...",
  },
];

const Berita = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black">Berita Terbaru</h2>

          <Link
            to="/berita"
            className="text-blue-500 hover:underline font-medium"
          >
            Selengkapnya
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newss.map((news) => (
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
                <p className="text-sm text-black mt-2 line-clamp-2">
                  {news.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Berita;
