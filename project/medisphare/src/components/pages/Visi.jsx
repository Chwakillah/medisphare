import React from "react";
import visiImg from "../../assets/visi.svg";

const Visi = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto px-6 py-16">
      <div className="w-full md:w-1/2">
        <img
          src={visiImg}
          alt="Ilustrasi"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-black">
          Visi & Misi
        </h2>

        <p className="text-black leading-relaxed text-justify">
          "Menjadi perusahaan farmasi global yang menghadirkan solusi kesehatan menyeluruh, inovatif, dan berkelanjutan demi meningkatkan kualitas hidup masyarakat dunia"
        </p>

        <ol className="list-disc list-outside pl-5 text-black leading-relaxed space-y-2">
          <li>Mengembangkan inovasi farmasi berbasis riset ilmiah, teknologi modern, dan kearifan alam untuk menjawab tantangan kesehatan global</li>
          <li>Menyediakan produk obat yang aman, efektif, dan berkualitas tinggi sesuai standar internasional</li>
          <li>
            Mendorong kolaborasi multidisiplin antara peneliti, tenaga kesehatan, dan masyarakat untuk membangun ekosistem kesehatan yang terpadu.
          </li>
          <li>
            Mengedepankan keberlanjutan dengan memanfaatkan sumber daya secara bijak dan ramah lingkungan.
          </li>
          <li>
            Meningkatkan akses kesehatan secara merata sehingga manfaat inovasi medis dapat dirasakan oleh semua kalangan tanpa batas geografis.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Visi;
