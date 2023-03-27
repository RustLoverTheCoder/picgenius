import { FC } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header: FC = () => {
  return (
    <header
      className="fixed top-0 left-0 z-40 flex h-[60px] w-full max-w-full items-start justify-between gap-4 border-gray-900 bg-base-100 px-5 py-2.5"
      style={{ boxShadow: '0 1px 8px 0 rgba(30, 31, 34,.1)' }}
    >
      <div className="flex h-full items-center md:gap-4">
        <div className="ml-2 flex-shrink flex-grow items-start self-start rounded-lg border border-[#2A2832] bg-base-100 font-normal text-[#F3F2F3] transition-all md:w-[999rem] md:max-w-[333px]">
          <div className="flex items-center gap-2 px-0.5">
            <div className="pointer-events-none flex h-9 shrink-0 items-center pl-2">
              <MagnifyingGlassIcon className="inline-block h-4 w-4 shrink-0 text-[#828086]"></MagnifyingGlassIcon>
            </div>
            <input id="search" placeholder="搜索" className="w-[100%] min-w-[10px] flex-grow bg-transparent text-[15px] outline-none placeholder:text-gray-50" />
          </div>
        </div>
      </div>
      <div className="flex flex-none items-center justify-center">
        <Link href="/login" className="flex h-9 w-[100px] transform items-center justify-center rounded-md border border-[#2A2832] px-3 py-1 text-white transition-all hover:border-white">
          <div className="text-sm">登录</div>
        </Link>
      </div>
    </header>
  )
}

export default Header
