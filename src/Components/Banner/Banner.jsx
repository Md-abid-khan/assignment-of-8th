import React from 'react';
import imageBanner from "../../../B11A08-router-warrior/C001-assets/banner-img-1.png"

const Banner = () => {
    return (
        <div className=" border-2 rounded-2xl mx-5 border-amber-700 mt-5 flex flex-col items-center bg-amber-400">
            <div className=" text-center">
                    <h1 className="text-5xl font-bold mt-10">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className="py-6">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                    <fieldset className="fieldset  border-base-300  w-130 p-4 mx-auto bg-amber-400">
                        <div className="flex justify-around  ">
                            <input type="text" className="input  rounded-2xl " placeholder="Search any doctor..." />
                            <button className="btn bg-blue-500 w-35 rounded-2xl border-blue-700">Search Now</button>
                        </div>
                    </fieldset>       
            </div>
            <div className='flex justify-center gap-10 mb-15 my-5'>
                <img className='h-60' src={imageBanner} alt="" />
                <img className='h-60' src={imageBanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;