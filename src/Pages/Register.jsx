import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link ,useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import { AuthContext } from '../AuthProvider.jsx/Authprovider';


const Register = () => {

    const { createuser, updateuserprofile } = useContext(AuthContext);
    const [showpassword, setshowpassword] =useState(false)
    // console.log(updateuserprofile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
      const { email, password, image, fullName } = data;
    //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if(password.length < 6){
        toast.error("password should be 6 characters long");
        return;
      }
      else if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter.")
    
        // alert("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
        return ; 
    }

   else if(!/[a-z]/.test(password)){
        toast.error("Password must contain one lowercase letter.")
        return;
    }
   else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must contain at least one special character.");
      return;
  }
  
  // Check for numeric numbers
 else if (!/\d/.test(password)) {
      toast.error("Password must contain at least one numeric digit.");
      return;
  }
      
    //   create user and update profile
      createuser(email, password)
          .then(() => {
              updateuserprofile(fullName, image,email)
                  .then(() => {
                        navigate(from);
                        toast.success("succesfully registered.")
      });
    });
  };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            
  <div className="hero-content flex-col ">
  <div>
      <h1 className=' text-black text-xl font-bold text-center'>Create Your Account on our website.</h1>
      <h2 className='text-slate-700 font-semibold text-xl mt-1'>And Enjoy Our Services!!</h2>
    </div>
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl border-l-2 border-black  bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" {...register("fullName", { required: true })} />
          {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL:</span>
          </label>
          <input type="text" placeholder="Enter photo url" className="input input-bordered"  {...register("image")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input type="email" placeholder="Enter email" className="input input-bordered" {...register("email", { required: true })} />
          {errors?.email && (
                  <span className="text-red-500">This field is required</span>
                )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <div className='flex relative '>
          <input type={showpassword ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {
            showpassword? <FiEye className='absolute right-3 top-4'  onClick={ ()=> setshowpassword(!showpassword)}></FiEye> : <LuEyeOff className='absolute right-3 top-4'   onClick={ ()=> setshowpassword(!showpassword)}></LuEyeOff>
          }
          </div>
         
          {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary  bg-black  border-2 border-black text-white">Register</button>
        </div>
        <label className="label text-black">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please <span className='btn bg-black text-white'>Login</span>
                </Link>
              </label>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;