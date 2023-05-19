import image from "../Assets/bima.png";
import Typical from "react-typical";

const Beranda = () => {

  return (
    <div>
      <div className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base uppercase font-semibold text-dark  lg:text-lg">
                Halo Semua, Saya
                <span className="block font-bold uppercase text-primary text-3xl mt-3 md:text-4xl lg:text-5xl">
                  Bima Sanjaya
                </span>
              </h1>
              <p className="font-medium text-secondary text-lg mb-5">
                i'm a{" "}
                <Typical
                  loop={Infinity}
                  wrapper="i"
                  steps={[
                    "Front-End Developer",
                    2000,
                    "Graphic Designer",
                    2000,
                  ]}
                  delay={5000} // Waktu penundaan antara pengetikan karakter
                  eraseDelay={5000} // Waktu penundaan antara penghapusan karakter
                />
              </p>

              <p className="font-small text-slate-400 mb-10 leading-relaxed text-sm md:text-base">
                Transformasikan ide-ide Anda menjadi tampilan web yang memikat
                dengan sentuhan desain yang
                <span className="text-primary"> kreatif</span>
              </p>

              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8  rounded-full hover:shadow-lg hover: opacity-90 "
              >
                Contact Me!
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src={image} alt="image" className="max-w-full mx-auto animate-bounce" />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 lg:scale-150">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M51.6,-46C63.8,-39.5,68.3,-19.7,69.9,1.6C71.5,22.9,70.2,45.9,58,54.5C45.9,63.1,22.9,57.4,0.8,56.6C-21.4,55.9,-42.8,60,-55.4,51.4C-68,42.8,-71.8,21.4,-68.3,3.6C-64.7,-14.3,-53.7,-28.5,-41.1,-35C-28.5,-41.4,-14.3,-40.1,2.7,-42.9C19.7,-45.6,39.5,-52.4,51.6,-46Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
