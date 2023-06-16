import React from "react";
import Image from "next/image";
const AmountSection = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 justify-between text-[#FFFFFF] opacity-50">
        <div className="w-10/12 md:block md:w-1/2  lg:w-2/5 xl:w-1/3">
          <h4 className="mb-4">Amount</h4>
          <div className="flex rounded-xl justify-between bg-[#5A5A5A] px-4 py-4 md:py-2 opacity-17 gap-2">
            <h4>Enter amount</h4>
            <h4>CNY</h4>
            <h4 className="text-[#E9420E]">Search</h4>
          </div>
        </div>
        <div className="w-56 md:w-full md:flex gap-6">
          <div className="lg:w-32 xl:w-44">
            <h4 className="mb-4">FIAT</h4>
            <div className="flex items-center rounded-xl bg-[#5A5A5A] xl:w-44 justify-between px-3 py-2 opacity-17">
              <div className="flex gap-3 items-center">
                <Image
                  src="/image/EPRO - EthereumPro.png"
                  className="w-full h-[50%] xl:w-fit"
                  width="5"
                  height="5"
                  alt="EPRO"
                />
                <h4>CNY</h4>
              </div>
              <Image
                src="/image/arrow.png"
                width="10"
                height="10"
                alt="arrow"
              />
            </div>
          </div>
          <div className="w-56 mt-4 md:mt-0 md:w-fit">
            <h4 className="mb-4">Payment</h4>
            <div className="flex items-center xl:w-52 rounded-xl bg-[#5A5A5A] gap-4 px-3 py-2 opacity-17 justify-between">
              <h4>All payment</h4>
              <Image
                src="/image/arrow.png"
                width="10"
                height="10"
                alt="arrow"
              />
            </div>
          </div>
          <div className="mt-4 md:mt-0 xl:w-56">
            <h4 className="mb-4">Available regions</h4>
            <div className="flex items-center justify-between rounded-xl bg-[#5A5A5A] px-3 py-2 opacity-17 gap-4">
              <h4>All regions</h4>
              <Image
                src="/image/arrow.png"
                width="10"
                height="10"
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex items-end mt-4 w-40 xl:w-44 justify-between">
            <div className="flex gap-4 mb-2">
              <h4>Filter</h4>
              <Image
                src="/image/arrow.png"
                className="flex self-center"
                width="10"
                height="10"
                alt="arrow"
              />
            </div>
            <div className=" bg-[#E9420E] opacity-17 px-3 py-2  rounded-xl">
              <div>Not Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-12">
        <table className="table-auto w-full">
          <thead className="text-[#ffffff] opacity-50">
            <tr className="flex gap-16 xl:w-full xl:justify-between">
              <th scope="col" className="py-3 text-left">
                Advertisers (Completion rate)
              </th>
              <th scope="col" className="w-[10.5rem] py-3 text-left">
                Price
              </th>
              <th scope="col" className="py-3 text-left">
                Limit/Available
              </th>
              <th
                scope="col"
                className="flex justify-between gap-20 xl:gap-12 py-3 text-left ml-28  xl:ml-32"
              >
                <span className="w-[5.5rem] xl:w-[7.5rem]">Payment</span>
                <span className="flex gap-2">
                  <span>Trade</span>
                  <span className="flex justify-center self-start bg-[#0EE9B4] rounded-lg text-[#FFFFFF] opacity-90 font-medium text-xl w-20">
                    0 fee
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="flex gap-20  xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex py-2 gap-2 self-center whitespace-nowrap text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 text-xs self-center">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex 2xl:ml-0 justify-between gap-12 py-2 whitespace-nowrap font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
            <tr className="flex gap-20  xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex gap-2 py-2 whitespace-nowrap self-center text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 text-xs self-center">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex justify-between gap-12 py-2 whitespace-nowrap  font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
            <tr className="flex gap-20 xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex gap-2 py-2 self-center whitespace-nowrap text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 self-center text-xs">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex justify-between gap-12 py-2 whitespace-nowrap  font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
            <tr className="flex gap-20  xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex gap-2 py-2 self-center whitespace-nowrap text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 self-center text-xs">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex justify-between gap-12 py-2 whitespace-nowrap font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
            <tr className="flex gap-20  xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex gap-2 py-2 whitespace-nowrap self-center text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 self-center text-xs">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex justify-between gap-12 py-2 whitespace-nowrap font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
            <tr className="flex gap-20  xl:justify-between">
              <td className="block py-2 whitespace-nowrap text-[#FFFFFF] opacity-50">
                <span className="flex gap-2 xl:font-bold xl:text-xl">
                  <Image
                    src="/image/BTCN - Bitcoin Networks.png"
                    width="20"
                    height="20"
                    alt="bitcoin"
                  />
                  BTC-TINYGRL
                </span>
                <span className="font-medium text-base">
                  47 orders|100% completion
                </span>
              </td>
              <td className="flex gap-2 py-2 self-center whitespace-nowrap text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-xl">
                $132,789,890
                <span className="text-[#FFFFFF] opacity-50 self-center text-xs">
                  CRC
                </span>
              </td>
              <td className="py-2 whitespace-nowrap">
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Available
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    O.OO189384 BTC
                  </span>
                </span>
                <span className="flex gap-2">
                  <span className="text-[#FFFFFF] opacity-50 font-medium text-base">
                    Limit
                  </span>
                  <span className="text-[#FFFFFF] opacity-90 xl:font-semibold xl:text-lg">
                    $O.OO189 - $30,000.00
                  </span>
                </span>
              </td>
              <td className="flex justify-between gap-12 py-2 whitespace-nowrap font-medium text-xl">
                <span className="self-center text-[#FFFFFF] opacity-90">
                  Bank tranfer
                </span>
                <span className="bg-[#E99F0E] rounded-lg w-32 flex justify-center items-center py-2 text-[#FFFFFF] opacity-90">
                  BUY USDT
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AmountSection;
