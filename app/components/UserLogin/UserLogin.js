'use client';
import Button from '@/app/common-component/Button/Button'
import React, {useState} from 'react'
import '../../styles/userprofile.scss'
import Modal from '../../common-component/Modal/Modal';
import Login from '../Login/page';

const UserLogin = ({setIsLoggedIn, showToast, showLogin}) => {
    const [showModal, setShowModal] = useState(showLogin);

  return (
    <div className='usr-container'>
        <Button label='Log In' btnArwDirectionLft={true} onClick={() => setShowModal(true)}/>
        {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                <Login setIsLoggedIn={setIsLoggedIn} showToast={showToast}/>
            </Modal>
        }
    </div>
  )
}

export default UserLogin