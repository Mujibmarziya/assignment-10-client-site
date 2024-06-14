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

<h1 className='font-bold text-black border-b-2 pb-2 border-black border-dashed'>Item: <span className='text-black font-semibold'>{item}</span></h1>
<h1 className='font-bold text-black border-b-2 pb-2 border-black border-dashed'>Short Description: <span className='text-black font-semibold'>{sdescription}</span></h1>
<h1 className='font-bold text-black  border-b-2 pb-2 border-black border-dashed'>Category: <span className='text-black font-semibold'>{subcategory_Name}</span></h1>
<h1 className='font-bold text-black  border-b-2 pb-2 border-black border-dashed'>Customization: <span className='text-black font-semibold'>{customization}</span></h1>
<div className='mt-3'>
    <Link className='btn bg-black text-white rounded-xl p-2' to={`/update/${_id}`}>Update</Link>
    <Link  onClick={() => handleDelete(_id)} className='btn bg-black text-white rounded-xl p-2' >Delete from wishlist</Link>
  
</div>

</div>
 </div>
        
    </div>
    </div>
    );
};

export default MyCraftsCard;