import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FilterSubcatCard from './FilterSubcatCard';
import {  Zoom} from "react-awesome-reveal";

const FilterSubCat = () => {
    // const singleitem = useLoaderData();
    const {subcategory_Name}= useParams()
    console.log(subcategory_Name);

    const [allCrafts, setallCrafts] = useState([]);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5001/items');
          const filtered =response.data.filter((singledata)=>singledata.subcategory_Name==subcategory_Name)
          
        setallCrafts(filtered);
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    console.log(allCrafts);

    // console.log(singleitem);
    return (
        <div className='mt-6 w-11/12 mx-auto '>
        <div className=''>
            <Zoom>
              <h1 className='text-center text-black  font-bold '>All Items of SubCategory ${subcategory_Name}</h1>
            </Zoom>
          
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
            {
                allCrafts.map(singlecard=>(
                   <FilterSubcatCard key={singlecard._id} singlecard={singlecard}></FilterSubcatCard>
                ))
            }
           
        </div>
        
    </div>
    );
};

export default FilterSubCat;