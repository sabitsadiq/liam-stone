import React from "react";
import { supply, supply2 } from "./constant/data";

const Supply = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 w-11/12 mx-auto px-4 md:px-6 mt-20">
        {supply.map((items) => (
          <div
            key={items.id}
            className="flex flex-col justify-center w-full min-h-[6.63rem] md:mb-4 p-7 md:py-12 md:px-8 text-start bg-blend-overlay shadow-sm rounded-xl shadow-[#5A5A5A] bg-opacity-25  bg-gradient-to-b from-[#5A5A5A] to-transparent"
          >
            <p className="font-medium text-xl text-[#ffffff] opacity-70">
              {items.title}
            </p>
            <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
              {items.figures}
            </h2>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 w-11/12 mx-auto px-4 md:px-6 mt-8">
        {supply2.map((items) => (
          <div
            key={items.id}
            className="w-full md:mb-4 p-4 md:py-9 md:px-8 border-[#ffffff] text-start bg-blend-overlay shadow-inner shadow-[#5A5A5A]  rounded-xl bg-gradient-to-b from-[#5A5A5A5A] to-transparent bg-opacity-10"
          >
            <p className="font-medium text-xl text-[#ffffff] opacity-70">
              {items.title}
            </p>
            <h2 className="font-semibold text-2xl xl:text-3xl text-[#ffffff] opacity-90">
              {items.figures}
            </h2>
            <h4 className="font-medium text-xl text-[#ffffff] opacity-70">
              {items.figure2}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supply;
