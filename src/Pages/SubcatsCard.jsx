import React from 'react';
import { Link } from 'react-router-dom';

const SubcatsCard = ({singlecard}) => {
    const {_id,subcategory_Name,image,description}=singlecard;
    // console.log(singlecard);
    return (
        <div >
        
              
        <div className='    h-[550px]'>
     <Link to={`/filterSubItems/${subcategory_Name}`}>
     <div  className="card w-full h-full lg:w-[350px] bg-base-100 border-pink-200 border-2">
       
       <figure className="px-10 pt-10 ">
       <img data-aos="flip-down" src={image} alt="Shoes" className="rounded-xl w-[300px] h-[250px]  " />
       
       </figure>
       <div className="card-body ">
       
       <h1 className='font-bold text-pink-600 border-b-2 pb-2 border-pink-100'>SubCategory Name <span className='text-black font-semibold'>{subcategory_Name}</span></h1>
       <h1 className='font-bold text-pink-600 border-b-2 border-pink-100 pb-2'>Description: <span className='text-black font-semibold'>{description}</span></h1>
       
       
       {/* <div className='mt-3'>
           <Link className='btn bg-black text-white rounded-xl p-2' to={`/detail/${_id}`}>View details</Link>
         
       </div> */}
       
       </div>
        </div>
     </Link>
        
    </div>
    </div>
    );
};

export default SubcatsCard;