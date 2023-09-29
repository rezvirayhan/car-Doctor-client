import React from 'react';
import { FaStar } from "react-icons/fa";
import porducts1 from '../../../assets/images/products/1.png';
import porducts2 from '../../../assets/images/products/2.png';
import porducts3 from '../../../assets/images/products/3.png';
import porducts4 from '../../../assets/images/products/4.png';
import porducts5 from '../../../assets/images/products/5.png';
import porducts6 from '../../../assets/images/products/6.png';

const PopularProductsCard = () => {
    return (
        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 mt-5 text-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts1} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Car Engine Plug!</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts2} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Car Air Filter</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts3} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Cools Led Light</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts4} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Cools Led Light</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts5} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Front Axle</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-1/2' src={porducts6} alt="" />
                </figure>
                <div className='grid' >
                    <figure className='text-[#FF912C]'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Alternator</h2>
                    <p className="text-orange-600 text-xl font-medium">$10</p>
                </div>
            </div>
        </div>
    );
};

export default PopularProductsCard;