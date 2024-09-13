import CircleText from "./CircleText";
import { IzziLogo } from "./IzziLogo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <div className="relative">
          <IzziLogo />
          <div className="absolute top-0 z-10 h-[9.5px] w-[7px] translate-x-[-46%] rounded-md bg-[#FEE832]"></div>
        </div>
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
}
