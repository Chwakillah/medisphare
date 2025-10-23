import React, { useState } from 'react';
import { X, Package } from 'lucide-react';

// Sample placeholder images
import img1 from "../../assets/products/1.png";
import img2 from "../../assets/products/2.png";
import img3 from "../../assets/products/3.png";
import img4 from "../../assets/products/4.png";
import img5 from "../../assets/products/5.png";
import img6 from "../../assets/products/6.png";

const products = [
  { 
    id: 1, 
    name: "Amoxicillin", 
    category: "Tablet", 
    image: img1,
    description: "Antibiotik untuk mengatasi berbagai infeksi bakteri",
    dosage: "500mg",
    price: "Rp 45.000",
    isi: 10
  },
  { 
    id: 2, 
    name: "Azithromycin", 
    category: "Tablet", 
    image: img2,
    description: "Antibiotik spektrum luas untuk infeksi saluran pernapasan",
    dosage: "500mg",
    price: "Rp 75.000"
  },
  { 
    id: 3, 
    name: "Cefuroxime Axetil", 
    category: "Tablet", 
    image: img3,
    description: "Antibiotik generasi kedua untuk infeksi bakteri",
    dosage: "500mg",
    price: "Rp 85.000"
  },
  { 
    id: 4, 
    name: "Cetirizine HCl", 
    category: "Tablet", 
    image: img4,
    description: "Obat alergi untuk meredakan gejala alergi dan gatal",
    dosage: "10mg",
    price: "Rp 25.000"
  },
  { 
    id: 5, 
    name: "Clavamox", 
    category: "Tablet", 
    image: img5,
    description: "Kombinasi antibiotik untuk infeksi yang resisten",
    dosage: "500mg",
    price: "Rp 95.000"
  },
  { 
    id: 6, 
    name: "Phenylephrine HCl", 
    category: "Tablet", 
    image: img6,
    description: "Meredakan hidung tersumbat akibat flu dan alergi",
    dosage: "10mg",
    price: "Rp 35.000"
  },
];

const ProdukKami = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
            <Package className="w-4 h-4" />
            Produk Berkualitas Tinggi
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Produk <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Rangkaian produk farmasi berkualitas tinggi yang telah terpercaya dan teruji untuk mendukung kesehatan Anda dan keluarga
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.category}
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-gray-900 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Lihat Detail
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
                
                {/* Removed description */}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Removed price */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <p>Klik untuk detail</p>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/produk"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Package className="w-5 h-5" />
            Jelajahi Semua Produk
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal (simplified) */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-xl hover:bg-white transition-all duration-200 hover:rotate-90 transform"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-full min-h-[400px] flex items-center justify-center p-8">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 p-8 md:p-10">
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  {selectedProduct.category}
                </span>

                {/* Product Name */}
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  {selectedProduct.name}
                </h3>

                {/* Removed rating */}
                {/* Removed description */}

                {/* Product Details */}
                <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Dosis</p>
                      <p className="font-bold text-gray-900">{selectedProduct.dosage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Kategori</p>
                      <p className="font-bold text-gray-900">{selectedProduct.category}</p>
                    </div>
                  </div>
                </div>

                {/* Removed price */}

                {/* Action Buttons: only Tutup */}
                <div className="flex gap-3">
                  <button 
                    onClick={closeModal}
                    className="w-full px-8 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors duration-200"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ProdukKami;
