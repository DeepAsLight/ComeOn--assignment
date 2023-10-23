import React from 'react';
import '../../styles/modal.scss';
import { setCookie, getCookie } from "cookies-next";

const logout = ({setShowModal}) => {

  const cookie = getCookie('userDetail');

  const onHandleSubmit = (e) => {
   
    e.preventDefault();
    console.warn( JSON.parse(cookie))
    let name = cookie?.length ? JSON?.parse(cookie)?.name?.split(' ')[0].toLowerCase() : null;

    fetch('http://localhost:3001/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name
            })
        }
    ).then((res) => {
        res.json().then((value) => {
           if(value?.status == 'success') {
              setCookie('userDetail', '');
              window.location.reload();
           }
         })
    }).catch(err => console.log(err))
  }

  return (
    <form onSubmit={(e) => onHandleSubmit(e)} className='logIn-md-container'>
      <p className='mb-16'>Are you sure you want to logout?</p>
      <div className='flex justify-content-end logout-btn'>
      <button onClick={() => setShowModal(false)} className='cancel-btn button'>Cancel</button>
      <button type='submit' className='logout-btn button'>Log Out</button>
      <div></div>
      </div>
    </form>
  )
}

export default logout