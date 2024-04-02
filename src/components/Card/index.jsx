import React from "react";
import { Heading, Img } from "./..";

export default function Card({name,imageSrc}) {
  return (
    <div >
      <Img
        src={imageSrc}
        alt="workout_one"
        className="relative z-[1] h-[223px] w-full rounded-[30px] object-cover md:h-auto"
      />
      <Heading size="md" as="h1" className="text-center !font-calibri lowercase">
        {name}
      </Heading>
    </div>
  );
}
