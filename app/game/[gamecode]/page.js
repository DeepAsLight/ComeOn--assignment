'use client'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';


const page = () => {

   const router = usePathname();
   const route = useRouter();

      const launchGame = (gameName) => {
        if (window.comeon && window.comeon.game && window.comeon.game.launch) {
          window.comeon.game.launch(gameName);
        } else {
          console.error("window.comeon is not properly defined.");
          route.push('/');
        }
      };

      useEffect(() => {
        if(router.split('/')[2] != '') launchGame(router.split('/')[2]);
      },[router])

  return (
    <div className='game-screen'>
         <div id="game-launch"></div>
         <Link href='/' className='redirection-btn'>Close</Link>
    </div>
  )
}

export default page