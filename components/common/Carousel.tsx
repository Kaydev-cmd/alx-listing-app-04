import React from "react";
import { LOGOS } from "@/constants";

const Carousel: React.FC = () => {
  return (
    <div className="flex justify-around items-center p-4">
      {LOGOS.map((logo, index) => (
        <img
          key={index}
          src={logo.image}
          alt={logo.alt}
          className="w-6 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Carousel;
