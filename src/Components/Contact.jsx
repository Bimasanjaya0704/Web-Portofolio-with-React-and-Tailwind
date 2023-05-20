import React from "react";

const Contact = () => {
  return (
    <div className="pt-36 pb-32 bg-slate-50">
      <div className="container">
        <div className="w-full px-4">
          <div className=" max-w-xl mx-auto text-center mb-8">
            <h2 className="font-bold text-sm text-primary uppercase mb-2 lg:text-base">
              Contact
            </h2>
            <h4 className="font-semibold text-xl text-dark uppercase mb-2 md:text-2xl lg:text-3xl">
              Hubungi Saya
            </h4>
            <p className="font-normal text-sm text-secondary mb-5 lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              provident consequuntur doloremque eum odio culpa cupiditate
              architecto laboriosam temporibus numquam!
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto ">
            <form action="/" method="post">
              <div className="text-left">
                <label
                  for="name"
                  className="font-semibold text-base text-primary mb-1"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  className="bg-slate-200 rounded-md w-full py-2 px-3 mb-5 text-secondary focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="text-left">
                <label
                  for="email"
                  className="font-semibold text-base text-primary mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-slate-200 rounded-md w-full py-2 px-3 mb-5 text-secondary focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="text-left">
                <label
                  for="pesan"
                  className="font-semibold text-base text-primary mb-1"
                >
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  className="w-full bg-slate-200 rounded-md py-2 px-3 mb-5 text-secondary h-24 focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full font-semibold text-base text-white  bg-primary py-2 px-4 rounded-full hover:opacity-90 transition duration-300">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
