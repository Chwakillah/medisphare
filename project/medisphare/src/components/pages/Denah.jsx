import React from "react";
import denahImg from "../../assets/denah.svg";

const Denah = () => {
  return (
    <section className="w-full min-h-screen bg-blue-50 py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Denah</h2>
        <div className="w-full">
          <img
            src={denahImg}
            alt="Denah Lokasi"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Denah;
