'use client'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { getCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import '../../styles/gamelist.scss';
import Button from '@/app/common-component/Button/Button';
import ImageContainer from '@/app/common-component/ImageContainer/ImageContainer';
import Toast from '../../common-component/Toast/Toast';


const GameList = ({ data, id }) => {

  const router = useRouter();
  const cookie = getCookie('userDetail');

  const [dataFromApi, setDataFromApi] = useState([]);
  const [game, setGame] = useState([]);
  const [truncate, setToggleTruncate] = useState(true);

  useEffect(() => {
    const fetchdatafromApi = async () => {
      const datas = await fetch('http://localhost:3001/games', { method: 'get' })
      const res = await datas.json();
      setDataFromApi(res);
    }
    fetchdatafromApi();
  }, []);

  useEffect(() => {
    if (data === '') setGame(dataFromApi);
    else {
      let filteredArray = dataFromApi.filter(item => item.name.toLowerCase().includes(data.toLowerCase()));
      setGame(filteredArray);
    }
  }, [data])

  useEffect(() => {
    if (id === 0 || id === '') setGame(dataFromApi);
    else {
      let filteredArray = dataFromApi.filter(item => item.categoryIds.includes(id));
      setGame(filteredArray)
    }
  }, [id])

  useEffect(() => {
    // Create a script element and set its src to your comeon.game-1.1.min.js file
    const script = document.createElement('script');
    script.src = 'comeon.game-1.1.min.js'; // Update the path accordingly
    script.async = true;

    script.onload = () => {
      // The script has loaded, you can now use window.comeon
      if (window.comeon) {
        console.log('Script loaded successfully');
      } else {
        console.error('Failed to load Script');
      }
    };

    // Append the script element to the document's head
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const showToast = () => {
    toast.warning('Please log in to continue', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const onHandleClick = (item) => {
    if (cookie?.length) {
      router.push(`/game/${item.code}`)
    } else {
      showToast()
    }
  }

  useEffect(() => {
    if (dataFromApi) setGame(dataFromApi)
  }, [dataFromApi]);

  const calculateTextStyle = () => {
    return truncate ? 'ft-sz-16 ft-wt-500 ellipsis' : 'ft-sz-16 ft-wt-500 ';
  }


  return (
    <div className='list-container'>
      <p className='mb-16 ft-sz-24 ft-wt-600 title'>Games</p>
      {game.map((item, i) => {
        return (
          <div key={i} className='list-wrapper'>
            <div className={ `flex ${!cookie?.length && 'blur-section'}` }>
              <ImageContainer src={item.icon} alt='img' loading='lazy' className='game-img' />
              <div className='game-txt'>
                <p className='ft-sz-16 ft-wt-600 mb-16'>{item.name}</p>
                <p className={calculateTextStyle()}>{item.description}</p>
                <p onClick={() => setToggleTruncate(!truncate)} className='mb-view post-txt ft-wt-600'>{truncate ? 'Show more' : 'Show less'}</p>
              </div>
            </div>
            <div className='flex justify-content-end'>
              <Button label='Play' btnArwDirectionLft={false} onClick={() => { onHandleClick(item) }} />
            </div>
          </div>
        )
      })}
      <Toast />
    </div>
  )
}

export default GameList