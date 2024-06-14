import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { AuthContext } from '../AuthProvider.jsx/Authprovider';

const Details = () => {
    const singleCraft= useLoaderData();
    // const {id}= useParams()
    const {user}=useContext(AuthContext);
    
    console.log(singleCraft);
    // console.log(id);
    const {_id,item,image,sdescription,subcategory_Name,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =singleCraft;

  
    return (
        <div>
             <div className='   w-11/12 mx-auto h-auto  flex flex-col lg:flex-row mt-11 gap-6'>
            <div className='w-full lg:w-1/3  '>
                <img className='h-[404px] w-full rounded-xl ' src={image} alt="" />

            </div>
            <div className='w-2/3 flex flex-col gap-3'>
                <h1 className=' text-pink-700 text-xl font-bold'>{item}</h1>
                <h1 className='font-medium text-pink-500  pb-2 border-pink-800 border-b-2 border-dashed'><span className='text-pink-800 font-bold'>Category: </span> <span className='text-slate-600'>{subcategory_Name}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'> Price: <span className=' text-slate-600 font-medium'>{price}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'> Short Description: <span className=' text-slate-600 font-medium'>{sdescription}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'>Rating <span className=' text-slate-600 font-medium'>{rating}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'> Processing Time: <span className=' text-slate-600 font-medium'>{ptime}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'> customization: <span className=' text-slate-600 font-medium'>{customization}</span></h1>
                <h1 className='text-pink-500 font-bold text-center'> stock status: <span className=' text-slate-600 font-medium'>{stockstatus}</span></h1>
                <div className='flex flex-col gap-3  justify-between'>
                
                    <div>
                      
                         <Link className='btn bg-pink-800 text-white rounded-xl p-2' to={`/update/${_id}`}>Update</Link>
                     
                    </div>

                    
                 
                
            </div>
            
          
            

            </div>

           
        
            
        </div>
        </div>
    );
};

export default Details;