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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi
          tincidunt, varius est ac, lobortis est. In cursus metus nec nunc
          pulvinar fringilla. Aliquam ultrices arcu eget placerat dignissim.
          Nunc finibus tellus sed congue posuere. In scelerisque magna sed
          ligula condimentum, non porta augue tincidunt. In ullamcorper, odio id
          vehicula egestas, orci ligula auctor massa, id fringilla risus felis
          non lacus.
        </p>

        <ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-2">
          <li>Fusce nunc eros, congue sed enim a, rutrum luctus quam.</li>
          <li>Mauris gravida volutpat lacinia.</li>
          <li>
            Phasellus felis arcu, volutpat blandit nulla vitae, aliquet
            facilisis ante.
          </li>
          <li>
            Donec a est ut risus tempor rhoncus. Nullam hendrerit commodo est eu
            luctus.
          </li>
          <li>
            Etiam quis semper felis. Maecenas varius, massa tincidunt vulputate
            vulputate.
          </li>
          <li>
            Quisque vel magna et justo efficitur rutrum non ac ligula. Donec non
            dui orci.
          </li>
          <li>Sed dapibus lobortis ante quis fringilla.</li>
        </ul>
      </div>
    </section>
  );
};

export default Visi;
