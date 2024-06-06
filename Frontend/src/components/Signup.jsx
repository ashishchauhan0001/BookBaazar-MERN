import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"; 
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


function Signup() {
  const location = useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname||"/";
  const { 
    register,
    handleSubmit, 
    formState: { errors },
     } = useForm();
  const onSubmit = async data => {
    const userInfo={
      fullname:data.name,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup Successfully!');
        navigate(from,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
     if(err.response){
       console.log(err);
       toast.error("Error: "+err.response.data.message);
     }
    })
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-pink-200 dark:bg-slate-800">
        <div className="relative bg-white text-black dark:bg-slate-800 dark:text-white border-[2px] shadow-md rounded-md p-10">
        
        <form method='dialog' onSubmit={handleSubmit(onSubmit)}>

          <Link to={"/"}>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </Link>
          
          <h3 className="font-bold text-lg">Signup!</h3>

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
          {/* Password */}
          <div className="mt-7 space-y-2">
            <span>Password</span>
            <br />
            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-800' {...register("password", { required: true })} autoComplete="current-password"/>
            <br />
        {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
          </div>
          {/* Button */}
          <div className='flex justify-around mt-6'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200 dark:bg-slate-600 dark:hover:bg-slate-800'>Signup</button>
            <p className="text-sm mx-2 mr-2">Already Have account? 
              <Link  className='text-blue-600 underline cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</Link>
              <Login/>
              </p>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default Signup

