import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Comments from './FormComponents/Comments';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
function ReadContent() {

  const {singleForm,  data, loading, setLoading, comment, fetchFormById ,setComment} = useContext(AppContext);
  // console.log(singleForm.data.title);
  const [toggle, setToggle] = useState(false);
  const {id} = useParams();
  // console.log("ye rah readdata content ke value")
  console.log(id);

  useEffect(()=>{
    fetchFormById(id);
  }, [])


  function commentHandler(){
      setToggle(!toggle);
  }
  
  return (
    <>

      <div className='w-full '>
      <div className='mx-[5vw] overflow-x-hidden md:overflow-visible  w-[90vw] font-sans md:w-[50vw] md:h-[100vh] md:mx-[25vw]'>
        <div className="text-[10vw] pt-[8vh] pb-[2vw] md:text-[4vw] font-medium ">
            {singleForm.title}
        </div>
        <hr />

        <div className='text-[3.5vw] md:text-[1.2vw] pb-[2vw] pt-[2vw]'>
          {singleForm.desc}
        </div>
        <hr className=''/>
        <div className='text-[2.5vw] flex w-full justify-between md:text-[1vw] py-[1vw]'>
        {/* {singleForm.createdAt.substring(0, 10)}  */}
        
        {/* {singleForm.createdAt.split("T")[1].substring(0, 8)}  */}
        {singleForm.createdAt}
      
         
        </div>
        <Comments id={singleForm._id}/>

        <hr className='mt-[4vw]' />
        <button 
        className='mx-[5vw] md:mx-0 px-3 py-2 mt-[2vw] mt-[1vw] bg-[#27ae61] rounded-[400px] text-[#fff]  font-medium rounded-lg text-sm md:px-5 md:py-3'
        onClick={commentHandler}>Show Comments ...</button>
    

        <div className='ml-[2vw] pb-[5vw]'>
          { toggle && (
            loading ? <p>loading...</p> :
            comment.map( (comment, index) => {
              return <Comment key={index} comment={comment}/>
          })
          )
         }
        </div>

      </div>
      <div>
      </div>
      </div>
    </>
  )
}

export default ReadContent



// <div className='sm:mx-[5vw] sm:overflow-x-hidden sm:w-[90vw] font-sans w-[50vw] h-[100vh] mx-[25vw]'>
//         <div className="sm:text-[10vw]  pt-[8vh] pb-[2vw] text-[4vw] font-medium ">
//             {singleForm.title}
//         </div>
//         <hr />

//         <div className='sm:text-[3vw] text-[1.2vw] pb-[2vw] pt-[2vw]'>
//           {singleForm.desc}
//         </div>
//         <hr className=''/>
//         <div className='sm:text-[2.5vw] flex w-full justify-between text-[1vw] py-[1vw]'>
//         {singleForm.createdAt.substring(0, 10)} 
//         --
//         {singleForm.createdAt.split("T")[1].substring(0, 8)}
      
         
//         </div>
//         <Comments id={singleForm._id}/>

//         <hr className='mt-[4vw]' />
//         <button 
//         className='sm:mx-[5vw] sm:px-3 sm:py-2 mt-[2vw] mt-[1vw] bg-[#27ae61] rounded-[400px] text-[#fff]  font-medium rounded-lg text-sm px-5 py-3'
//         onClick={commentHandler}>Show Comments ...</button>
    

//         <div className='ml-[2vw] pb-[5vw]'>
//           { toggle && (
//             loading ? <p>loading...</p> :
//             comment.map( (comment, index) => {
//               return <Comment key={index} comment={comment}/>
//           })
//           )
//          }
//         </div>

//       </div>
//       <div>
//       </div>