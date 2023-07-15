import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpBtn = () => {
  return (
    <section className="w-11/12 md:w-2/5 lg:w-[30%] xl:w-1/4 2xl:w-1/4 mx-auto">
      <div className="">
        <Link href="/enterMail">
          <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl w-full mx-auto text-xl font-medium py-3 px-8 text-[#ffffff] opacity-90 mt-6">
            Email address
          </button>
        </Link>
        <Link href="/enterNumber">
          <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl w-full text-xl font-medium py-3 px-8 text-[#ffffff] opacity-90 mt-6">
            Phone number
          </button>
        </Link>
        <div className="border-b-[1px] border-[#ffffff] opacity-30 w-1/4 mx-auto py-4 mb-6"></div>
        <div className=" rounded-full mt-10 md:pb-40">
          <button className="rounded-xl  bg-clip-border to-yellow-300 border-[1px] w-full text-lg font-medium py-3 px-8 text-[#ffffff] opacity-90  flex justify-center items-center gap-2">
            <Image
              src="/image/logosGoogleIcon.png"
              width="20"
              height="20"
              alt="logosGoogleIcon"
            />
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpBtn;
