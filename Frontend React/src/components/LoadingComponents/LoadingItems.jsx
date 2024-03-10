import React from 'react'
import {FaRegFileAlt} from 'react-icons/fa';

function LoadingItems() {
  return (
    
    <div 
className=' relative text-[#232330] flex-shrink-0 w-60 h-72 rounded-[45px] bg-[#f1f4f9] text-white py-10 px-8 overflow-hidden'>

   <FaRegFileAlt color='#e0e8f0'/>
   <p className='text-sm text-[#232330] mt-5 leading-tight font-semibold'>
     <div className='mt-[3vw] w-[100%] h-[1vw] bg-[#e0e8f0]'></div>
     <div className='mt-[1vw] w-[100%] h-[1vw] bg-[#e0e8f0]'></div>
     <div className='mt-[1vw] w-[100%] h-[1vw] bg-[#e0e8f0]'></div>
     <div className='mt-[1vw] w-[100%] h-[1vw] bg-[#e0e8f0]'></div>
     <div className='mt-[1vw] w-[50%] h-[1vw] bg-[#e0e8f0]'></div>
   </p>
   <p className='text-sm text-[#232330] mt-5 leading-tight font-normal'>
       
   </p>
   <div className='footer absolute bottom-0 w-full  left-0   '>
       <div className='flex items-center text-[#232330] justify-between px-8 py-3 mb-3'>
          
       </div>
      
       
       <div  className={`tag cursor-pointer w-full py-4  bg-[#f0f0f0] text-[#fff] flex items-center justify-center `}>
                <h3 className='text-sm font-semibold '>Open Now</h3>
       </div>
       
     
       
   </div>
   
           

</div>


  )
}

export default LoadingItems