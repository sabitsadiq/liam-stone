import React from "react";
import DocLogo from "@/components/DocLogo";
import Testing from "@/components/Testing";
const page = () => {
  return (
    <div className="w-full bg-[#1E1E1E]">
      <DocLogo />
      {/* <NewDoc/> */}
      <Testing />
    </div>
  );
};

export default page;
