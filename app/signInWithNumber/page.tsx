import Image from "next/image";
import Link from "next/link";
import BackBtn from "@/components/Button/BackBtn";
import React from "react";
import GoogleButton from "@/components/GoogleBtn/GoggleButton";

const page = () => {
  return (
    <main className="bg-[#000000]">
      <section className="w-full pt-4">
        <div className="my-10 w-full">
          <div className="w-11/12 flex flex-col md:flex-row">
            <div className="md:w-1/3 pl-4 md:pl-0 my-4 flex items-center md:justify-center">
              <BackBtn location="/signIn" />
            </div>
            <h2 className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] text-transparent ml-4 bg-clip-text font-semibold text-3xl w-11/12 md:w-3/5 lg:w-fit flex lg:ml-4 md:text-3xl lg:text-4xl xl:text-5xl text-[#ffffff] opacity-70 ">
              Sign into liamstone
            </h2>
          </div>
          <div className="w-11/12 md:w-3/4 mt-1 lg:w-[68%] mx-auto xl:w-[45%] 2xl:w-1/2">
            <p className="font-normal text-sm md:text-xl 2xl:text-2xl text-[#ffffff] opacity-70 w-full mx-auto md:text-center">
              To sign in please type in your email address, phone number or scan
              qr code
            </p>
            {/* <Link href="/signIn">
          <div className="flex justify-end font-normal text-sm text-[#ffffff] opacity-70 mt-3">
            sign up
          </div>
        </Link> */}
          </div>
        </div>
        <section className="w-11/12 mx-auto pt-4 pb-4 md:pb-8 xl:pt-12">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-20 xl:gap-32 xl:w-[83%] 2xl:w-3/5 mx-auto">
            <div className="w-full md:w-3/5 gap-8 mx-auto lg:w-1/2">
              <div className="flex flex-col gap-14 mt-4 w-11/12 mx-auto">
                <div className="flex justify-between bg-[#0C0C0C]">
                  <Link className="/" href="/signIn">
                    <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 md:px-8 font-medium text-lg text-[#FFFFFF]">
                      Email
                    </button>
                  </Link>
                  <Link href="/signInWithNumber" className="">
                    <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-2 md:px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                      Phone number
                    </button>
                  </Link>
                  <Link href="/signInWithScan">
                    <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 md:px-8 font-medium text-lg text-[#FFFFFF] opacity-90">
                      Scan
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col mt-7">
                  <div className="rounded-xl border-[0.5px] border-[#E9430F] bg-opacity-30  bg-[#E9430F4D]  px-1 py-1">
                    <div className="flex">
                      <div className="w-[90%] xl:h-14">
                        <h4 className="text-[#E9430F] opacity-90 px-3 font-medium text-sm md:text-xl pb-1">
                          Phone number
                        </h4>
                        <input
                          type="text"
                          className="w-11/12 px-3 mb-1 bg-transparent text-white placeholder:text-white outline-none"
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
                  <div className="rounded-xl bg-[#0C0C0C] mt-5">
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
                  <div className="flex justify-between mt-5">
                    <div className="flex gap-4 font-medium text-sm text-[#ffffff] bg-opacity-90">
                      <input
                        type="checkbox"
                        className="checked:bg-[#E9430F] "
                        name="check"
                        value="1"
                      />
                      <label>Remember me</label>
                    </div>
                    <span className="font-medium text-[#ffffff] text-sm">
                      Forget Password
                    </span>
                  </div>
                  <div className=" rounded-full mt-10 lg:hidden ">
                    <GoogleButton />
                  </div>
                  <Link href="/passcode" className="w-full h-18 mt-2">
                    <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-3 xl:py-4 w-full font-medium text-lg text-[#FFFFFF] mt-5">
                      Sign in
                    </button>
                  </Link>
                  <Link href="/signup">
                    <div className="flex justify-center mt-5 2xl:mt-9 font-medium text-lg text-[#FFFFFF]">
                      Sign up
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex self-center lg:w-1/2">
              <div className=" rounded-full mt-10 md:mt-0 w-full  xl:h- mx-auto">
                <GoogleButton />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
