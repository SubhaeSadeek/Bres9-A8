import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from '../../component/AllProducts/AllProducts';
import Banner from '../../component/Banner/Banner';

const Home = () => {
    const allProductsData = useLoaderData();
    return (
        <div className=''>
            <Banner></Banner>
            <AllProducts allProductsData={allProductsData} ></AllProducts>
            
        </div>
    );
};

export default Home;