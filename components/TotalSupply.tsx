import React from "react";

const TotalSupply = () => {
  return (
    <div className="w-11/12 mx-auto mt-14 md:mt-24 px-4 md:p-6">
      <div className="border border-thin rounded-xl">
        <h2 className="text-[#ffffff] opacity-90 font-semibold text-4xl mt-6 md:mx-4 px-6 py-3">
          Total supply
        </h2>
        <div className="overflow-x-auto md:m-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left  text-xl leading-7 font-medium text-[#ffffff] opacity-70 tracking-wider">
                  LSBT Holding(USD)
                </th>
                <th className="px-6 py-3 text-left  text-xl leading-7 font-medium text-[#ffffff] opacity-70 tracking-wider">
                  Discount on LSBT trading fees
                </th>
                <th className="px-6 py-3 text-left  text-xl leading-7 font-medium text-[#ffffff] opacity-70 tracking-wider">
                  Discount on LSBT OTC
                </th>
                <th className="px-6 py-3 text-left  text-xl leading-7 font-medium text-[#ffffff] opacity-70 tracking-wider">
                  Other privilege
                </th>
              </tr>
            </thead>
            <tbody className="text-[#ffffff] font-medium text-xl opacity-90">
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
              <tr className="font-medium text-xl">
                <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                <td className="px-6 py-4 whitespace-no-wrap">3.00%</td>
                <td className="px-6 py-4 whitespace-no-wrap">0.0000%</td>
                <td className="px-6 py-4 whitespace-no-wrap">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:justify-between mt-10">
        <button className="bg-gradient-to-r from-orange-600 to-yellow-300 opacity-90 rounded-xl text-[#FFFFFF] md:self-center font-medium text-2xl py-4 px-16 border-transparent">
          Unstake
        </button>
        <button className="bg-gradient-to-r from-orange-600 to-yellow-300 opacity-90 rounded-xl text-[#FFFFFF] md:self-center font-medium text-2xl py-4 px-20">
          Stake
        </button>
      </div>
    </div>
  );
};

export default TotalSupply;
