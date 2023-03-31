import {} from 'react'
import Image from 'next/image'

const CreatePage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="container flex items-center justify-between">
        <div className="relative flex w-[465px] flex-col">
          <h1 className="text-center text-5xl font-semibold leading-[60px]">请写出AI图像的prompt</h1>
          <form className="mt-6 mb-2.5 w-full rounded-md bg-white">
            <textarea maxLength={480} placeholder="请写您的咒语prompt" className="w-full resize-none rounded-md bg-[unset] py-3 px-6 text-[#111] outline-none" />
          </form>
          <button className="h-10 w-full rounded-md bg-primary-100">
            <div className="text-sm font-semibold text-white">创建</div>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[33vh] w-[33vh] overflow-hidden rounded-xl bg-base-200">
            <Image src="https://cdn.midjourney.com/5d67b582-b942-4ee0-b8ea-de640768ecdb/0_1_640_N.webp" alt="grid1" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="relative h-[33vh] w-[33vh] overflow-hidden rounded-xl bg-base-200">
            <Image src="https://cdn.midjourney.com/d446162c-e1a6-45eb-abef-0f519bd095b4/grid_0_640_N.webp" alt="grid1" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="relative h-[33vh] w-[33vh] overflow-hidden rounded-xl bg-base-200">
            <Image src="https://cdn.midjourney.com/999fb4fa-0aaf-417f-9970-664017413d71/grid_0_640_N.webp" alt="grid1" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="relative h-[33vh] w-[33vh] overflow-hidden rounded-xl bg-base-200">
            <Image src="https://cdn.midjourney.com/40c9ab6a-f4fc-4519-96c2-7a258cd73131/grid_0_640_N.webp" alt="grid1" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
