"use client";

import clsx from "clsx";
import Link from "next/link";
import Style from "./index.module.css";
import Case from "../case";
import PhotoList from "../photoList";
import { Photo } from "../photoCard";

const HomeUi = () => {
  const photoList: Photo[] = [
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/5d67b582-b942-4ee0-b8ea-de640768ecdb/0_1_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/5d67b582-b942-4ee0-b8ea-de640768ecdb/0_1_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/d446162c-e1a6-45eb-abef-0f519bd095b4/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/d446162c-e1a6-45eb-abef-0f519bd095b4/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/999fb4fa-0aaf-417f-9970-664017413d71/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/999fb4fa-0aaf-417f-9970-664017413d71/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/40c9ab6a-f4fc-4519-96c2-7a258cd73131/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/40c9ab6a-f4fc-4519-96c2-7a258cd73131/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/cc3eba70-5598-47a8-af8e-abe23e414105/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/cc3eba70-5598-47a8-af8e-abe23e414105/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/46268e70-991e-4bd6-a8f8-c0caed6ed527/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/46268e70-991e-4bd6-a8f8-c0caed6ed527/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/6e7c6a2f-4ba1-4809-b857-b562620dd5e6/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/6e7c6a2f-4ba1-4809-b857-b562620dd5e6/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/17ade6fe-3469-4765-b161-2d380b7200bd/0_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/17ade6fe-3469-4765-b161-2d380b7200bd/0_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/279124aa-537d-4193-ac14-9e7389869480/0_3_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/279124aa-537d-4193-ac14-9e7389869480/0_3_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/f891823f-e080-4eac-9e26-a3238dd9b895/0_2_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/f891823f-e080-4eac-9e26-a3238dd9b895/0_2_32_N.webp",
    },
    {
      title: "1",
      imageUrl:
        "https://cdn.midjourney.com/9e77177a-5294-4ce6-8953-e632a24fb827/0_2_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/9e77177a-5294-4ce6-8953-e632a24fb827/0_2_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/5d67b582-b942-4ee0-b8ea-de640768ecdb/0_1_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/5d67b582-b942-4ee0-b8ea-de640768ecdb/0_1_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/d446162c-e1a6-45eb-abef-0f519bd095b4/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/d446162c-e1a6-45eb-abef-0f519bd095b4/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/999fb4fa-0aaf-417f-9970-664017413d71/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/999fb4fa-0aaf-417f-9970-664017413d71/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/40c9ab6a-f4fc-4519-96c2-7a258cd73131/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/40c9ab6a-f4fc-4519-96c2-7a258cd73131/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/cc3eba70-5598-47a8-af8e-abe23e414105/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/cc3eba70-5598-47a8-af8e-abe23e414105/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/46268e70-991e-4bd6-a8f8-c0caed6ed527/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/46268e70-991e-4bd6-a8f8-c0caed6ed527/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/6e7c6a2f-4ba1-4809-b857-b562620dd5e6/grid_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/6e7c6a2f-4ba1-4809-b857-b562620dd5e6/grid_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/17ade6fe-3469-4765-b161-2d380b7200bd/0_0_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/17ade6fe-3469-4765-b161-2d380b7200bd/0_0_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/279124aa-537d-4193-ac14-9e7389869480/0_3_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/279124aa-537d-4193-ac14-9e7389869480/0_3_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/f891823f-e080-4eac-9e26-a3238dd9b895/0_2_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/f891823f-e080-4eac-9e26-a3238dd9b895/0_2_32_N.webp",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.midjourney.com/9e77177a-5294-4ce6-8953-e632a24fb827/0_2_640_N.webp",
      thumbnail:
        "https://cdn.midjourney.com/9e77177a-5294-4ce6-8953-e632a24fb827/0_2_32_N.webp",
    },
  ];
  return (
    <>
      <section
        className={clsx(
          "flex justify-center items-center text-white py-20 md:pt-24 md:pb-32 lg:pt-48 lg:pb-56 relative px-8",
          Style.homeBg
        )}
      >
        <div className="flex flex-col gap-8 items-center">
          <h1 className="max-md:text-3xl max-lg:text-5xl lg:text-[64px] max-w-[10.7em] leading-[1.1] text-center font-[590] ">
            让 AI 将您的想法 <br /> 变为艺术
          </h1>
          <Link
            href="/playground"
            className={clsx(
              "flex w-auto justify-center items-center transform transition-all !py-[9px] md:!py-3 !px-4 md:!px-6 !rounded-xl !font-[590]",
              Style.homeButton
            )}
          >
            <div className="text-black">免费开始</div>
          </Link>
        </div>
      </section>
      <div className="w-full h-2"></div>
      <Case />
      <div className="w-full pt-2 px-5 md:px-10">
        <PhotoList photos={photoList} />
      </div>
    </>
  );
};

export default HomeUi;
