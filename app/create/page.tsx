import CreatePage from "@/components/create"

const Page = () => {
  return (
    <div className="relative flex h-[calc(100vh-62px)] w-full min-w-[1200px] overflow-hidden">
      <div className="fixed top-0 left-0 z-[-1] h-full w-full">
        <div className="h-full w-full bg-[#1b1a19] backdrop-blur-xl"></div>
        <div
          className="fixed left-[-89px] top-[263px] h-[819px] w-[819px] rounded-full"
          style={{ background: 'linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)', filter: 'blur(160px)' }}
        />
        <div
          className="fixed left-[943px] top-[115px] h-[512px] w-[512px] rounded-full"
          style={{ background: 'linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)', filter: 'blur(160px)' }}
        />
      </div>
      <CreatePage />
    </div>
  )
}

export default Page
