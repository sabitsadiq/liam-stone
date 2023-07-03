import React from "react";

const EnterMailIntro = () => {
  return (
    <section className="w-full p-4">
      <div className="p-4">
        <div className="md:mx-auto md:w-1/2 lg:w-full  xl:w-[45%]">
          <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent bg-clip-text font-semibold w-fit mx-auto text-2xl md:text-3xl xl:text-5xl text-[#ffffff] opacity-70 mb-4">
            Enter email address
          </h2>
        </div>
        <div className="mx-auto md:w-3/4 lg:w-3/5 xl:w-[45%]">
          <p className="font-normal text-sm md:text-xl text-[#ffffff] opacity-70 w-full md:text-center">
            To sign in please type in your email address, phone number or scan
            qr code
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterMailIntro;
