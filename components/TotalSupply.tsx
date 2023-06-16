import React from "react";

const TotalSupply = () => {
  return (
    <div className="w-11/12 mx-auto mt-14 md:mt-24 px-4 md:p-6">
      <div className="border border-thin rounded-xl">
        <h2 className="text-[#ffffff] opacity-90 font-semibold text-4xl px-6 py-3">
          Total supply
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto m-4">
            <thead className="text-[#ffffff] opacity-70">
              <tr className="flex justify-between gap-38 font-medium text-xl text-start">
                <th scope="col" className="px-6 py-3 text-left">
                  LSBT Holding(USD)
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Discount on LSBT trading fees
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Discount on LSBT OTC
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Other privilege
                </th>
              </tr>
            </thead>
            <tbody className="text-[#ffffff] font-medium text-xl opacity-90">
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
              <tr className="flex justify-between gap-64">
                <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                <td className="px-6 py-2 whitespace-nowrap">3.00%</td>
                <td className="px-6 py-2 whitespace-nowrap">0.0000%</td>
                <td className="px-6 py-2 whitespace-nowrap">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalSupply;
