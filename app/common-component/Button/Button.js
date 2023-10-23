import React from 'react'
import ImageContainer from '../ImageContainer/ImageContainer'
import leftArrow from '../../mock/images/left-arrow.png';
import rightArrow from '../../mock/images/right-arrow.png';


const Button = ({ label, onClick, btnArwDirectionLft }) => {
  return (
    <button className={`${btnArwDirectionLft ? 'button align-center flex' : 'button align-center flex-row-reverse flex'}`} onClick={onClick}>
      <span className='flex'><ImageContainer src={btnArwDirectionLft ? leftArrow.src : rightArrow.src} className='btn-ico-img' loading='lazy' /></span>
      {label}
    </button>
  )
}

export default Button