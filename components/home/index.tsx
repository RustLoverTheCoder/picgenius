"use client";

import clsx from "clsx";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import HomeLayout from "../layout";
import Style from "./index.module.css";

const HomeUi = () => {
  return (
    <HomeLayout>
      <section
        className={clsx(
          "flex justify-center items-center text-white py-20 md:pt-24 md:pb-32 lg:pt-48 lg:pb-56 relative px-8",
          Style.homeBg
        )}
      >
        <div className="flex flex-col gap-8 items-center">
          <h1 className="max-md:text-3xl max-lg:text-5xl lg:text-[64px] max-w-[10.7em] leading-[1.1] text-center font-[590] ">
            根据你的想象力 <br /> 创建艺术
          </h1>
          <Link
            href="/playground"
            className={clsx(
              "flex w-auto justify-center items-center transform transition-all !py-[9px] md:!py-3 !px-4 md:!px-6 !rounded-xl !font-[590]",
              Style.homeButton
            )}
          >
            <div className="text-black">免费开始</div>
          </Link>
        </div>
      </section>
    </HomeLayout>
  );
};

export default HomeUi;
