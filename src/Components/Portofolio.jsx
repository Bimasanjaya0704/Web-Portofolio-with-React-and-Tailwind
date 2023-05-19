import React from "react";
import Porto1 from "../Assets/porto1.png";
import Porto2 from "../Assets/porto2.png";


const Portofolio = () => {
  return (
      <div className="pt-36 pb-32 bg-slate-200">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-8 ">
            <h4 className="font-bold text-sm uppercase text-primary mb-2 lg:text-base">
              Portofolio
            </h4>
            <h2 className="font-semibold text-xl uppercase lg:text-3xl ">Project terbaru saya </h2>
            <p className="font-normal text-sm text-center text-secondary mt-1 lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nihil
              accusantium ipsam rerum similique dolorem laudantium animi odio,
              odit rem unde nesciunt neque earum possimus!
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-5 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Porto1} alt="Web Movies" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl">
                Web Movies
              </h3>
              <p className="font-normal text-sm text-secondary lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quam debitis nesciunt quasi quis fugit ullam, reprehenderit
                optio voluptatem ex.
              </p>
            </div>
            <div className="mb-5 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Porto1} alt="Web Movies" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl">
                Web Movies
              </h3>
              <p className="font-normal text-sm text-secondary lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quam debitis nesciunt quasi quis fugit ullam, reprehenderit
                optio voluptatem ex.
              </p>
            </div>
            <div className="mb-5 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Porto2} alt="Todo-List" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl">
                Todo-List
              </h3>
              <p className="font-normal text-sm text-secondary lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quam debitis nesciunt quasi quis fugit ullam, reprehenderit
                optio voluptatem ex.
              </p>
            </div>
            <div className="mb-15 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Porto2} alt="Todo-List" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl">
              Todo-List
              </h3>
              <p className="font-normal text-sm text-secondary lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quam debitis nesciunt quasi quis fugit ullam, reprehenderit
                optio voluptatem ex.
              </p>
            </div>
            <div className="mb-5 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={Porto1} alt="Web Movies" width="w-full" />
              </div>
              <h3 className="font-semibold text-base text-dark uppercase mt-4 mb-1 lg:text-2xl">
                Web Movies
              </h3>
              <p className="font-normal text-sm text-secondary lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quam debitis nesciunt quasi quis fugit ullam, reprehenderit
                optio voluptatem ex.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portofolio;
