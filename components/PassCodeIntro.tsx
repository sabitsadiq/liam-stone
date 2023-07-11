import Link from "next/link";
import React from "react";
const passcodeIntro = () => {
  return (
    <section className="w-full pt-4">
      <div className="md:relative w-11/12 md:w-1/2 2xl:pt-4 mx-auto 2xl:w-2/5">
        <Link
          href="/"
          className="hidden md:block md:absolute font-medium xl:text-2xl text-white top-2 2xl:top-6 -left-32 text-sm 2xl:-left-48"
        >
          Back
        </Link>
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent bg-clip-text xl:pb-4 font-semibold text-2xl md:w-fit md:mx-auto md:text-3xl xl:text-6xl text-[#ffffff] opacity-70 mb-4">
          Enter passcode
        </h2>
      </div>
      <div className="w-11/12 md:w-3/4 lg:w-[68%] mx-auto xl:w-3/5 2xl:w-1/2">
        <p className="font-normal text-sm md:text-xl lg:text-3xl text-[#ffffff] opacity-70 w-full mx-auto md:text-center">
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

export default passcodeIntro;
