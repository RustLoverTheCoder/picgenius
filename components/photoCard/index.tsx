import React from "react";

export interface Photo {
  imageUrl: string;
  title: string;
}

const PhotoCard: React.FC<Photo> = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-auto rounded-lg cursor-pointer group bg-[#110f1a]">
      <img className="w-full object-cover rounded-lg" src={imageUrl} alt={title}></img>
    </div>
  );
};

export default PhotoCard;
