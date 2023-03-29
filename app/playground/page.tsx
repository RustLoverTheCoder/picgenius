const Page = () => {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full overflow-hidden ">
      <div className="flex h-full w-[300px] flex-col space-y-2">
        <div className="flex h-auto w-full flex-col px-4 space-y-1">
          <h3 className="text-[15px] font-medium leading-[22px]">描述</h3>
          <textarea className="bg-base-200 rounded-lg outline-0 hover:outline-0" rows={6} cols={30} />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default Page
