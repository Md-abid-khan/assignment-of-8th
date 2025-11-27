import React, { useState } from 'react';
import iconOfPage from "../../../B11A08-router-warrior/C001-assets/logo.png"
import { Link } from 'react-router';
import fbLogo from "../../../Needed images/Logos/facebook.png"
import xLogo from "../../../Needed images/Logos/twitter.png"
import linkedIn from "../../../Needed images/Logos/linkedin.png" 
import youtubeLogo from "../../../Needed images/Logos/youtube.png"

const Footer = () => {
    const [active, setActive] = useState('')
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <div className='flex items-center'>
                <img className='h-10' src={iconOfPage} alt="icon" />

                <a className="btn btn-ghost text-xl">Phudu</a>
            </div>
            <nav className="grid grid-flow-col gap-4">
                <ul className='flex gap-5'>
                    <Link to={"/"}><li className='p-2 rounded-xl' onClick={() => setActive("Home")} style={{ backgroundColor: active === "Home" ? "blue" : "" }}>Home</li></Link>
                    <Link to={"/Bookings"}><li className='p-2 rounded-xl' onClick={() => setActive("My Bookings")} style={{ backgroundColor: active === "My Bookings" ? "blue" : "" }}>My Bookings</li></Link>
                    <Link to={"/Blogs"}><li className='p-2 rounded-xl' onClick={() => setActive("Blogs")} style={{ backgroundColor: active === "Blogs" ? "blue" : "" }}>Blogs</li></Link>
                    <Link to={"/ContactUs"}><li className='p-2 rounded-xl' onClick={() => setActive("Contact Us")} style={{ backgroundColor: active === "Contact Us" ? "blue" : "" }}>Contact Us</li></Link>
                </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/' target='_blank'><img className='h-10' src={fbLogo} alt="facebook Logo" /></a>
                        <a href='https://x.com/' target='_blank'><img className='h-10' src={xLogo} alt="X logo" /> </a>
                        
                        <a href='https://www.youtube.com/' target='_blank'><img className='h-10' src={youtubeLogo} alt="Youtube Logo" /></a>
                        <a href='https://www.linkedin.com/' target='_blank'><img className='h-10' src={linkedIn} alt="LinkedIn Logo" /></a>
                    </div>
            </nav>

        </footer>
    );
};

export default Footer;