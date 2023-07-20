import React from "react";
import Image from "next/image";
const GoogleButton = () => {
  return (
    <button className="rounded-xl  bg-gradient-to-r from-[#E9420E] to-[#FFDD55] p-[1px] w-full lg:w-11/12 text-lg font-medium  text-[#ffffff] mx-auto opacity-90">
      <span className="bg-[#000000]  rounded-xl flex justify-center items-center py-3 xl:py-5 px-8  gap-2">
        <Image
          src="/image/logosGoogleIcon.png"
          width="20"
          height="20"
          alt="logosGoogleIcon"
        />
        Continue with google
      </span>
    </button>
  );
};

export default GoogleButton;
