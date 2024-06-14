import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import axios from 'axios';
import TopCraftsCard from './TopCraftsCard';
import MyCraftsCard from './MyCraftsCard';
import toast from 'react-hot-toast';

const MyArtAndCraft = () => {
   const {user} =useContext(AuthContext);
//    console.log(user);

    const [myCrafts, setmyCrafts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

   

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    // console.log(selectedCategory);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://assignment-10-server-blond-eight.vercel.app/items');
        //   console.log(response.data);
          const filtered =response.data.filter((singledata)=>singledata.email==user?.email)
          
        setmyCrafts(filtered);
        // console.log(selectedCategory);
        // const filteredcustom =response.data.filter((singledata)=>singledata.customization==selectedCategory)
        if(selectedCategory){
            const filteredcustom =response.data.filter((singledata)=>singledata.customization==selectedCategory)
            setmyCrafts(filteredcustom)
        } 
        // else{
        //     console.log("else");
        //     setmyCrafts(filtered)
        // }
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [selectedCategory]);
    console.log(myCrafts.length);


    const handleDelete = _id => {
       
      


        fetch(`https://assignment-10-server-blond-eight.vercel.app/items/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                //    console.log("del hoise");
                   toast.success("Deleted From My Arts & Crafts")
                    const remaining = myCrafts.filter(craft => craft._id !== _id);
                    setmyCrafts(remaining);
                }
            })

    }
    return (
        <div className='mt-6 w-11/12 mx-auto'>
        <div className=''>
            <h1 className='text-center text-pink-800  font-bold '>Our Top Cards</h1>
        </div>

        <div className="text-center mt-4">
                    <label htmlFor="firstname" className=" text-left text-pink-800 font-bold">Enter Category:</label>
                    <select className="bg-white select text-slate-500 ml-3 border-pink-600 select-primary w-full max-w-xs" onChange={handleCategoryChange} value={selectedCategory}>
                                    <option disabled value="">Choose customization option.</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                   
                                    
                                </select>
                    </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                myCrafts.slice(0,6).map(singlecard=>(
                   <MyCraftsCard key={singlecard._id} handleDelete={handleDelete} singlecard={singlecard}></MyCraftsCard>
                ))
            }
           
        </div>
        
    </div>
    );
};

export default MyArtAndCraft;