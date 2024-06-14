import React from 'react';
import { Link } from 'react-router-dom';

const TopCraftsCard = ({singlecard}) => {
    const {_id,item,image,sdescription,subcategory_Name,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =singlecard;
    console.log(singlecard);
    return (
        <div >
        
              
        <div className='    h-[550px]'>
       <div  className="card w-full h-full lg:w-[350px] bg-base-100 border-pink-200 border-2">
       
<figure className="px-10 pt-10 ">
<img  src={image} alt="Shoes" className="rounded-xl w-[300px] h-[250px]  " />

</figure>
<div className="card-body ">

<h1 className='font-bold text-pink-600  pb-2 border-black '>Item: <span className='text-black font-semibold'>{item}</span></h1>
<h1 className='font-bold text-pink-600  pb-2 border-black '>Short Description: <span className='text-black font-semibold'>{sdescription}</span></h1>
<h1 className='font-bold text-pink-600   pb-2 border-black '>Category: <span className='text-black font-semibold'>{subcategory_Name}</span></h1>

<div className='mt-3'>
    <Link className='btn bg-pink-800 text-white rounded-xl p-2' to={`/detail/${_id}`}>View details</Link>
  
</div>

</div>
 </div>
        
    </div>
    </div>
    );
};

export default TopCraftsCard;