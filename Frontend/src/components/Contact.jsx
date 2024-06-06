import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'

function Contact() {
    const { 
        register,
        handleSubmit, 
        formState: { errors },
         } = useForm();
      const onSubmit = data => console.log(data);
    
      return (
        <>
          <div className="flex h-screen items-center justify-center bg-pink-200 dark:bg-slate-800">
            <div className="relative bg-white text-black dark:bg-slate-800 dark:text-white border-[2px] shadow-md rounded-md p-10">
            
            <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
    
              <Link to={"/"}>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </Link>
              
              <h3 className="font-bold text-lg">Contact Us</h3>
    
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-800' {...register("name", { required: true })} />
                <br />
            {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-800' {...register("email", { required: true })} />
                <br />
            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* TextArea */}
              <div className="mt-7 space-y-2">
                <span>Message</span>
                <br />
                <input type="textarea" placeholder='Type your message....' className='w-80 h-20 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-800' {...register("Message", { required: true })} />
                <br />
            {errors.Message && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-6'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200 dark:bg-slate-600 dark:hover:bg-slate-800'>Submit</button>
              </div>
            </form>
            </div>
          </div>
        </>
      )
    }

export default Contact