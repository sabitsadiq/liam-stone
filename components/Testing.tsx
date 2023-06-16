import React from "react";

const Testing = () => {
  return (
    <div className="pt-8 w-11/12 pl-2 px-4 md:px-6 mx-auto bg-[#1E1E1E] h-screen text-[#ffffff] opacity-70">
      <h4 className="font-semibold text-4xl w-full md:w-1/2 xl:w-[51.666667%]">
        Be in the know, stay ahead of the curve.
      </h4>
      <ul className="font-medium text-xl mt-4">
        <li className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="md:self-center">White paper liamstone bank</span>
          <span className="block md:inline-block bg-[#E9420E] rounded-xl justify-center w-fit px-3 py-2 my-4">
            DownLoad
          </span>
        </li>
        <li className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="md:self-center">Liamstone services</span>
          <span className="block md:inline-flex bg-[#E9420E] rounded-xl w-fit px-4 py-2 my-4">
            Download
          </span>
        </li>
        <li className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="md:self-center">Pitcj deck liamstone bank</span>
          <span className="block md:inline-flex bg-[#E9420E] rounded-xl w-fit px-4 py-2 my-4">
            Download
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Testing;
