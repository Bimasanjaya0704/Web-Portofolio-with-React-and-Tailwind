import React from "react";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";
import c4 from "../Assets/c4.png";

const Clients = () => {
  return (
    <div className="pt-36 pb-32 bg-slate-700">
      <div className="container">
        <div className="mx-auto text-center mb-8">
          <h4 className="font-bold text-sm uppercase text-primary mb-2 lg:text-base">
            Clients
          </h4>
          <h2 className="font-semibold text-xl text-white uppercase lg:text-3xl">
            Pernah Berkolaborasi Bersama
          </h2>
          <p className="font-normal text-sm text-center text-slate-300 mt-1 lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nihil
            accusantium ipsam rerum similique dolorem laudantium animi odio,
            odit rem unde nesciunt neque earum possimus!
          </p>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 lg:mx-6 lg:max-w-[200px] xl:mx-8"
            >
              <img src={c1} alt="Diskominfo" />
            </a>
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 lg:mx-6 lg:max-w-[200px] xl:mx-8"
            >
              <img src={c2} alt="Gojek" />
            </a>
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 lg:mx-6 lg:max-w-[200px] xl:mx-8"
            >
              <img src={c3} alt="Google" />
            </a>
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-200 hover:grayscale-0 hover:opacity-100 lg:mx-6 lg:max-w-[200px] xl:mx-8"
            >
              <img src={c4} alt="BUMN" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
