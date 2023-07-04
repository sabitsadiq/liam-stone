import React from "react";
import Image from "next/image";
import Link from "next/link";
const SignInMain = () => {
  return (
    <section className="w-11/12 mx-auto pt-4 pb-4 md:pb-8 xl:pt-12">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-14 xl:gap-32 lg:w-3/4 2xl:w-3/5 mx-auto ">
        <div className="w-full md:w-3/5 gap-8 mx-auto lg:w-1/2">
          <div className="flex flex-col gap-14 mt-4">
            <div className="flex justify-between bg-[#0C0C0C]">
              <Link className="/" href="/signIn">
                <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF]">
                  Email
                </button>
              </Link>
              <Link href="/signInWithNumber" className="">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                  Phone number
                </button>
              </Link>
              <Link href="/signInWithScan">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                  Scan
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-8 mt-8">
              <div className="rounded-xl bg-[#E9430F4D] opacity-30  px-1 py-1">
                <div className="flex">
                  <div className="w-[90%]">
                    <h4 className="text-[#E9430F] opacity-90 px-3 font-medium text-sm md:text-xl pb-1">
                      Email Address
                    </h4>
                    <input
                      type="text"
                      className="w-11/12 px-3 bg-transparent text-white placeholder:text-white outline-none"
                    />
                  </div>
                  <div className="w-[10%] flex self-center">
                    <Image
                      className="w-1/2"
                      src="/image/mail.png"
                      width="100"
                      height="100"
                      alt="mail"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#0C0C0C] ">
                <div>
                  <h4 className="text-[#FFFFFF] opacity-50 font-medium text-sm md:text-lg py-1 px-3">
                    password
                  </h4>
                </div>
                <div className="">
                  <input
                    type="text"
                    // placeholder="Enter Your Mail"
                    className="w-11/12 h-3/4 px-3 text-white bg-inherit placeholder:text-white opacity-50 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-5 pt-2">
                <div className="flex gap-4 font-medium text-sm text-[#ffffff] opacity-90">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <span className="font-medium text-[#ffffff] text-sm">
                  Forget Password
                </span>
              </div>
              <div className=" rounded-full mt-10 lg:hidden ">
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
              <Link href="/" className="w-full">
                <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 w-full font-medium text-lg text-[#FFFFFF] mt-5">
                  Sign in
                </button>
              </Link>
              <div className="flex justify-center font-medium text-lg text-[#FFFFFF]">
                Sign up
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex self-center lg:w-1/2">
          <div className=" rounded-full mt-10 md:mt-0 w-full">
            <button className="rounded-xl  bg-clip-border to-yellow-300 border-[1px] w-full lg:w-11/12 text-lg font-medium py-3 px-8 text-[#ffffff] opacity-90  flex justify-center items-center gap-2">
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
      </div>
    </section>
  );
};

export default SignInMain;
