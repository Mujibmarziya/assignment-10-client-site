import React, { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import toast from 'react-hot-toast';
import TypeWriter from '../Pages/TypeWriter';


const Navbar = () => {
    const {name,user,logout}= useContext(AuthContext)

    // console.log(user);
    // usecontext working perfectly
    const logOut = async () => {
        // try {
          await logout();
          toast.success("Successfully logged out.");
       
      };
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="   menu menu-sm dropdown-content  mt-3 z-[55] p-2 gap-2 shadow bg-base-100 rounded-box w-52">
      <ul className="menu menu-horizontal flex flex-col  gap-3 px-1">
    <li  className='text-sm text-pink-800 font-semibold  pr-1'>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-pink-800  border-2 border-pink-400 p-2 ml-1 bg-transparent" : ""
              }
            >
              Homee
            </NavLink>

            
          </li>
         
         
          <li className='text-sm text-pink-800 font-semibold border-l-2 border-black'>
          <NavLink
              to="/additem"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-pink-800  border-2 border-pink-400 p-2 ml-1 bg-transparent " : ""
              }
            >
              Add Items
            </NavLink>

            
          </li>
          <li className='text-sm text-pink-800 font-semibold border-l-2 border-black'>
    <NavLink 
     to="/allart"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-pink-800  border-2 border-pink-400 p-2 ml-1 bg-transparent " : ""
     }
    >All Art & craft Items</NavLink>
    </li>
    <li className='text-sm text-pink-800 font-semibold border-l-2 border-black'>
    <NavLink 
     to="/myart"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-pink-800  border-2 border-pink-400 p-2 ml-1 bg-transparent" : ""
     }
    >My Art&Craft List</NavLink>
    </li>

   
     
    </ul>
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl text-pink-800"><TypeWriter></TypeWriter></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
    <li  className='text-sm text-pink-800 font-semibold pr-1'>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-pink-800 border-2 border-pink-400 p-2 ml-1 bg-transparent" : ""
              }
            >
              Home
            </NavLink>

            
          </li>
          <li className='text-sm text-pink-800 font-semibold border-l-2 border-pink-400'>
          <NavLink
              to="/additem"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-800  border-2 border-pink-400 p-2 ml-1 bg-transparent" : ""
              }
            >
              Add Items
            </NavLink>

            
          </li>
          <li className='text-sm text-pink-800 font-semibold border-l-2 border-pink-400'>
    <NavLink 
     to="/allart"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-pink-800 border-2 border-pink-400 p-2 ml-1 bg-transparent " : ""
     }
    >All Art & craft Items</NavLink>
    </li>
    <li className='text-sm text-pink-800 font-semibold border-l-2 border-pink-400'>
    <NavLink 
     to="/myart"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-pink-800 border-2 border-pink-400 p-2 ml-1 bg-transparent" : ""
     }
    >My Art&Craft List</NavLink>
    </li>

    

   

    
     
    </ul>
  </div>
  <div className="navbar-end gap-3">
    
    {
        user ? <div className='flex gap-2'>
            
        <div className="dropdown dropdown-end z-20">
        <div tabIndex={0} role="button" className="btn bg-pink-800  flex btn-circle avatar">
       
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
          <li>
            <NavLink >
            <a className="justify-between mt-2">
              Profile Name:
              <span className=" bg-white rounded-lg text-black text-semibold p-2">{user.displayName}</span>
            </a>
            </NavLink>
          </li>
          
          
        </ul>
      </div>
      
           <div>
           <li className='btn btn-ghost bg-pink-800 text-white'>
        <NavLink  onClick={logOut}>Log out</NavLink>
    </li>
    
           </div>
           
      
    </div>
    :
    <div className='flex gap-2 '>
         <li className='btn btn-ghost bg-pink-800 text-white'>
        <NavLink to='/login'>Log In</NavLink>
    </li>
    <li className='btn btn-ghost bg-pink-800 text-white'>
    <NavLink 
     to="/register"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-white bg-pink-800  p-2 ml-1 " : ""
     }
    >Register</NavLink>
    </li>
    </div>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;