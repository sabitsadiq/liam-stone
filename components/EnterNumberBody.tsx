import React from "react";
import Image from "next/image";
const EnterNumberBody = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row gap-8 md:w-11/12 lg:w-3/4 xl:w-3/5 md:mx-auto md:mt-10 xl:mt-20">
        <div className="w-11/12 md:w-full bg-cover mx-auto">
          <div className="rounded-xl bg-[#E9430F4D] opacity-30  px-1 py-1">
            <div className="flex">
              <div className="w-[90%]">
                <h4 className="text-[#E9430F] opacity-90 px-3 font-medium text-sm md:text-xl pb-1">
                  Phone number
                </h4>
                <input
                  type="text"
                  className="px-3 pb-1 w-11/12  bg-transparent text-white placeholder:text-white outline-none"
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
          <button
            className="bg-gradient-to-r from-[#E9420E] to-[#FFDD55] rounded-xl w-full text-xl font-medium py-3 px-8 text-[#ffffff] opacity-90 mt-10"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="w-11/12 md:w-full bg-cover mx-auto">
          <Image
            className="w-full mt-8"
            src="/image/imageForMail2.png"
            width="100"
            height="100"
            alt="imageForMail"
          />
        </div>
      </div>
    </section>
  );
};

export default EnterNumberBody;
