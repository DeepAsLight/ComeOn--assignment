import React, {useState} from 'react'
import '../../styles/userprofile.scss'
import Button from '@/app/common-component/Button/Button'
import ImageContainer from '@/app/common-component/ImageContainer/ImageContainer'
import Modal from '@/app/common-component/Modal/Modal'
import Logout from '../Logout/Logout'


const UserProfile = ({setIsLoggedIn, cookie}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='usr-container'>
       <div className='flex align-center mb-16'>
        <ImageContainer src={cookie?.avatar} alt='profile-img' loading='eager' className='avatar'/>
        <div className='usr-details ml-16'>
          <p className='ft-wt-600'>{cookie?.name}</p>
          <p className='ft-wt-500'>{cookie?.event}</p>
        </div>
       </div>
       <Button label='Log Out' btnArwDirectionLft={true} onClick={() => setShowModal(true)}/>
       {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                <Logout setIsLoggedIn={setIsLoggedIn} setShowModal={setShowModal} />
            </Modal>
        }
    </div>
  )
}

export default UserProfile