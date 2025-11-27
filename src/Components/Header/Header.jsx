import React, { useState } from 'react';
import iconOfPage from "../../../B11A08-router-warrior/C001-assets/logo.png"
import { Link } from 'react-router';

const Header = () => {
    const [active, setActive] = useState('')
    return (
        <div className="navbar bg-base-100 shadow-sm px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow  flex flex-col gap-2 ">
                        <Link to={"/"}><li className='p-2 rounded-xl' onClick={() => setActive("Home")} style={{ backgroundColor: active === "Home" ? "blue" : "" }}>Home</li></Link>
                        <Link to={"/Bookings"}><li className='p-2 rounded-xl' onClick={() => setActive("My Bookings")} style={{ backgroundColor: active === "My Bookings" ? "blue" : "" }}>My Bookings</li></Link>
                        <Link to={"/Blogs"}><li className='p-2 rounded-xl' onClick={() => setActive("Blogs")} style={{ backgroundColor: active === "Blogs" ? "blue" : "" }}>Blogs</li></Link>
                        <Link to={"/ContactUs"}><li className='p-2 rounded-xl' onClick={() => setActive("Contact Us")} style={{ backgroundColor: active === "Contact Us" ? "blue" : "" }}>Contact Us</li></Link>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='h-10' src={iconOfPage} alt="icon" />
                    <a className="btn btn-ghost text-xl">Phudu</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    <Link to={"/"}><li className='p-2 rounded-xl' onClick={() => setActive("Home")} style={{ backgroundColor: active === "Home" ? "blue" : "" }}>Home</li></Link>
                    <Link to={"/Bookings"}><li className='p-2 rounded-xl' onClick={() => setActive("My Bookings")} style={{ backgroundColor: active === "My Bookings" ? "blue" : "" }}>My Bookings</li></Link>
                    <Link to={"/Blogs"}><li className='p-2 rounded-xl' onClick={() => setActive("Blogs")} style={{ backgroundColor: active === "Blogs" ? "blue" : "" }}>Blogs</li></Link>
                    <Link to={"/ContactUs"}><li className='p-2 rounded-xl' onClick={() => setActive("Contact Us")} style={{ backgroundColor: active === "Contact Us" ? "blue" : "" }}>Contact Us</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-600 rounded-3xl">Emergency</a>
            </div>
        </div>
    );
};

export default Header;