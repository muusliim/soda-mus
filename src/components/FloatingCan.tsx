"use client";
import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "./SodaCan";
import { forwardRef } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: React.ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  ({
    flavor = "blackCherry",
    floatSpeed = 2,
    rotationIntensity = 2,
    floatIntensity = 2,
    floatingRange = [-0.1, -0.1],
    children,
    ...props
  }, ref) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed} // Animation speed, defaults to 1
          rotationIntensity={rotationIntensity} // XYZ rotation intensity, defaults to 1
          floatIntensity={floatIntensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={floatingRange} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
