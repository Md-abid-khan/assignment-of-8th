import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router';
import errorPic from "../../../Needed images/Error/404-error-design-with-three-monsters_23-2147735632.avif" 

const ContactUs = () => {
    return (
         <div>
            <Header></Header>
        <div className='flex flex-col items-center'>
            <img className='h-100 p-10 rounded-full' src={errorPic} alt="" />
            <p className='text-3xl font-extrabold text-center'>Sorry <br /> No information available</p>
            <Link to={"/"}><button className='btn bg-blue-500 p-5 my-5 '>Go To Home</button></Link>
        </div>
        </div>
    );
};

export default ContactUs;