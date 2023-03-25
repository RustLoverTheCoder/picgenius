import React, { FC } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header: FC = () => {
  return (
    <header
      className="z-40 flex items-start justify-between gap-4 bg-[#05020E] border-gray-900 h-[60px] px-5 py-2.5 fixed top-0 left-0 w-full max-w-full"
      style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,.1)" }}
    >
      <div className="flex items-center h-full md:gap-4">
        <div
          className="border border-[#2A2832] flex-shrink md:w-[999rem] flex-grow items-start rounded-lg
          text-[#F3F2F3] self-start ml-2 font-normal transition-all
          md:max-w-[333px] bg-[#05020E]"
        >
          <div className="flex items-center gap-2 px-0.5">
            <div className="pointer-events-none flex items-center pl-2 h-9 shrink-0">
              <MagnifyingGlassIcon className="w-4 h-4 inline-block shrink-0 text-[#828086]"></MagnifyingGlassIcon>
            </div>
            <input
              id="search"
              placeholder="搜索"
              className="placeholder:text-gray-50 flex-grow min-w-[10px] w-[100%] bg-transparent outline-none text-[15px]"
            />
          </div>
        </div>
      </div>
      <div className="flex-none flex justify-center items-center">
        <Link
          href="/login"
          className="border border-[#2A2832] hover:border-white text-white h-9 px-3 py-1 rounded-md transform transition-all w-[100px] flex justify-center items-center"
        >
          <div className="text-sm">登录</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
