import React from "react";
import { Logo } from "./Logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Logo className="h-20 z-10 cursor-pointer text-sky-800"/>
    </header>
  );
}
