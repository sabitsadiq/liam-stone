import Image from "next/image";
import Link from "next/link";
import React from "react";
const WelcomeMain = () => {
  return (
    <section className="w-full pt-4">
      <div className="w-11/12 md:w-1/2 xl:w-1/4 2xl:pt-4 mx-auto 2xl:w-2/5">
        <Image
          src="/image/welcomeImg.png"
          className="w-11/12 md:w-[65%] aspect-[1/1] xl:w-full 2xl:w-3/4 object-cover mx-auto"
          width="100"
          height="100"
          alt="welcomeImage"
        />
      </div>
      <div className="w-11/12 md:w-2/5 lg:w-[28%] lg:-mt-10 2xl:pt-4 mx-auto 2xl:w-[30%]">
        <Link href="/passcode" className="w-full mx-auto">
          <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-lg px-4 py-2 w-full  2xl:w-11/12 mx-auto font-medium text-lg text-[#FFFFFF] mt-5">
            Proceed
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WelcomeMain;
