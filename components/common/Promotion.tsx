import React from "react";

const Promotion: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-[#34967C] text-white p-1">
      <img src="/assets/icons/CaseMinimalistic.png" alt="Case" className="w-5"/>
      <p>Overseas trip? Get the latest information and travel guides</p>
      <button className="bg-black text-white py-1 px-4 rounded-full cursor-pointer hover:opacity-80">
        More Info
      </button>
    </div>
  );
};

export default Promotion;
