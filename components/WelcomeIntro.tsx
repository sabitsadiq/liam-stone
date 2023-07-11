import React from "react";

const WelcomeIntro = () => {
  return (
    <section className="w-full pt-4">
      <div className="w-11/12 md:w-1/2 2xl:pt-4 mx-auto 2xl:w-2/5">
        <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent bg-clip-text font-semibold text-2xl md:w-fit md:mx-auto md:text-3xl xl:text-4xl text-[#ffffff] opacity-70 mb-4">
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