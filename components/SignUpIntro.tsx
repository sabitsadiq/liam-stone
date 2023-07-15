import Link from "next/link";
import React from "react";
const SignUpIntro = () => {
  return (
    <section className="w-11/12 mx-auto pt-7 xl:pt-12">
      <div className="md:w-3/4 xl:w-2/5 mx-auto">
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent bg-clip-text font-semibold text-2xl md:mx-auto md:text-4xl flex items-center justify-center xl:text-4xl text-[#ffffff] opacity-70 mb-4">
          Welcome to liamstone
        </h2>
      </div>
      <div className="lg:w-3/4 mx-auto 2xl:w-[65%]">
        <p className="font-normal text-sm md:text-lg md:w-3/4 text-[#ffffff] opacity-70 w-full mx-auto xl:w-3/5 md:text-center">
          To sign up please type in your email address, phone number or scan qr
          code
        </p>
        <Link href="/signIn">
          <div className="flex text-[#E9420E] justify-end font-normal text-sm opacity-70 my-12">
            sign in
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SignUpIntro;
