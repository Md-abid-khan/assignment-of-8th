import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='screen-h-full'>
            <Header></Header>
            <div className='flex flex-col items-center my-20 gap-5'>
                <h1 className='text-3xl font-extrabold'>Sorry</h1>
            <p className='text-xl font-semibold'>You are on wrong direction</p>
            <p className='text-5xl text-red-600 font-bold'>You Should Go Back</p>
            <Link to={"/"}><button className='btn bg-blue-500 p-5 my-5 '>Go To Home</button></Link>
            </div>
         
        </div>
    );
};

export default Error;