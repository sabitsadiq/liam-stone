import React from "react";
import Link from "next/link";
type BackBtnProps = {
  location: string;
};
const BackBtn = ({ location }: BackBtnProps) => {
  return (
    <Link
      href={`${location}`}
      className="block font-medium xl:text-xl text-white text-sm"
    >
      Back
    </Link>
  );
};

export default BackBtn;
