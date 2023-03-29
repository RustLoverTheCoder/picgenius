import React from 'react'
import { Masonry } from 'masonic'
import PhotoCard, { Photo } from '../photoCard'

interface Props {
  photos: Photo[]
}

const PhotoList: React.FC<Props> = ({ photos }) => {
  const columnWidth = 300
  const columnGutter = 20

  const renderPhoto = ({ index, data, width }: { index: number; data: Photo; width: number }) => {
    return <PhotoCard key={index} {...data} width={width} />
  }

  return <Masonry items={photos} columnWidth={columnWidth} columnGutter={columnGutter} render={renderPhoto} />
}

export default PhotoList
