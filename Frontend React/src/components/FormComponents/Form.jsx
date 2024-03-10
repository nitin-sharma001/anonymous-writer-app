
import React, { useState } from 'react'
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Form() {
    const navigate = useNavigate();
    

    const [formData , setFormData] = useState( { 
        title : "",
        desc : ""
    })

    function changehandler(event) {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    function navigateHandler(){
        navigate(-1);
        
    }

    async function submitHandler(event){
        event.preventDefault();
        // console.log(formData);

        try{
            await axios.post("http://localhost:5174/create", {
                title : formData.title,
                desc : formData.desc
            })
            // console.log("Post Successfully");
            toast.success("Submit Successfully")
        }catch(err){
            // console.log("Post Error");
            toast.error("Error While Sending the data...")

            console.log(err);
        }

    }

  return (
    <>
        <div onClick={navigateHandler} className='h-6 w-[40px]  md:w-10 md:h-10 flex cursor-pointer absolute top-[2vw] left-[2vw] md:top-[2vw] md:left-[2vw] items-center justify-center rounded-full bg-[#27ae61] text-[#fff]'>
            <FaArrowLeft />
        </div>
        <h4 className='text-[8vw] pt-[10vh] text-center md:text-[2.5vw]'>Create an Article</h4>

    <div className='w-[80vw] left-[10%] pt-[3vw]  absolute md:w-[50vw] md:pt-[3vw] md:left-[25%] border- text-black-600 text-center' >

        <form  onSubmit={submitHandler}>
            <input
            className=' md:ml-0 mt-4 md:mt-0 block p-2 ps-6 w-full md:p-4 md:ps-10 text-sm  border border-gray-400 rounded-lg bg-white'
             placeholder="Enter Title..." required
            type="text"
            onChange={changehandler}
            name='title' 
            value={formData.title}/>
            <br /><br />
            <textarea type="text"
            className="block w-full p-4 md:ps-10 text-sm  border border-gray-400 rounded-lg bg-white "  required
            onChange={changehandler}
            placeholder='Enter description ...'
            name='desc' 
            rows="18"
            value={formData.desc}/>
            <br /><br />

            <button  className="-bottom-[1vw] left-[0] px-3 py-2 absolute md:-bottom-[2vw] md:left-[0] bg-[#27ae61] rounded-[200px] text-[#fff]  font-medium rounded-lg text-sm md:px-5 md:py-3">Create...</button>

        </form>
    </div>
        
    
    </>
  )
}

export default Form


// <div onClick={navigateHandler} className='sm:h-6 sm:w-[40px]  w-10 h-10 flex cursor-pointer absolute top-[2vw] left-[2vw] items-center justify-center rounded-full bg-[#27ae61] text-[#fff]'>
// <FaArrowLeft />
// </div>
// <h4 className='sm:text-[8vw] pt-[10vh] text-center text-[2.5vw]'>Create an Article</h4>

// <div className='sm:w-[80vw] sm:left-[10%] absolute w-[50vw] pt-[3vw] left-[25%] border- text-black-600 text-center' >

// <form  onSubmit={submitHandler}>
// <input
// className='class="block w-full p-4 ps-10 text-sm  border border-gray-400 rounded-lg bg-white " placeholder="Enter Title..." required'
// type="text"
// onChange={changehandler}
// placeholder='Enter title ...'
// name='title' 
// value={formData.title}/>
// <br /><br />
// <textarea type="text"
// className='class="block w-full p-4 ps-10 text-sm  border border-gray-400 rounded-lg bg-white " placeholder="Enter Title..." required'
// onChange={changehandler}
// placeholder='Enter description ...'
// name='desc' 
// rows="18"
// value={formData.desc}/>
// <br /><br />

// <button  class="sm:-bottom-[6vw] sm:px-3 sm:py-2 absolute -bottom-[2vw] left-[0] bg-[#27ae61] rounded-[200px] text-[#fff]  font-medium rounded-lg text-sm px-5 py-3">Create...</button>

// </form>
// </div>
