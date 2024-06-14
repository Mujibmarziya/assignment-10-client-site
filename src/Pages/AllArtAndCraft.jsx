
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllArtAndCraft = () => {
    const [allCrafts, setallCrafts] = useState([]);
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5001/items');
          
          
        setallCrafts(response.data);
       
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
    // console.log(allCrafts);
    const {item,image,sdescription,subcategory_Name:selectedCategory,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =allCrafts;
    return (
        <div>
        <div>
            <h1 className='text-black font-bold text-center mb-3'>All the Arts and crafts Items</h1>
        </div>
         <TableContainer  component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow className='text-pink-800'>
        <TableCell><h1 className='font-bold text-pink-800 '>Title</h1></TableCell>
        
        <TableCell align="right"><h1 className='font-bold text-pink-800'>Subcategory</h1></TableCell>
        <TableCell align="center"><h1 className=' text-right text-pink-800 font-bold lg:text-center'>Rating</h1></TableCell>
        <TableCell align="right"><h1 className='font-bold text-pink-800'>Price</h1></TableCell>
        <TableCell align="right"><h1 className='font-bold text-pink-800'>Owner</h1></TableCell>
        <TableCell align="right"><h1 className='font-bold'></h1></TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {allCrafts.slice(0,10).map((row) => (
        <TableRow
       
          key={row._id} 
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
           {row.item}
          </TableCell>
          <TableCell align="right">{row.subcategory_Name}</TableCell>
          <TableCell align="right"><h1 className='text-right lg:text-center'>{row.rating}</h1></TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.displayname}</TableCell>
          {/* <TableCell align="right"> */}
        <Link className="btn m-4 text-white bg-pink-800" to={`/detail/${row._id}`}>
          Details
        </Link>
      {/* </TableCell> */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </div>
    );
};

export default AllArtAndCraft;