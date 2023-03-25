import React, { FC, Suspense } from "react";
import Header from "../header";

const HomeLayout = ({ children }: any) => {
  return (
    <div className="w-full h-auto min-h-full">
      <Header />
      <main className="mt-[60px] h-auto min-h-[calc(100vh-62px)]">
        <Suspense fallback={<></>}>{children}</Suspense>
      </main>
    </div>
  );
};

export default HomeLayout;
