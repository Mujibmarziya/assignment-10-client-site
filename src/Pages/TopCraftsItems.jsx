import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import axios from 'axios';
import TopCraftsCard from './TopCraftsCard';
import { Fade ,Zoom} from "react-awesome-reveal";

const TopCraftsItems = () => {
    const {user} = useContext(AuthContext);
    const [topCrafts, setTopCrafts] = useState([]);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5001/items');
          setTopCrafts(response.data);
         
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    return (
       <Fade>
         <div className='mt-6 w-11/12 mx-auto'>
        <div className=''>
           <Zoom>
           <h1 className='text-center  text-pink-900  font-bold '>Our Top Cards</h1>
           </Zoom>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                topCrafts.slice(0,6).map(singlecard=>(
                   <TopCraftsCard key={singlecard._id} singlecard={singlecard}></TopCraftsCard>
                ))
            }
           
        </div>
        
    </div>
       </Fade>
    );
};

export default TopCraftsItems;