import EnterNumberBody from "@/components/EnterNumberBody";
import EnterNumberIntro from "@/components/EnterNumberIntro";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] w-screen min-h-screen">
      <EnterNumberIntro />
      <EnterNumberBody />
    </div>
  );
};

export default page;
