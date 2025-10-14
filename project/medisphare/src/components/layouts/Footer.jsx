import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-medisphere text-base-content px-10 py-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Kiri - Brand + Kontak + Sosmed */}
        <div className="flex flex-col gap-6">
          <aside className="flex flex-col gap-2">
            <h1 className="font-montserrat text-4xl font-bold text-blue2-900">
              MEDISPHERE.
            </h1>
            <h3 className="font-montserrat text-base font-medium text-blue2-50">
              Produsen obat terpercaya.
            </h3>
          </aside>
          <aside className="flex flex-col gap-1 font-montserrat text-base font-medium text-blue2-50">
            <p>Telepon: +62 853-7812-1234</p>
            <p>Email: medisphere@gmail.com</p>
          </aside>
        </div>

        {/* Tengah - Services */}
        <nav className="flex flex-col gap-2 font-montserrat text-base">
          <h6 className="text-xl font-bold text-blue2-900">Menu</h6>
          <a className="link link-hover text-blue2-50 font-medium">Beranda</a>
          <a className="link link-hover text-blue2-50 font-medium">Profil</a>
          <a className="link link-hover text-blue2-50 font-medium">Produk</a>
          <a className="link link-hover text-blue2-50 font-medium">
            Berita
          </a>
        </nav>

        {/* Kanan - Newsletter */}
        <form className="flex flex-col gap-3">
          <h6 className="text-xl font-bold text-blue2-900">Langganan Berita</h6>
          <label className="font-montserrat text-base font-medium text-blue2-50">
            Masukkan emailmu
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn bg-blue-600 border-none hover:bg-blue-700 text-white shadow-none join-item">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
