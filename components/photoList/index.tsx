import React from "react";
import { Masonry } from "masonic";
import PhotoCard, { Photo } from "../photoCard";

interface Props {
  photos: Photo[];
}

const PhotoList: React.FC<Props> = ({ photos }) => {
  const columnWidth = 300;
  const columnGutter = 20;

  const renderPhoto = ({ index, data }: { index: number; data: Photo }) => {
    return <PhotoCard key={index} {...data} />;
  };

  return (
    <Masonry
      items={photos}
      columnWidth={columnWidth}
      columnGutter={columnGutter}
      render={renderPhoto}
    />
  );
};

export default PhotoList;
