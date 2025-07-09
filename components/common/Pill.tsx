import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({
  label,
  isActive = false,
  onClick,
  image,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition cursor-pointer ${
          isActive
            ? "bg-[34967C] text-white"
            : "bg-white text-[#34967C] border-[#34967C]"
        } hover:bg-[#34967C] hover:text-white`}
      >
        {label}
        {image && (
          <img
            src={image}
            alt={label}
            className="w-4 h-4 object-cover rounded-full"
            color="#5F5F5F"
          />
        )}
      </button>
    </>
  );
};

export default Pill;
