
import React from "react";
import Sejarah from "./Sejarah";
import Visi from "./Visi";
import Denah from "./Denah";
import Navbar from "../layouts/Navbar";

const Profil = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar/>
      <Sejarah />
      <Visi />
      <Denah />
    </div>
  );
};

export default Profil;
