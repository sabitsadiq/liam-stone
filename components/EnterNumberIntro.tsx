import React from "react";
import BackBtn from "./Button/BackBtn";

const EnterNumberIntro = () => {
  return (
    <section className="w-full p-4">
      <div className="p-4">
        <div className="w-11/12 flex flex-col md:flex-row">
          <div className="md:w-1/3 pl-4 md:pl-0 my-4 flex items-center md:justify-center">
            <BackBtn location="/" />
          </div>
          <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent ml-4 bg-clip-text font-semibold text-3xl w-11/12 md:w-3/5 lg:w-fit flex lg:ml-4 md:text-3xl lg:text-4xl xl:text-5xl text-[#ffffff] opacity-70 ">
            Welcome to liamstone
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
export default EnterNumberIntro;
