import React from "react";

const Supply = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-11/12 mx-auto px-4 md:px-6 mt-20">
      <div className="flex flex-col justify-center w-full min-h-[6.63rem] md:mb-4 p-2 border border-solid rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">
          Circulating supply
        </p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          US$132,789,890 LSBT
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full min-h-[6.63rem] md:mb-4 p-2 border- border-[0.2px] rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">
          Last price
        </p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          $132
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full min-h-[6.63rem] md:mb-4 p-2 border- border-[0.2px] rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">
          Market cap
        </p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          US$132,789,890
        </h2>
      </div>
      <div className="w-full md:mb-4 p-2 border- border-[0.2px] rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">
          Total supply
        </p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          $132,789,890 LSBT
        </h2>
        <h4 className="font-medium text-xl text-[#ffffff] opacity-70">
          $2347832020
        </h4>
      </div>
      <div className="w-full md:mb-4 p-2 border- border-[0.2px] rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">Burned</p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          $132,789,890 LSBT
        </h2>
        <h4 className="font-medium text-xl text-[#ffffff] opacity-70">
          $2347832020
        </h4>
      </div>
      <div className="w-full md:mb-4 p-2 border- border-[0.2px] rounded-xl text-start bg-blend-overlay bg-linear-gradient-[custom-gradient]">
        <p className="font-medium text-xl text-[#ffffff] opacity-70">Burned</p>
        <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
          $132,789,890
        </h2>
        <h4 className="font-medium text-xl text-[#ffffff] opacity-70">
          $2347832020LSBT
        </h4>
      </div>
    </div>
  );
};

export default Supply;
