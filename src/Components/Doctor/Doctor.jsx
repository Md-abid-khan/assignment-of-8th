import React from 'react';
import { Link } from 'react-router';
import IconR from "../../../Needed images/Logos/registered.png"

const Doctor = ({ doctor }) => {
    const { button, education, experience, id, image, name, registrationNumber } = doctor;

    return (
        <div className="card bg-base-100  shadow-sm rounded-2xl">
            <figure>
                <img
                    src={image}
                    alt="Doctor's Image"
                    className="rounded-xl h-70 w-75 mt-5" />
            </figure>
            <div className='flex gap-5  py-2 mt-2 p-10'>
                <div className='bg-green-300 rounded-3xl p-2'>Available</div>
                <div className='bg-blue-400 rounded-3xl p-2'>{experience}+ Years Experience  </div>
            </div>
            <div className='flex flex-col gap-2 p-10'>
                <h2 className="text-2xl font-bold flex">{name}</h2>
                <h2 className='font-semibold flex'>{education}</h2>
                <div className='border-t-2 w-75 border-dotted'></div>
                <p className='flex gap-2 items-center'> <img src={IconR} alt="IconR" className='h-5' /> {registrationNumber}</p>
            </div>
            <Link className='px-5' to={`/DoctorDetails/${id}`}>
                <button className="btn w-full rounded-4xl mb-5 ">{button}</button>
            </Link>
        </div>
    );
};

export default Doctor;