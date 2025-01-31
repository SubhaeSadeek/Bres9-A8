import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from '../../component/AllProducts/AllProducts';
import Banner from '../../component/Banner/Banner';
import GadgetHeading from '../../component/GadgetHeading/GadgetHeading';
import useTitle from '../../utils/useTitle';

const Home = () => {
    useTitle("Home")
    const allProductsData = useLoaderData();
    return (
        <div className=''>
            <Banner></Banner>
            <GadgetHeading></GadgetHeading>
            <AllProducts allProductsData={allProductsData} ></AllProducts>
            
        </div>
    );
};

export default Home;