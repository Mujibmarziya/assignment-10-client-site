import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import axios from 'axios';
import SubcatsCard from './SubcatsCard';

const CraftsSubcats = () => {
    const {user} = useContext(AuthContext);
    const [AllSubCats, setSubCats] = useState([]);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://assignment-10-server-blond-eight.vercel.app/subcats');
          setSubCats(response.data);
         
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <div className='mt-6 w-11/12 mb-5 mx-auto'>
        <div className=''>
            <h1 className='text-center text-pink-800  font-bold '> All SubCategoris of Our Arts & Crafts</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                AllSubCats.map(singlecard=>(
                   <SubcatsCard key={singlecard._id} singlecard={singlecard}></SubcatsCard>
                ))
            }
           
        </div>
        
    </div>
    );
};

export default CraftsSubcats;