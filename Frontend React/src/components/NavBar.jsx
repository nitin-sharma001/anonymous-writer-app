import React, { useContext, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { AppContext } from '../context/AppContext';

function NavBar() {


    // console.log(items);


  return (
    <div className="fixed py-6 z-[3] top-[0] left-[0] rounded-b-xl  w-full md:py-7 flex justify-center text-[#232330] text-xl font-semibold bg-[#f1f4f9]">
            <nav className='relative flex items-center w-full'>
                <div >
                <h4 className='text-[6vw] md:text-3xl pl-[8vw]'>Anon.</h4>
                <h5 className='text-[3vw] top-[3.6vw] left-[18vw] absolute md:left-[11.5vw] md:top-[1.44vw] md:text-sm'>writers</h5>
                </div>
                

                <div className='hidden absolute right-[20vw]'>
                    <FcLike size="1.5em"/>
                </div>
            </nav>
    </div>
  )
}


export default NavBar

