import React from 'react';
import { Link } from 'react-router-dom';

const MyCraftsCard = ({singlecard,handleDelete}) => {
    const {_id,item,image,sdescription,subcategory_Name,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =singlecard;
    return (
        <div >
        
              
        <div className='    h-[750px]'>
       <div  className="card w-full h-full lg:w-[350px] bg-base-100 border-2">
       
<figure className="px-10 pt-10 ">
<img data-aos="flip-down" src={image} alt="Shoes" className="rounded-xl w-[300px] h-[250px]  " />

</figure>
<div className="card-body ">

<h1 className='font-bold text-pink-500 pb-2 '>Item: <span className='text-black font-semibold'>{item}</span></h1>
<h1 className='font-bold text-pink-500   pb-2 '>Short Description: <span className='text-black font-semibold'>{sdescription}</span></h1>
<h1 className='font-bold text-pink-500    pb-2 '>Category: <span className='text-black font-semibold'>{subcategory_Name}</span></h1>
<h1 className='font-bold  text-pink-500   pb-2 '>Customization: <span className='text-black font-semibold'>{customization}</span></h1>
<h1 className='font-bold  text-pink-500   pb-2 '>Price: <span className='text-black font-semibold'>{price}</span></h1>
<h1 className='font-bold  text-pink-500   pb-2 '>Processing Time: <span className='text-black font-semibold'>{ptime}</span></h1>
<h1 className='font-bold  text-pink-500   pb-2 '>Stock Status: <span className='text-white  btn bg-pink-700  font-semibold'>{stockstatus}</span></h1>
<h1 className='font-bold  text-pink-500   pb-2 '>Rating: <span className='text-black font-semibold'>{rating}</span></h1>

<div className='mt-3'>
    <Link className='btn bg-pink-800 text-white rounded-xl p-2' to={`/update/${_id}`}>Update</Link>
    <Link  onClick={() => handleDelete(_id)} className='btn ml-2 bg-pink-800 text-white rounded-xl p-2' >Delete </Link>
  
</div>

</div>
 </div>
        
    </div>
    </div>
    );
};

export default MyCraftsCard;