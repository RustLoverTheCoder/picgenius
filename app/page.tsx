"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import clsx from "clsx";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "展示", href: "/showcase" },
  { name: "探索", href: "/playground" },
  { name: "价格", href: "/pricing" },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-auto min-h-screen">
      <div className="absolute top-0 right-0 left-0 h-screen flex justify-center items-center">
        <div className={clsx(styles.center)}></div>
      </div>
      <div className="bg-transparent">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-y-0 h-full w-full"
            aria-hidden="true"
          ></div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <Popover>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link href="/">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                    <span className="inline-flex rounded-md shadow">
                      <Link
                        href="/login"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500"
                      >
                        Log in
                      </Link>
                    </span>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/login"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                    >
                      登录
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">通过 AI 创造令人惊叹的艺术</span>
                  {/* <span className="block text-indigo-400">o</span> */}
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
                  发挥你的想象里，探索ai在艺术的潜力
                </p>
                <div className="mt-10 md:flex items-center max-w-lg mx-auto flex justify-center">
                  <Link
                    href="/playground"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500"
                  >
                    免费尝试
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6"></div>
          </div>
        </div>
        <div className="w-full h-96"></div>
      </div>
    </main>
  );
}
