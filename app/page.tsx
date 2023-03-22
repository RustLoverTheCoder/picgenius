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
  { name: "Home", href: "/" },
  { name: "Shortcase", href: "/showcase" },
  { name: "Playground", href: "/playground" },
  { name: "Pricing", href: "/pricing" },
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
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </a>
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
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500"
                      >
                        Log in
                      </a>
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
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Data to enrich your</span>
                  <span className="block text-indigo-400">online business</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full bg-gray-800" />
            </div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* 图片 */}
              <div className="w-full h-[645px] flex items-center space-x-4">
                <div className="w-[300px] h-[645px] shrink-0">
                  <Image
                    style={{
                      borderRadius: "12px",
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "300px",
                      height: "645px",
                    }}
                    src="/1.webp"
                    alt="1"
                    width={300}
                    height={645}
                    priority
                    quality={90}
                  />
                </div>
                <div className="flex-1 flex flex-col space-y-4 h-full">
                  <div className="w-full aspect-video h-[337px]">
                    <Image
                      style={{
                        borderRadius: "12px",
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                      src="/7.png"
                      alt="1"
                      width={600}
                      height={337}
                      priority
                      quality={90}
                    />
                  </div>
                  <div className="flex-1 flex items-center space-x-4">
                    <div className="w-[292px] h-[292px]">
                      <Image
                        style={{
                          borderRadius: "12px",
                          objectFit: "cover",
                          objectPosition: "top",
                          width: "100%",
                          height: "100%",
                        }}
                        src="/4.webp"
                        alt="1"
                        width={292}
                        height={292}
                        priority
                        quality={90}
                      />
                    </div>
                    <div className="w-[292px] h-[292px]">
                      <Image
                        style={{
                          borderRadius: "12px",
                          objectFit: "cover",
                          objectPosition: "top",
                          width: "100%",
                          height: "100%",
                        }}
                        src="/3.webp"
                        alt="1"
                        width={292}
                        height={292}
                        priority
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[300px] h-[645px]">
                  <Image
                    style={{
                      borderRadius: "12px",
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "300px",
                      height: "645px",
                    }}
                    src="/5.webp"
                    alt="1"
                    width={300}
                    height={645}
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-96"></div>
        <div className="">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
              Trusted by over 26,000 forward-thinking companies
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
