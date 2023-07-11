import Image from "next/image";
import Link from "next/link";
import React from "react";

const passcodeMain = () => {
  return (
    <section className="w-11/12 mx-auto pt-4 pb-4 md:pb-8 xl:pt-12">
      <div className="flex flex-col gap-4 pt-12  md:gap-8 lg:gap-14 xl:gap-8 lg:w-3/4 2xl:w-3/5 md:mx-auto ">
        <div className="flex justify-between mx-auto w-full md:w-3/5 xl:w-1/2 2xl:w-[67%] opacity-50 text-[#ffffff] font-medium text-sm lg:text-2xl">
          <span>Enter code</span>
          <span>3:00</span>
        </div>
        <form className="flex gap-4 w-full justify-center mx-auto text-white pb-20">
          <input
            maxLength={1}
            className="w-16 md:w-24 2xl:w-32 border-[#E9420E] border-b opacity-70 text-center text-[ffffff] bg-transparent outline-none"
          />
          <input
            maxLength={1}
            className="w-16 md:w-24 2xl:w-32 border-[#E9420E] border-b opacity-70 text-center text-[ffffff] bg-transparent outline-none"
          />
          <input
            maxLength={1}
            className="w-16 md:w-24 2xl:w-32 border-[#E9420E] opacity-70 border-b text-center bg-transparent outline-none text-[ffffff]"
          />
          <input
            maxLength={1}
            className="w-16 md:w-24 2xl:w-32 border-[#E9420E] border-b opacity-70 text-center text-[ffffff] bg-transparent outline-none"
          />
        </form>
      </div>
      <div className="w-10/12 md:w-1/2 mx-auto gap-8  lg:w-2/5 xl:w-[30%]">
        <Link href="/welcome">
          <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl w-full text-2xl font-medium py-3 px-8 text-[#ffffff] opacity-90">
            Submit
          </button>
        </Link>
        <Link
          href="#"
          className="text-[#E9420E] text-sm border-b border-[#E9420E]"
        >
          <span>Didn&rsquo;t receive the code?</span>
        </Link>
      </div>
      <div className=" mt-8">
        <Link
          href="/"
          className="md:hidden font-medium text-sm md:text-2xl text-white"
        >
          Back
        </Link>
      </div>
    </section>
  );
};

export default passcodeMain;
