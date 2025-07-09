import React from "react";
import { HERO_BACKGROUND } from "@/constants";

const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-[500px] w-full flex flex-col justify-center items-center text-center text-white"
    style={{backgroundImage: `url(${HERO_BACKGROUND})`}}
    >
      <h1 className="text-8xl mb-6 leading-tight font-semibold">
        Find your favorite
        <br />
        place here!
      </h1>
      <p className="text-lg">The best prices for over 2 million properties worldwide</p>
    </div>
  );
};

export default Hero;
