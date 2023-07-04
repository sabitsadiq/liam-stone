import Image from "next/image";
import Link from "next/link";
import React from "react";

const passcodeMain = () => {
  return (
    <section className="w-11/12 mx-auto pt-4 pb-4 md:pb-8 xl:pt-12">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-14 xl:gap-32 lg:w-3/4 2xl:w-3/5 md:mx-auto ">
        <div className="w-full md:w-3/5 mx-auto gap-8 lg:w-1/2">
          <div className="flex flex-col gap-14 mt-4">
            <div className="flex justify-between bg-[#0C0C0C]">
              <Link href="/signIn">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF]">
                  Email
                </button>
              </Link>
              <button className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                Phone number
              </button>
              <Link href="/signInWithScan">
                <button className="hover:bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl px-4 py-2 font-medium text-lg text-[#FFFFFF] opacity-90">
                  Scan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default passcodeMain;
