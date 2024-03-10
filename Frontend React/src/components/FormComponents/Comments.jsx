import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Comments({id}) {

    const [formData , setFormData] = useState( { 
        comment : "",
    })

    function changehandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    // console.log(formData.comment);


    async function submitHandler(event){
        event.preventDefault();
        // console.log(id);
        // console.log(formData);

        try{
            await axios.post("http://localhost:5174/comments/create", {
                id : id,
                comment : formData.comment
            })
            // console.log("Comment Created Successfully");
            toast.success("Comment Created Successfully")
            
        }catch(err){
            // console.log("Post Error");
            toast.error("Comment Not Created")

            console.log(err);
        }

    }

  return (
    <div className='flex flex-col mt-[25px]'>

        <h4 className='text-[4vw] font-semibold md:text-[1.8vw] '>Comments : </h4>
        
        <form onSubmit={submitHandler} className='flex flex-col items-start' action="">
            <textarea placeholder='Enter your Comment..'
            onChange={changehandler}
            value={formData.comment}
            className='w-[80vw] md:w-[25vw] md:h-full h-[30vw] md:mx-0 mx-[5vw] block  p-4 ps-10 text-sm  border border-gray-400 rounded-lg bg-white'  
             required
            name="comment" id="" cols="45" rows="5"></textarea>
            <button className='mx-[5vw] mt-[2vw] md:mx-0 md:mt-[1vw] bg-[#27ae61] rounded-[300px] text-[#fff]  font-medium rounded-lg text-sm px-3 md:px-5 py-2 md:py-3'>Submit</button>
        </form>

    </div>
  )
}

export default Comments
