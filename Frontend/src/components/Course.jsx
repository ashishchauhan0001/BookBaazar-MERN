import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";


function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook =async()=>{
try {
  const res=await axios.get("https://bookbaazar.onrender.com/book");
  console.log(res.data);
  setBook(res.data);
} catch (error) {
   console.log(error);
}
   };
getBook();
  },[])

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900'>
   <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl '>We're delighted to have you <span className='text-pink-500'> HERE!:)</span> 
    </h1>
    <p className='mt-10'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloremque expedita dolore, temporibus quidem deleniti maxime nesciunt ipsam consectetur adipisci in voluptatibus numquam placeat commodi ducimus quas fuga quos voluptatem exercitationem error eos suscipit magnam odit. Dicta in delectus similique corrupti ducimus illum sunt? Illo.
    </p>
    <Link to="/">
    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transform hover:scale-110 transition duration-300 mt-5">
  Go Back
</button>
    </Link>
  </div>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {/*  key val pair */}
    {book.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))}
  </div>
    </div>
  )
}

export default Course
