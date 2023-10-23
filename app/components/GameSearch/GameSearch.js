
'use client'
import React from 'react'
import '../../styles/gamesearch.scss'
import ImageContainer from '@/app/common-component/ImageContainer/ImageContainer'

const GameSearch = ({setData}) => {

  const onHandleChange = (e) => {
    let value = e.target.value;
    setData(value);
  } 

  return (
    <div className='srch-container flex'>
        <div className='srch-wrapper flex align-center'>
        <input type='text' placeholder='Search Game' onChange={(e) => onHandleChange(e)} className='input-box ft-sz-16 ft-wt-500'/>
        <ImageContainer src='https://i.ibb.co/9h1xL0n/ico-search.png' alt='icon-search' loading="eager" className='search-img'/>
        </div>
    </div>
  )
}

export default GameSearch