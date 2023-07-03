import React from "react";
import Link from "next/link";
import Image from "next/image";
const SignInWithScanMain = () => {
  return (
    <section className="w-11/12 mx-auto pt-4 pb-4 md:pb-0 xl:pt-12">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-14 xl:gap-32 xl:w-3/4 2xl:w-3/5 md:mx-auto ">
        <div className="w-full gap-8 md:w-1/2">
          <div className="flex flex-col gap-14 mt-4">
            <div className="flex justify-between bg-[#0C0C0C]">
              <Link href="/signIn">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF]">
                  Email
                </button>
              </Link>
              <Link href="/signInWithNumber" className="">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                  Phone number
                </button>
              </Link>
              <Link href="/signInWithScan">
                <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                  Scan
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#0C0C0C] w-full p-4 flex justify-center rounded-xl">
                <Image
                  src="/image/qrcode.png"
                  className="w-1/2 h-1/2"
                  width="50"
                  height="50"
                  alt="qrcode"
                />
              </div>

              <div className=" rounded-full mt-10 md:hidden ">
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
              {/* <div className="flex justify-center font-medium text-lg text-[#FFFFFF]">
                Sign in
              </div> */}
            </div>
          </div>
        </div>
        <div className="hidden md:flex self-center md:w-1/2">
          <div className=" rounded-full mt-10 md:mt-0 w-full">
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
      </div>
    </section>
  );
};

export default SignInWithScanMain;