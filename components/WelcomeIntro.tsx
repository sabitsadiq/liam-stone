import React from "react";
import BackBtn from "./Button/BackBtn";
const WelcomeIntro = () => {
  return (
    <section className="w-full pt-4">
      <div className="w-11/12 flex flex-col md:flex-row">
        <div className="md:w-1/3 pl-4 md:pl-0 my-4 flex items-center md:justify-center">
          <BackBtn location="/" />
        </div>
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent ml-4 bg-clip-text font-semibold text-3xl w-11/12 md:w-3/5 lg:w-fit flex lg:ml-4 md:text-3xl lg:text-4xl xl:text-5xl text-[#ffffff] opacity-70 ">
          Welcome to liamstone
        </h2>
      </div>
      <div className="w-11/12 md:w-[64%] mx-auto lg:w-3/5 xl:w-1/2 2xl:w-[42%]">
        <p className="font-normal text-sm md:text-xl lg:text-2xl text-[#ffffff] opacity-70 w-full mx-auto md:text-center">
          A four digit code was sent to the email below. Kindly enter the code.
        </p>
        {/* <Link href="/signIn">
          <div className="flex justify-end font-normal text-sm text-[#ffffff] opacity-70 mt-3">
            sign up
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default WelcomeIntro;
