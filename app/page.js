'use client'
import React, { useState} from 'react';
import UserProfile from './components/UserProfile/UserProfile'
import GameSearch from './components/GameSearch/GameSearch'
import GameList from './components/GameList/GameList'
import GameCategories from './components/GameCategories/GameCategories'
import UserLogin from './components/UserLogin/UserLogin';
import { getCookie } from "cookies-next";
import { toast } from 'react-toastify';
import Toast from './common-component/Toast/Toast';

export default function Home() {
  const [data, setData] = useState('');
  const [id, setId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cookie = getCookie("userDetail");

  const showToast = (data) => {
    if(data.status == 'success'){
      toast.success('Logged In successfully', {
        position: 'top-right',
        autoClose: 3000, 
      });
    }
    else{
      toast.error(data?.error, {
        position: 'top-right',
        autoClose: 3000, 
      });
    }
  };


  return (
    <main>
      <div className='page-container'>
      <div id="modal-root"></div>
        <Toast />
        <div className='flex home-container'>
          {(isLoggedIn || cookie?.length) 
          ? <UserProfile setIsLoggedIn={setIsLoggedIn} cookie={cookie?.length ? JSON?.parse(cookie) : null} showToast={showToast}/> 
          : <UserLogin setIsLoggedIn={setIsLoggedIn} showToast={showToast}/>
          }
          <GameSearch setData={setData}/>
        </div>
       
        <div className='flex home-container list-view'>
          <GameList data={data} id={id}/>
          <GameCategories setId={setId}/>
        </div>
      
      </div>
     
    </main>
  )
}
