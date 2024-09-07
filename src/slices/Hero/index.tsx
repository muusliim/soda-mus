"use client";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";

gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 0.6,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "+=0.5",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 20,
      })
      .from(
        ".hero-button",
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
        },
        "+=0.5",
      );

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#c1f8b4",
          overwrite: "auto",
          duration: 2,
          delay: 0.8,
        },
        1.5,
      )
      .fromTo(
        ".text-side-heading .split-char",
        {
          opacity: 0,
          x: -50,
          y: -50,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.2,
          overwrite: "auto",
        },
      )
      .fromTo(
        ".text-side-body",
        {
          opacity: 0,
          x: -50,
          y: -50,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.2,
          overwrite: "auto",
        },
      );
  });

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-8xl font-black uppercase leading-[.9] text-orange-500 max-md:ml-1 md:text-[9rem  max-md:pl-3 lg:text-[12rem]">
              <TextSplitter
                text={asText(slice.primary.heading)}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <p className="hero-subheading font-lora mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              {asText(slice.primary.subheading)}
            </p>
            <p className="hero-body font-lora mt-3 text-2xl font-normal text-sky-950">
              {asText(slice.primary.body)}
            </p>
            <Button
              buttonText={slice.primary.button_text}
              buttonLink={slice.primary.button_link}
              className="hero-button mt-12"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <PrismicNextImage
            className="w-full md:hidden"
            field={slice.primary.cans_image}
          />
          <div>
            <h2 className="text-side-heading font-lora text-balance text-6xl max-md:text-5xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text={asText(slice.primary.second_heading)} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              <PrismicRichText field={slice.primary.second_body} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
