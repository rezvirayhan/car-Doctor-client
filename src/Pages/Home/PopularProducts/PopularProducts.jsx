import React from 'react';
import PopularProductsCard from './PopularProductsCard';

const PopularProducts = () => {
    return (
        <div>
            <div className='space-y-7 text-center'>
                <h2 className='text-orange-600 text-3xl font-medium'>Popular Products</h2>
                <h3 className='text-5xl font-semibold'>Browse Our Products</h3>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>
            <div className='mt-5'>
                <PopularProductsCard></PopularProductsCard>
            </div>
        </div>
    );
};

export default PopularProducts;