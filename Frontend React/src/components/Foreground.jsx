import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './Card'
import NavBar from './NavBar'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from './LoadingComponents/Loading';
function Foreground() {

  const {form, setForm, filteredData, setFilteredData} = useContext(AppContext);
  const [val, setVal] = useState('');
  const navigate = useNavigate();
  const ref = useRef(null);

  // console.log("printing form");
  // console.log(form[0].title);

  function navigateHandler(){
    navigate("/create");
  }
  function searchHandler(event){
    setVal(event.target.value);
  }

  const clickHandler = (e) => {
    e.preventDefault();
    let filteredData = form.filter( (res) => {
      return res.title.toLowerCase().includes(val.toLowerCase())
    })
  // console.log(filter);

    setFilteredData(filteredData);

  }
  
  // console.log(filteredData);



  return  (
  
   
      <div className='overflow-x-hidden md:overflow-x-visible'>
        
        <NavBar />
        <div className='fixed w-[60vw] left-[35%] top-6 md:w-[25vw] md:top-4  z-[4] md:left-[39%] border- text-black-600 text-center' >
        {/* <div className='fixed sm:w-[60vw] sm:left-[35%] sm:top-6 w-[25vw] top-4  z-[4] left-[39%] border- text-black-600 text-center' > */}

          <form className="max-w-md mx-auto">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" name='val' value={val} onChange={searchHandler} id="default-search" 
                  className="p-2 pl-8 md:pl-10 block w-full md:p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-white " placeholder="Search ..." required />
                  <button onClick={clickHandler} type="submit" className="hidden md:block absolute end-2.5 bottom-2.5 bg-[#f1f4f9] hover:bg-[#f1f4f9]-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
          </form>
        </div>
        
        
      <div ref={ref} className="left-8 top-[28vw] relative  md:top-40 md:left-12  w-full h-full flex gap-10  flex-wrap p-5">
     
        {
           
          
           filteredData.length === 0 ? <Loading />: filteredData.map( (data, index) => (
              <Card key={index} data={data} reference={ref}/>
            ))
          
           
        }
    </div>

    <div onClick={navigateHandler} className='text-[3vw] md:text-[1.3vw] w-[50px] h-[50px]  md:w-[80px] md:h-[80px] fixed cursor-pointer right-[8vw] bottom-[8vw] md:right-[2vw]  md:bottom-[2vw] rounded-full flex items-center justify-center  bg-[#27ae61]'>
        <FaPlus size="3em"  color='white'/>
    </div>

    </div>
  )
}

export default Foreground

