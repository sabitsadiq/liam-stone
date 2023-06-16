import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="pt-8 w-11/12 pl-2 px-4 md:px-6 mx-auto">
      <Image src="/image/logo.png" width="100" height="100" alt="logo" />
    </div>
  );
};

export default Logo;
