import React, { useEffect, useMemo, useState } from "react";
import productsData from "../../staticData/produkData"; 

const iconFor = (cat) => {
  const k = cat?.toLowerCase?.() || "";
  if (k.includes("tablet")) return "💊";
  if (k.includes("sirup")) return "🧪";
  if (k.includes("infus")) return "💉";
  if (k.includes("injeksi")) return "💉";
  if (k.includes("internasal")) return "👃";
  if (k.includes("inhaler")) return "🌬️";
  if (k.includes("tetes")) return "👂";
  return "📦";
};

const normalize = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");

const Produk = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // buat daftar kategori unik berdasarkan data (preserve original casing for labels)
  const categories = useMemo(() => {
    const setCat = new Map();
    productsData.forEach((p) => {
      const key = normalize(p.category);
      if (!setCat.has(key)) setCat.set(key, p.category);
    });
    // return array mulai dari "all"
    const cats = [{ value: "all", label: "Semua", icon: "📦" }];
    for (const [val, label] of setCat.entries()) {
      cats.push({ value: val, label: label, icon: iconFor(label) });
    }
    return cats;
  }, []);

  // inisialisasi filteredProducts saat mount
  useEffect(() => {
    setFilteredProducts(productsData);
  }, []);

  // fungsi membuka / menutup modal (atur overflow body)
  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  // cari & filter
  const runFilter = (term, category) => {
    const t = normalize(term);
    const filtered = productsData.filter((product) => {
      const nameMatch = product.name && product.name.toLowerCase().includes(t);
      const catMatch =
        category === "all" || normalize(product.category) === normalize(category);
      // jika term kosong, hanya pakai kategori; jika term ada, cocokkan nama + kategori
      return t === "" ? catMatch : nameMatch && catMatch;
    });
    return filtered;
  };

  const handleSearch = () => {
    const filtered = runFilter(searchTerm, selectedCategory);
    setFilteredProducts(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // apabila dikosongkan, langsung update berdasarkan kategori saat ini
    if (value.trim() === "") {
      setFilteredProducts(runFilter("", selectedCategory));
    }
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setFilteredProducts(runFilter(searchTerm, value));
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredProducts(runFilter("", selectedCategory));
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mt-10" />

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Temukan Pilihan Terbaikmu</h2>
          <p className="text-gray-600 text-lg">Cari dan temukan obat yang Anda butuhkan dengan mudah</p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <div className="flex items-center bg-white shadow-lg rounded-2xl px-6 py-4 border-2 border-transparent focus-within:border-blue-400 transition-all duration-200">
              {/* Icon */}
              <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>

              <input
                type="text"
                placeholder="Ketik nama obat yang Anda cari..."
                className="flex-grow outline-none text-gray-800 placeholder-gray-400 bg-transparent text-lg"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                aria-label="Cari produk"
              />

              {searchTerm && (
                <button onClick={clearSearch} className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors" aria-label="Hapus pencarian">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <button onClick={handleSearch} className="ml-3 bg-blue-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0">
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">Filter Kategori:</span>
            <span className="text-xs text-gray-500">({filteredProducts.length} produk)</span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`
                  px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 
                  flex items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                  ${selectedCategory === category.value
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200"
                  }
                `}
                aria-pressed={selectedCategory === category.value}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                {selectedCategory === category.value && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active filters */}
        {(searchTerm || selectedCategory !== "all") && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="text-sm text-gray-600">Filter aktif:</span>
            {searchTerm && (
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                <span>Pencarian: <strong>{searchTerm}</strong></span>
                <button onClick={clearSearch} className="hover:bg-blue-200 rounded-full p-0.5" aria-label="Hapus pencarian aktif">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            {selectedCategory !== "all" && (
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm">
                <span>Kategori: <strong>{categories.find(c => c.value === selectedCategory)?.label}</strong></span>
                <button onClick={() => handleCategoryChange("all")} className="hover:bg-purple-200 rounded-full p-0.5" aria-label="Hapus filter kategori">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[100px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(product);
                }}
              >
                <figure className="bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </figure>

                <div className="p-5">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 hover:text-blue-500 transition-colors">Klik untuk detail →</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-xl text-gray-600 mb-2">Produk tidak ditemukan</p>
              <p className="text-gray-500">Coba kata kunci atau kategori lain</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setFilteredProducts(productsData);
                }}
                className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal (updated layout, tanpa panel abu-abu) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
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
                  aria-label="Tutup"
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-xl hover:bg-white transition-all duration-200 hover:rotate-90 transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-full min-h-[320px] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 p-8 md:p-10">
                {/* Category Badge (small) */}
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  {iconFor(selectedProduct.category)} {selectedProduct.category}
                </span>

                {/* Product Name */}
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  {selectedProduct.name}
                </h3>

                {/* Small meta (dosis / harga) - tampil sebagai teks biasa tanpa panel */}
                <p className="text-sm text-gray-600 mb-4">
                  {selectedProduct.dosage ? `Dosis: ${selectedProduct.dosage}` : ""}
                  {selectedProduct.price ? ` • Harga: ${selectedProduct.price}` : ""}
                </p>

                {/* Deskripsi */}
                <p className="text-gray-600 mb-6">{selectedProduct.description || ""}</p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button onClick={closeModal} className="w-full px-8 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors duration-200">
                    Tutup
                  </button>
                  {/* contoh tombol lain (beli / tambah ke keranjang) - optional */}
                  {selectedProduct.price && (
                    <button className="w-full px-8 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-200">
                      Lihat / Beli
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
        .animate-slideUp { animation: slideUp 0.28s cubic-bezier(.2,.9,.2,1); }
      `}</style>
    </section>
  );
};

export default Produk;
