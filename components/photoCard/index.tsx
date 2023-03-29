import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

export interface Photo {
  imageUrl: string
  title: string
  thumbnail?: string
}

interface PhotoCard extends Photo {
  width: number
}

const PhotoCard: React.FC<PhotoCard> = ({ imageUrl, title, thumbnail, width }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="group relative h-auto min-h-[20px] w-full cursor-pointer rounded-lg bg-base-200 overflow-hidden" onClick={() => setIsOpen(true)}>
        <Image src={imageUrl} alt={title} width={width} height={width} style={{ objectFit: 'cover' }} />
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 backdrop-blur-xl" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="my-auto mx-auto overflow-x-hidden md:overflow-x-visible">
            <div className="relative bg-[#110F1A] md:rounded-lg">
              <div className="relative">
                <div className="image-post-page relative flex w-full flex-col gap-2 overflow-auto p-6 pt-4 font-[510] text-white transition-all duration-150 md:pt-16 lg:flex-row lg:gap-8 lg:pt-6">
                  <div className="flex flex-none flex-col gap-4 md:max-w-[min(60vw)]">
                    <img src={imageUrl} alt="" className="mx-auto max-h-[80vh] max-w-[(min(100%,90vw))] rounded-lg md:max-w-[min(60vw)]" />
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
  )
}

export default PhotoCard
