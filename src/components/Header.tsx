import React from "react";
import { Logo } from "./Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <div className="relative pl-10">
        <Logo className="z-10 h-20 cursor-pointer text-sky-800" />
        <div className="absolute  top-0 z-10 h-[9.5px] w-[7px] rounded-md translate-x-[-46%] bg-[#FDE047]"></div>
      </div>
    </header>
  );
}
