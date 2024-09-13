'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832]"
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-lora font-black uppercase sm:leading-3 md:leading-[.7]">
        <div className="text-[34vw]">вкус</div>
        <div className="text-[17vw] md:text-[14vw]">который</div>
        <div className="text-[24vw]">Радует</div>
      </h2>
    </section>
  );
};

export default BigText;
