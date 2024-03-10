import React, { useContext, useEffect, useState } from 'react'
import {FaRegFileAlt} from 'react-icons/fa';
import { FcLikePlaceholder } from "react-icons/fc";
import {IoClose} from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Card({data, reference}) {

    const navigate = useNavigate();
    function clickHandler(){
        // let id= "65db0d88abf615fb74ccfa1e";
        navigate(`/read/${data._id}`);

    }
  
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragElastic={0.1}
     dragTransition={{bounceStiffness :100, bounceDamping :30}} 
     className=' relative text-[#232330] flex-shrink-0 w-60 h-72 rounded-[45px] bg-[#f1f4f9] text-white py-10 px-8 overflow-hidden'>

        <FaRegFileAlt color='#232330'/>
        <p className='text-sm text-[#232330] mt-5 leading-tight font-semibold'>
            {
                data.title.length > 20 ? data.title.substring(0, 20) + "..." : data.title
            }
        </p>
        <p className='text-sm text-[#232330] mt-5 leading-tight font-normal'>
            {
                data.desc.length > 75 ? data.desc.substring(0, 75) + "..." : data.desc
            }
        </p>
        <div className='footer absolute bottom-0 w-full  left-0   '>
            <div className='flex items-center text-[#232330] justify-between px-8 py-3 mb-3'>
                {/* <h5>Hits : </h5> */}
                <span className='cursor-pointer'>
                    {
                    //    like ? ( <FcLike size="1.4em" />) : ( <FcLikePlaceholder size="1.4em" />)
                    }
                
                </span>
            </div>
            { 
                 
                        <div onClick={clickHandler} className={`tag cursor-pointer w-full py-4 bg-[#27ae61] text-[#fff] flex items-center justify-center `}>
                            <h3 className='text-sm font-semibold '>Open Now</h3>
                        </div>
                    
                 
            }
            
        </div>
    </motion.div>

  )
}

export default Card