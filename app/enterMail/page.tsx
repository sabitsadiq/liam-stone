import EnterMailIntro from "@/components/EnterMailIntro";
import EnterMailBody from "@/components/EnterMailBody";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000000] w-screen min-h-screen">
      <EnterMailIntro />
      <EnterMailBody />
    </div>
  );
};

export default page;
