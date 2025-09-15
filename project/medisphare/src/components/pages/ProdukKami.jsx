import React from 'react';
import paracetamolImg from "../../assets/paracetamol.svg";

const products = [
  {
    id: 1,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
  {
    id: 2,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
  {
    id: 3,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
  {
    id: 4,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
  {
    id: 5,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
  {
    id: 6,
    name: 'Paracetamol',
    category: 'Tablet',
    image: paracetamolImg,
  },
];

const ProdukKami = () => {
  return (
    <section className="w-full min-h-screen bg-blue-50 py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Produk Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <figure className="bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body bg-backgroud p-5">
                <div className="badge bg-backgroud border-blue-500 text-blue-500 text-xs py-3">
                  {product.category}
                </div>
                <h2 className="card-title font-bold text-black mt-2">
                  {product.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-blue-50 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Lihat Lebih Banyak
        </button>
        </div>
      </div>
    </section>
  );
};

export default ProdukKami;
