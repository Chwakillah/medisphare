import React from "react";
import Sejarah from "./Sejarah";
import Navbar from "../layouts/Navbar";

const Profil = () => {
  return (
    <div className="w-full min-h-screen px-8 py-20 md:px-20 md:py-24 justify-center items-center bg-cover bg-center bg-fixed overflow-hidden">
      <Navbar/>
      <Sejarah />
    </div>
  );
};

export default Profil;
