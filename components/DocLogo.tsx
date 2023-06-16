import React from "react";
import Image from "next/image";
const DocLogo = () => {
  return (
    <div className="pt-8 w-11/12 pl-2 px-4 md:px-6 mx-auto">
      <Image src="/image/Docs.png" width="100" height="100" alt="doclogo" />
    </div>
  );
};

export default DocLogo;
