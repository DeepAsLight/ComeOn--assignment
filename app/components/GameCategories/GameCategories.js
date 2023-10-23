'use client';
import React, { useState, useEffect } from 'react'
import '../../styles/gameCategory.scss';

const GameCategories = ({ setId }) => {

  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    const fetchdatafromApi = async () => {
      const datas = await fetch('http://localhost:3001/categories', { method: 'get' })
      const res = await datas.json();
      setDataFromApi(res);
    }
    fetchdatafromApi();
  }, []);

  return (
    <div className='category-container'>
      <div className='category-wrapper'>
        <div className='mb-16 pb-16 ft-sz-24 ft-wt-600 category-title'>Categories</div>
        <div className='category-wrap'>
          {dataFromApi.map((item, i) => {
            return (
              <div key={i} className='ft-sz-24 ft-wt-600 mb-16 title' onClick={(e) => setId(item.id)}>{item.name.toUpperCase()}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GameCategories