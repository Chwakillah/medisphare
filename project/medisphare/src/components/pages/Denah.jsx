import React from "react";
import denahImg from "../../assets/denah.svg";

const Denah = () => {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 px-6">
        <h2 className="text-4xl font-semibold text-black">Denah</h2>

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
