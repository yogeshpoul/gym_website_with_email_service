import React from "react";
import { Text, Img, Heading } from "./..";

export default function Navbar({ ...props }) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1482px] items-center justify-between gap-5 md:flex-col">
        <Heading size="lg" as="h1" className="uppercase">
          Gym & Fitness
        </Heading>
        <div className="flex items-center gap-8 md:flex-col">
          <a href="/" rel="noreferrer">
            <Text as="p" className="capitalize">
              Home
            </Text>
          </a>
          <div className="flex items-center gap-2">
            <Text as="p" className="capitalize">
              Products
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[12px] w-[12px]" />
          </div>
          <a href="/" rel="noreferrer">
            <Text as="p" className="capitalize">
              About
            </Text>
          </a>
          <a href="/" rel="noreferrer" className="self-end">
            <Text as="p" className="capitalize">
              Pricing
            </Text>
          </a>
          <a href="/" className="self-start">
            <Text as="p" className="capitalize">
              BMI Calculator
            </Text>
          </a>
        </div>
      </div>
    </header>
  );
}
