const Page = () => {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full overflow-hidden border-t border-[#3F3F46]">
      <div className="relative flex w-1/2 items-center justify-center">
        <div className="flex w-[66%] flex-col items-center justify-center rounded-2xl p-5 shadow bg-base-200">
          <h1 className="text-3xl font-medium">描述你的艺术</h1>
          <h3 className="text-base">人物，镜头，风格...</h3>
          <div className="flex flex-col space-y-2 py-5">
            <div className="min-h-11 flex items-center gap-[5px]">
              <div className="flex-1 bg-[#f2f2ee]">
                <input type="text" placeholder="请输入您的描述" className="h-11 w-full bg-transparent rounded-lg" />
              </div>
              <div className="h-11 w-11"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

export default Page
