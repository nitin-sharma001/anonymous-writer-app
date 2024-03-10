import React from 'react'

function Comment({comment}) {
  // console.log("Comment comments");
  return (
    <div className='ml-[4vw] md:ml-0 pt-[5vw] text-[4vw] md:pt-[1vw] md:text-[1.3vw] font-medium'>
   
        <h4 className='font-sans '>
          {
            comment
          }
        </h4>
        {/* <p>{comment.createdAt}</p> */}
        <hr />
    </div>
  )
}

export default Comment