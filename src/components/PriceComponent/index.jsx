import React from "react";
import { Button, Heading, Text } from "./..";

export default function PriceComponent({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center">
        <Heading size="lg" as="h1" className="self-end uppercase !text-gray-900">
          Monthly Plan
        </Heading>
        <Heading as="h2" className="mt-[18px] uppercase !text-lime-800">
          ₹ 699/month
        </Heading>
        <Heading as="h2" className="mt-[5px] capitalize !text-black-900">
          <span className="font-medium text-black-900">training charges excluded</span>
          <span className="text-black-900">&nbsp;</span>
        </Heading>
        <Text size="s" as="p" className="mt-[31px] capitalize">
          viewe details
        </Text>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center justify-center border-2 border-solid border-black-900 bg-white-A700 p-[26px] sm:p-5">
        <Heading size="lg" as="h2" className="mt-[15px] uppercase !text-gray-900">
          Monthly Plan
        </Heading>
        <Heading as="h2" className="mt-[18px] uppercase !text-lime-800">
          ₹ 699/month
        </Heading>
        <Heading as="h2" className="mt-[5px] capitalize !text-black-900">
          <span className="font-medium text-black-900">training charges excluded</span>
          <span className="text-black-900">&nbsp;</span>
        </Heading>
        <Button shape="square" className="mb-[15px] mt-[17px] min-w-[277px] font-medium capitalize sm:px-5">
          viewe details
        </Button>
      </div>
    </div>
  );
}
