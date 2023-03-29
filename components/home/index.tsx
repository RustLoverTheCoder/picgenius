'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Style from './index.module.css'
import Case from '../case'
import PhotoList from '../photoList'
import { photoList } from '@/config/home'
import Image from 'next/image'

const HomeUi = () => {
  return (
    <>
      <section className={clsx('relative flex items-center justify-center py-20 px-8 text-white md:pt-24 md:pb-32 lg:pt-48 lg:pb-56')}>
        <Image src="/home-bg.jpg" fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt='bg' />
        <div className={clsx('absolute top-0 right-0 bottom-0 left-0', Style.homeBg)}></div>
        <div className={clsx('z-10 flex flex-col items-center gap-8')}>
          <h1 className="max-w-[10.7em] text-center font-[590] leading-[1.1] max-lg:text-5xl max-md:text-3xl lg:text-[64px] ">
            让 AI 将您的想法 <br /> 变为艺术
          </h1>
          <Link href="/playground" className={clsx('flex w-auto transform items-center justify-center !rounded-xl !py-[9px] !px-4 !font-[590] transition-all md:!py-3 md:!px-6', Style.homeButton)}>
            <div className="text-black">免费开始</div>
          </Link>
        </div>
      </section>
      <div className="h-2 w-full"></div>
      <Case />
      <div className="w-full px-5 pt-2 md:px-10">
        <PhotoList photos={photoList} />
      </div>
    </>
  )
}

export default HomeUi
