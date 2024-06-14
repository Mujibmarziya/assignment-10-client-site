import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider.jsx/Authprovider';
import toast from 'react-hot-toast';

const Additems = () => {

    const {user} = useContext(AuthContext)
    const [selectedCategory, setSelectedCategory] = useState('');

   

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    if(!user?.email){
        toast.error("You are not logged in , please login to add a blog.")
    }

    const handleAddItems = event => {
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
        

        const newitem = { item,image,sdescription,subcategory_Name:selectedCategory,price,rating,ptime,customization,stockstatus,email,displayname,userphoto  };

        console.log(newitem);

        // send data to the server
        fetch("http://localhost:5001/items", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newitem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                   console.log('add hoise');
                   toast.success("Items added succesfully!")
                }
    })
         
      
    }
    return (
        <section className="p-6 bg-slate-100 rounded-xl dark:bg-gray-100 dark:text-gray-900">
        <form onSubmit={handleAddItems} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div
      className="space-y-2 col-span-full lg:bg-cover lg:bg-center lg:bg-no-repeat bg-none rounded-xl lg:rounded-none   flex justify-center items-center lg:col-span-1"
      style={{
        backgroundImage: 'url("https://i.ibb.co/3h49PdW/neven-krcmarek-HWbx-SLvm-Sww-unsplash.jpg")'
        // backgroundSize: 'cover',
        // backgroundPosition: 'center', 
        // backgroundRepeat: 'no-repeat' 
      }}
    >
      <p className=" font-semibold text-black lg:text-green-600">Add a item</p>
      
    </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter the Image:</label>
                        <input  name='image' id="firstname" type="text" placeholder="Enter the image of the blog" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="item" className=" text-left text-black">Enter the item:</label>
                        <input  name='item' id="item" type="text" placeholder="Enter the Title of the blog" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                   
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="short description" className=" text-left text-black">Enter short description</label>
                        <input  name='sdescription' id="subcategory" type="text" placeholder="Enter Short Description" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter price</label>
                        <input  name='price' id="firstname" type="text" placeholder="Enter price" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter rating</label>
                        <input  name='rating' id="firstname" type="text" placeholder="Enter rating" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Customization</label>
                        <input  name='customization' id="firstname" type="text" placeholder="yes or no" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter processing time</label>
                        <input  name='ptime' id="firstname" type="text" placeholder="Enter processing time" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Stock status</label>
                        <input  name='stockstatus' id="firstname" type="text" placeholder="in order or made to stock" className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter User Email</label>
                        <input  name='email' id="firstname" type="text" defaultValue={user.email} className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2   sm:col-span-3">
                        <label htmlFor="firstname" className=" text-left text-black">Enter User Name</label>
                        <input  name='userName' id="firstname" type="text" defaultValue={user.displayName} className="w-full rounded-md  p-3 text-black  " />
                    </div>
                    <div className="col-span-full flex flex-col gap-2  sm:col-span-3">
                    <label htmlFor="firstname" className=" text-left text-black">Enter Category:</label>
                    <select className="bg-white select text-black border-black select-primary w-full max-w-xs" onChange={handleCategoryChange} value={selectedCategory}>
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
            <button className='btn btn-primary bg-black text-white border-none w-1/2 mx-auto'> Submit</button>
            
        </form>
    </section>
    );
};

export default Additems;