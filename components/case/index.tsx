import clsx from "clsx";
import React, { useState } from "react";

interface CaseProps {}

const Case: React.FC<CaseProps> = () => {
  const activeTab = "All";
  const list = ["Animals", "Anime","Food"];
  return (
    <>
      <div className="sticky top-[60px] z-20 bg-[#05020E]">
        <div className="overflow-x-auto scrollbar-hide max-md:snap-x scroll-px-3 max-md:pb-3 max-md:border-b max-md:mb-2 border-[#1E1B26]">
          <div className="gap-3 max-md:gap-6 flex md:px-10 mt-3 md:mt-4 md:pb-4 transition-all duration-300">
            <CaseButton text="All" isActive={activeTab === "All"} />
            <div className="!w-px max-md:min-w-[1px] bg-[#1E1B26]"></div>
            {list.map((i) => (
              <CaseButton key={i} text={i} isActive={activeTab === i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface CaseButtonProps {
  text: string;
  isActive: boolean;
}

const CaseButton: React.FC<CaseButtonProps> = ({ text, isActive }) => {
  return (
    <button
      className={clsx(
        "rounded-full text-sm py-[5.5px] max-md:px-2 pl-[14px] pr-4 font-[500] flex md:flex-row gap-1 flex-none flex-col items-center justify-center max-md:snap-start max-md:first:pl-8 max-md:last:pr-8 transition-all",
        !!isActive
          ? "md:text-black md:bg-white text-white"
          : "text-[#828086] md:bg-[#261B26] bg-transparent md:hover:bg-white/80 md:hover:text-white"
      )}
    >
      <div>{text}</div>
    </button>
  );
};

export default Case;
