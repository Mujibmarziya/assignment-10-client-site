import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';

const Update = () => {
    const singleitem = useLoaderData();
    console.log(singleitem);
    // const {item,image,sdescription,category:selectedCategory,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =singleitem;
    
    const {user} = useContext(AuthContext)
    const [selectedCategory, setSelectedCategory] = useState('');
    const {_id,item,image,sdescription,subcategory_Name,price,rating,ptime,customization,stockstatus,email,displayname,userphoto} =singleitem;

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleupdateblog = event => {
        event.preventDefault();
      

        const form = event.target;

        const item = form.item.value;
        const image = form.image.value;
        const sdescription = form.sdescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const ptime = form.ptime.value;
        const stockstatus = form.stockstatus.value;
        const email = user?.email;
        const displayname= user.displayName;
        const userphoto = user.photoURL;
        // const currentDate = new Date();
        // const dateTime = currentDate.toLocaleString();
        

        const newUpdateditem = {item,image,sdescription,subcategory_Name:selectedCategory,price,rating,ptime,customization,stockstatus,email,displayname,userphoto  };

        console.log(newUpdateditem);

         // send data to the server
         fetch(`http://localhost:5001/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateditem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                   console.log('up done');
                   toast.success("Updated successfully")
                }
            })
         
      
    }


    return (
        <section className="p-6 bg-slate-100 rounded-xl dark:bg-gray-100 dark:text-gray-900">
           
        <form onSubmit={handleupdateblog} noValidate="" action="" className="container flex flex-col   mx-auto space-y-12">
       
            <fieldset className="grid grid-cols-4  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
           
            <div
      className="space-y-2 col-span-full border-l-2 border-pink-800 border-t-2 border-b-2  rounded-xl flex justify-center items-center lg:col-span-1"
     
    >
      <p className=" font-bold text-black lg:text-pink-800 text-3xl">---Update A Item---</p>
      
    </div>
      
 
                <div className="grid grid-cols-6  gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter the Image:</label>
                        <input defaultValue={image}  name='image' id="firstname" type="text" placeholder="Enter the image of the blog" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="item" className=" text-left text-black">Enter the item:</label>
                        <input defaultValue={item}  name='item' id="item" type="text" placeholder="Enter the Title of the blog" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                   
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="short description" className=" text-left text-black">Enter short description</label>
                        <input defaultValue={sdescription}  name='sdescription' id="subcategory" type="text" placeholder="Enter Short Description" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter price</label>
                        <input defaultValue={price}  name='price' id="firstname" type="text" placeholder="Enter price" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter rating</label>
                        <input defaultValue={rating}  name='rating' id="firstname" type="text" placeholder="Enter rating" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Customization</label>
                        <input defaultValue={customization}  name='customization' id="firstname" type="text" placeholder="yes or no" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter processing time</label>
                        <input defaultValue={ptime}  name='ptime' id="firstname" type="text" placeholder="Enter processing time" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Stock status</label>
                        <input defaultValue={stockstatus}  name='stockstatus' id="firstname" type="text" placeholder="in order or made to stock" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter User Email</label>
                        <input  name='email' id="firstname" type="text" defaultValue={user?.email} className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter User Name</label>
                        <input  name='userName' id="firstname" type="text" defaultValue={user?.displayName} className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2  sm:col-span-3">
                    <label htmlFor="firstname" className=" text-left text-black">Enter Category:</label>
                    <select defaultValue={subcategory_Name}   className="bg-white select text-black border-pink-600 select-primary w-full max-w-xs" onChange={handleCategoryChange} >
                                    <option disabled value="">Choose YOUR item Category.</option>
                                    <option value="Card Making">Card Making</option>
                                    <option value="Scrapbooking">Scrapbooking</option>
                                    <option value="Paper Quilling & Origami">Paper Quilling & Origami</option>
                                    <option value="Glass Painting">Glass Painting</option>
                                    <option value="Lampworking">Lampworking</option>
                                    <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                                    
                                </select>
                    </div>
                    
                </div>
            </fieldset>
            <button className='btn btn-primary bg-pink-800 text-white border-none w-1/2 mx-auto'> Submit</button>
            
        </form>
    </section>
    );
};

export default Update;