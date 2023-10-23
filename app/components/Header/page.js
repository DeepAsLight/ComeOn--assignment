import React from 'react'
import img from '../../mock/images/logo.svg'
import ImageContainer from '@/app/common-component/ImageContainer/ImageContainer'

const Header = () => {
  return (
    <div className='header-container'>
         <div className='flex justify-content-center'>
          <ImageContainer src={img.src} alt='logo-img' loading='eager' className='logo-img'/>
        </div>
    </div>
  )
}

export default Header