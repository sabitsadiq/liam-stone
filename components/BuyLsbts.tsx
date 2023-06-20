import React from "react";

const BuyLsbts = () => {
  return (
    <div className="w-11/12 mx-auto mt-12 md:mt-24 px-4 md:p-6">
      <h1 className="text-[#ffffff] opacity-90 font-semibold text-4xl py-3">
        BUY AND BURN
      </h1>
      <p className="text-[#ffffff] opacity-70 font-light md:text-xl xl:w-1/2">
        Lorem ipsum dolor sit amet consectetur. Quam neque ut venenatis
        facilisis quis duis orci pulvinar ornare. Ultricies et pellentesque
        varius quis a vitae egestas metus.
      </p>
      <div className="mt-14 md:mt-24">
        <div className="border border-thin rounded-xl">
          <h1 className="text-[#ffffff] opacity-90 font-medium text-5xl mt-6 md:mx-4 px-6 py-3">
            Burn transaction
          </h1>
          <div className="overflow-x-auto md:m-4">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-[#ffffff] opacity-70 text-xl leading-8 font-medium tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-[#ffffff] opacity-70 text-xl leading-8 font-medium tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-[#ffffff] opacity-70 text-xl leading-8 font-medium tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ffffff] opacity-90 font-medium text-xl">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                  <td className="flex flex-col px-6 py-4 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123,3494</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                  <td className="flex flex-col px-6 py-4 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123,3494</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                  <td className="flex flex-col px-6 py-4 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123,3494</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                  <td className="flex flex-col px-6 py-4 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123,3494</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap">$2347</td>
                  <td className="flex flex-col px-6 py-4 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">123,3494</td>
                </tr>
              </tbody>
            </table>
            {/* <table className="table-fixed m-6">
              <thead className="text-[#ffffff] opacity-70">
                <tr className="text-sm text-start flex justify-between gap-4">
                  <th scope="col" className="px-6 py-3 text-left">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Ammount
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#ffffff] opacity-90 font-medium text-xl">
                <tr className="flex justify-between gap-72">
                  <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                  <td className="flex flex-col px-6 py-2 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">123,3494</td>
                </tr>
                <tr className="flex justify-between gap-72">
                  <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                  <td className="flex flex-col px-6 py-2 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">123,3494</td>
                </tr>
                <tr className="flex justify-between gap-72">
                  <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                  <td className="flex flex-col px-6 py-2 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">123,3494</td>
                </tr>
                <tr className="flex justify-between gap-72">
                  <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                  <td className="flex flex-col px-6 py-2 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">123,3494</td>
                </tr>
                <tr className="flex justify-between gap-72">
                  <td className="px-6 py-2 whitespace-nowrap">$2347</td>
                  <td className="flex flex-col px-6 py-2 whitespace-nowrap text-[#E9420E]">
                    <span>0x4j5nfm39494i2u4uwiejw9332</span>
                    <span>ek39o3e jwdkwdmwoiw2340</span>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">123,3494</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyLsbts;
