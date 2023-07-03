import Link from "next/link";
import React from "react";
const SignUpIntro = () => {
  return (
    <section className="w-11/12 mx-auto pt-4 xl:pt-12">
      <div className="md:w-1/2 xl:w-11/12 mx-auto">
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent bg-clip-text font-semibold text-2xl md:w-fit md:mx-auto md:text-3xl xl:text-6xl text-[#ffffff] opacity-70 mb-4">
          Welcome to liamstone
        </h2>
      </div>
      <div className="lg:w-3/4 mx-auto">
        <p className="font-normal text-sm md:text-3xl text-[#ffffff] opacity-70 w-full mx-auto lg:w-10/12 md:text-center">
          To sign up please type in your email address, phone number or scan qr
          code
        </p>
        <Link href="/signIn">
          <div className="flex text-[#E9420E] justify-end font-normal text-sm opacity-70 mt-3">
            sign in
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SignUpIntro;
