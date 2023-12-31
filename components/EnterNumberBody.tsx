import React from "react";
import Image from "next/image";
import Link from "next/link";
const EnterNumberBody = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row gap-8 xl:gap lg:gap-24 md:w-11/12 lg:w-4/5 xl:w-4/5 md:mx-auto md:mt-10 xl:mt-20">
        <div className="w-11/12 md:w- mx-auto">
          <div className=" xl:w-10/12 rounded-xl border-[0.5px] border-[#E9430F] bg-opacity-30  bg-[#E9430F4D]  px-1 py-1">
            <div className="flex">
              <div className="w-[90%] xl:h-14">
                <h4 className="text-[#E9430F] opacity-90 px-3 font-medium text-sm md:text-xl pb-1">
                  Phone number
                </h4>
                <input
                  type="text"
                  className="w-11/12 px-3 lg:mb-1 bg-transparent text-white placeholder:text-white outline-none"
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
          <Link href="/passcode">
            <button
              className=" xl:w-10/12 bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl w-full text-xl font-medium py-3.5 px-8 text-[#ffffff] opacity-90 mt-10"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </div>
        {/* <div className=""></div> */}
        <div className="w-11/12  h-48 relative md:w-full bg-cover mx-auto">
          <Image
            className="w-full md:mt-14"
            src="/image/imageForMail2.png"
            fill
            alt="imageForMail"
          />
        </div>
      </div>
    </section>
  );
};

export default EnterNumberBody;
