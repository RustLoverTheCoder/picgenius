'use client'
import clsx from 'clsx'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface CaseProps {}

const Case: React.FC<CaseProps> = () => {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab') || 'all'
  const list = [
    {
      id: 'animals',
      title: 'Animals',
    },
    {
      id: 'anime',
      title: 'Anime',
    },
    {
      id: 'food',
      title: 'Food',
    },
  ]
  return (
    <>
      <div className="sticky top-[60px] z-20 bg-base-100">
        <div className="scrollbar-hide scroll-px-3 overflow-x-auto border-[#1E1B26] max-md:mb-2 max-md:snap-x max-md:border-b max-md:pb-3">
          <div className="mt-3 flex gap-3 transition-all duration-300 max-md:gap-6 md:mt-4 md:px-10 md:pb-4">
            <CaseButton text="All" isActive={activeTab === 'all'} />
            <div className="!w-px bg-[#1E1B26] max-md:min-w-[1px]"></div>
            {list.map((i) => (
              <CaseButton key={i.id} text={i.title} isActive={activeTab === i.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

interface CaseButtonProps {
  text: string
  isActive: boolean
}

const CaseButton: React.FC<CaseButtonProps> = ({ text, isActive }) => {
  return (
    <Link
      href={`/?tab=${text.toLowerCase()}`}
      className={clsx(
        'flex flex-none flex-col items-center justify-center gap-1 rounded-full py-[5.5px] pl-[14px] pr-4 text-sm font-[500] transition-all max-md:snap-start max-md:px-2 max-md:first:pl-8 max-md:last:pr-8 md:flex-row',
        !!isActive ? 'text-white md:bg-white md:text-black' : 'bg-transparent text-[#828086] md:bg-base-200 md:hover:bg-white/80 md:hover:text-white'
      )}
    >
      <div>{text}</div>
    </Link>
  )
}

export default Case
