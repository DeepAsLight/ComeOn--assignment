'use client';
import React, { useState } from 'react'
import '../../styles/modal.scss';
import { setCookie } from "cookies-next";

const login = ({ setIsLoggedIn, showToast }) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(data).some(element => element === '')) {
      let obj = {
        username : data.email,
        password : data.password
      }
      fetch('http://localhost:3001/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }
      ).then((res) => {
        res.json().then((value) => {
          if(value.status == 'success'){
            setCookie("userDetail", JSON.stringify({
              name : value.player.name,
              avatar : value.player.avatar,
              event : value.player.event
            }));
            setIsLoggedIn(true);
            showToast(value);
          }
          else{
            showToast(value);
          }
        })
      }).catch((err) => console.log(err))
    }
  }

  const onHandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  
  return (
    <form onSubmit={(e) => onHandleSubmit(e)} className='logIn-md-container'>
      <p className='flex justify-content-center ft-wt-600  mb-16 ft-sz-24'>Log in</p>
      <div className='ip-container mb-16'>
        <input type='text' placeholder='E-mail address' onChange={(e) => onHandleChange(e)} name='email' className='ft-sz-16 ft-wt-600' />
      </div>
      <div className='ip-container mb-16'>
        <input type='password' placeholder='Password' onChange={(e) => onHandleChange(e)} name='password' className='ft-sz-16 ft-wt-600' />
      </div>
      <button type='submit' className='ft-sz-16 ft-wt-600'>LOG IN</button>
    </form>
  )
}

export default login