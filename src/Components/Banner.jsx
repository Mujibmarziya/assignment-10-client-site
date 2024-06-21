import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/shinta-kikuchi-Iab-F_63atc-unsplash.jpg'
import img2 from '../assets/wilhelm-gunkel-I3EAZvAMsXE-unsplash.jpg'
import img3 from '../assets/rivage-TJxotQTUr8o-unsplash.jpg'
import img4 from '../assets/matija-mestrovic-D2rJ0RlDZ58-unsplash.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import TypeWriter from '../Pages/TypeWriter';
import { Typewriter } from 'react-simple-typewriter';
import BannerText from './BannerText';


export default function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-4 ">
        <SwiperSlide> <img src={img1} className="w-full" /> </SwiperSlide>
       {/* <Typewriter></Typewriter> */}
        <SwiperSlide> <img src={img2} className="w-full" /></SwiperSlide>
        <SwiperSlide> <img src={img3} className="w-full" /></SwiperSlide>
        <SwiperSlide> <img src={img4}className="w-full" /></SwiperSlide>
        {/* <SwiperSlide>image1</SwiperSlide>
        <SwiperSlide>image1</SwiperSlide>
        <SwiperSlide>image1</SwiperSlide>
        <SwiperSlide>image1</SwiperSlide> */}
        
      </Swiper>
    </>
  );
}
