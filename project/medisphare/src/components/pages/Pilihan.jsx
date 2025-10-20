import React, { useState } from "react";
import paracetamolImg from "../../assets/paracetamol.svg";

const products = [
  { id: 1, name: "Paracetamol", category: "Tablet", image: paracetamolImg },
  { id: 2, name: "Ibuprofen", category: "Kapsul", image: paracetamolImg },
  { id: 3, name: "Amoxicillin", category: "Antibiotik", image: paracetamolImg },
  { id: 4, name: "Cetirizine", category: "Sirup", image: paracetamolImg },
  { id: 5, name: "Vitamin C", category: "Tablet", image: paracetamolImg },
  { id: 6, name: "Paracetamol Anak", category: "Sirup", image: paracetamolImg },
];

const TemukanPilihan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") setFilteredProducts(products);
  };

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="mt-10" />

        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Temukan Pilihan Terbaikmu
        </h2>

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
              placeholder="Cari obat..."
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

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[100px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card card-compact bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <figure className="bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body bg-card p-5">
                  <div className="badge bg-blue-50 border border-blue-500 text-blue-500 text-xs py-3 px-2 rounded-md">
                    {product.category}
                  </div>
                  <h2 className="card-title font-bold text-black mt-2 text-lg">
                    {product.name}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Produk tidak ditemukan 😢
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TemukanPilihan;
