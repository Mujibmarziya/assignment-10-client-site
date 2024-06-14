import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Mainlayout = () => {
    // console.log(import.meta.env.VITE_apiKey);
// console.log(import.meta.env.VITE_DB_PASSWORD);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;