import React from 'react';
import LatestProducts from './LatestProducts';
const latestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json());
const Home = () => {
  return (
    <div>
      <h1 className='text-secondary'>Home</h1>
      <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>

    </div>
  );
};

export default Home;