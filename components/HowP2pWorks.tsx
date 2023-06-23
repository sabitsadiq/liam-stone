import React from "react";

const HowP2pWorks = () => {
  return (
    <section className="w-11/12 mx-auto mt-12 text-[#ffffff] opacity-90">
      <h2 className="font-semibold text-3xl">HOW P2P works</h2>
      <div className="flex justify-between font-semibold text-2xl mt-4 2xl:mt-6 xl:w-1/4">
        <h4 className="border-b-[3px] border-[#E9420E]">Buy crypto</h4>
        <h4>Sell crypto</h4>
      </div>
      <div className="w-full grid grid-col md:grid-cols-2 xl:grid-cols-3 flex-col md:flex-row justify-between mt-4">
        <div className="mt-4">
          <h4 className="font-medium text-3xl">Place an order</h4>
          <p className="text-[#ffffff] opacity-50 w-1/2 mt-2">
            Lorem ipsum dolor sit amet consectetur. Quam neque ut venenatis
            facilisis quis duis orci pulvinar ornare.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-3xl">Pay the seller</h4>
          <p className="text-[#ffffff] opacity-50 w-2/3 mt-2">
            Lorem ipsum dolor sit amet consectetur. Quam neque ut venenatis fac
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-3xl">Get your crypto</h4>
          <p className="text-[#ffffff] opacity-50 mt-2  w-1/2">
            Lorem ipsum dolor sit amet consectetur. Quam neque ut venenatis
            facilis
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowP2pWorks;
