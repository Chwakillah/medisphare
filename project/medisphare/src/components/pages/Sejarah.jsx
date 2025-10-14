import React from "react";
import farmasiImg from "../../assets/Sejarah.svg";

const Sejarah = () => {
  return (
    <section className="w-full min-h-screen bg-blue-50 max-w-6xl mx-auto rounded-xl overflow-hidden flex flex-col lg:flex-row lg:gap-8">
      <div className="flex-1 px-6 py-10 sm:px-10 sm:py-14 lg:py-16">
        <div className="max-w-xl text-justify">
          <h1 className="text-4xl font-semibold text-black mb-6">Sejarah</h1>
          <p className="text-base text-black leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi
            tincidunt, varius est ac, lobortis est. In cursus metus nec nunc
            pulvinar fringilla. Aliquam ultrices arcu eget placerat dignissim.
            Nunc finibus tellus sed congue posuere. In scelerisque magna sed
            ligula condimentum, non porta augue tincidunt. In ullamcorper, odio
            id vehicula egestas, orci ligula auctor massa, id fringilla risus
            felis non lacus. Nunc faucibus vestibulum erat, sed luctus tellus
            pharetra quis. Integer vestibulum dui nibh, in imperdiet magna
            bibendum ac. Duis pharetra convallis dolor quis bibendum. Mauris
            tempus luctus ultricies. Nulla facilisi. Sed laoreet, elit a
            imperdiet convallis, odio erat sagittis augue, vitae placerat ligula
            leo eget diam.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={farmasiImg}
          alt="Farmasi"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Sejarah;
