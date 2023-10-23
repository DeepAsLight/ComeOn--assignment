import React from 'react'

const ImageContainer = ({src, alt, className, loading}) => {
  return (
    <img src={src} alt={alt} loading={loading} className={className} />
  )
}

export default ImageContainer