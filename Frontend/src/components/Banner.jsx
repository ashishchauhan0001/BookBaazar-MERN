import React from 'react'
import book from '../../public/book.jpg'

function Banner() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        {/* w-full md:w-1/2 it means ki md or device>md size ke liye w-1/2 hojaega baki ke liye full rhega  */}
        <div className='order-2 md:order-1 w-full md:w-1/2  mt-12 md:mt-28'>
            <div className="space-y-8">
            <h1 className='text-4xl font-bold'> "Hey there, Let's explore <span className='text-pink-500'>something new every day!"</span> </h1>
            <p className='text-xl font-normal'>Welcome to BookBazaar, your ultimate destination for book enthusiasts! At BookBazaar, we believe in the transformative power of reading and strive to make books accessible to everyone. </p>
            <label className="input input-bordered flex items-center gap-2 bg-white border-gray-300 text-black">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-gray-700">
    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow  border-none outline-none " placeholder="Email" />
</label>

<button className="btn btn-secondary text-white">Secondary</button>
        </div> 
        </div>
        <div  className='order-1 w-full md:w-1/2'>
            <img src={book} className='w-90 h-90' alt="" />
        </div>
     </div>
    </>
  )
}

export default Banner