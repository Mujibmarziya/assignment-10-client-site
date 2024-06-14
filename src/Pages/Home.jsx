import React from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import TopCraftsItems from './TopCraftsItems';
import CraftsSubcats from './CraftsSubcats';
import OurTeam from './OurTeam';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopCraftsItems></TopCraftsItems>
           <CraftsSubcats></CraftsSubcats>
           <OurTeam></OurTeam>
           <Stat></Stat>
           <Footer></Footer>
        </div>
    );
};

export default Home;