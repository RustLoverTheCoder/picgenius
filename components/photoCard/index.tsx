import React, { useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useInViewport } from "ahooks";
import clsx from "clsx";

export interface Photo {
  imageUrl: string;
  title: string;
  thumbnail?: string;
}

const PhotoCard: React.FC<Photo> = ({ imageUrl, title, thumbnail }) => {
  const imgWrpRef = useRef(null);
  const [inViewport] = useInViewport(imgWrpRef, {
    rootMargin: "100px",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!!inViewport) {
      setShow(true);
    }
  }, [inViewport]);

  return (
    <>
      <div
        className="relative w-full h-auto rounded-lg cursor-pointer group bg-[#110f1a]"
        onClick={() => setIsOpen(true)}
        ref={imgWrpRef}
      >
        <Transition
          show={show}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            className={clsx(
              "w-full object-cover rounded-lg z-10 transition-all opacity-100"
            )}
            src={imageUrl}
            alt={title}
          />
        </Transition>
        <noscript>
          <img
            className={clsx(
              "w-full object-cover rounded-lg z-10 transition-all opacity-100"
            )}
            src={imageUrl}
            alt={title}
          />
        </noscript>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 backdrop-blur-xl" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="my-auto mx-auto overflow-x-hidden md:overflow-x-visible">
            <div className="relative md:rounded-lg bg-[#110F1A]">
              <div className="relative">
                <div className="font-[510] flex flex-col lg:flex-row pt-4 p-6 md:pt-16 lg:pt-6 gap-2 lg:gap-8 w-full relative text-white overflow-auto transition-all duration-150 image-post-page">
                  <div className="flex flex-col gap-4 flex-none md:max-w-[min(60vw)]">
                    <img
                      src={imageUrl}
                      alt=""
                      className="rounded-lg mx-auto max-w-[(min(100%,90vw))] md:max-w-[min(60vw)] max-h-[80vh]"
                    />
                  </div>
                  {/* <div className="flex flex-col justify-between md:pl-0 flex-grow py-2 md:py-8">
                    <div className="max-w-[min(400px,85vw)]">123</div>
                  </div> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default PhotoCard;
