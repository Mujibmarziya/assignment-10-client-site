import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import axios from 'axios';
import TopCraftsCard from './TopCraftsCard';
import { Fade ,Zoom} from "react-awesome-reveal";

const TopCraftsItems = () => {
    const {user,loading} = useContext(AuthContext);
    const [topCrafts, setTopCrafts] = useState([]);
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log(loader);
          if (loader) {
             <span className="loading loading-infinity loading-lg"></span>
        }
          const response = await axios.get('https://assignment-10-server-blond-eight.vercel.app/items');
          setTopCrafts(response.data);
         setLoader(false)
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [loader]);

    return (
   
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
  
    );
};

export default TopCraftsItems;