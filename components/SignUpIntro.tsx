import Link from "next/link";
import React from "react";
import BackBtn from "./Button/BackBtn";
const SignUpIntro = () => {
  return (
    <section className="w-11/12 mx-auto pt-7 xl:pt-12">
      <div className="w-11/12 flex flex-col md:flex-row">
        <div className="md:w-1/3 pl-4 md:pl-0 my-4 flex items-center md:justify-center">
          <BackBtn location="/" />
        </div>
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent ml-4 bg-clip-text font-semibold text-3xl w-11/12 md:w-3/5 lg:w-fit flex lg:ml-4 md:text-3xl lg:text-4xl xl:text-5xl text-[#ffffff] opacity-70 ">
          Welcome to liamstone
        </h2>
      </div>
      <div className="lg:w-3/4 mx-auto 2xl:w-[65%]">
        <p className="font-normal text-sm md:text-lg md:w-3/4 text-[#ffffff] opacity-70 w-full mx-auto xl:w-3/5 md:text-center">
          To sign up please type in your email address, phone number or scan qr
          code
        </p>
        <Link href="/signIn">
          <div className="flex text-[#E9420E] justify-end font-medium text-xl opacity-70 my-8">
            sign in
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SignUpIntro;
