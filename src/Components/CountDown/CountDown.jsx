import React from 'react';
import doctorImage from "../../../B11A08-router-warrior/C001-assets/success-doctor.png"
import reviewImage from "../../../B11A08-router-warrior/C001-assets/success-review.png"
import patientImage from "../../../B11A08-router-warrior/C001-assets/success-patients.png"
import stuffImage from "../../../B11A08-router-warrior/C001-assets/success-staffs.png"
import Counting from './Counting';

const CountDown = () => {

    return (
        <div className='mb-10 flex flex-col items-center'>
            <h1 className='text-3xl mt-15 mb-5 font-bold'>We Provide Best Medical Services</h1>
            <p className='mb-10'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={doctorImage} alt="" />
                    <div className='font-bold text-5xl my-2 flex'>
                        <Counting target={199}></Counting>+
                    </div>
                    <div className='flex font-semibold text-xl'>Total Doctors</div>
                </div>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={reviewImage} alt="" />
                    <div className='font-bold text-5xl my-2 flex'>
                        <Counting target={467}></Counting>+
                    </div>
                    <div className='flex font-semibold text-xl'>Total Reviews</div>
                </div>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={patientImage} alt="" />
                    <div className='font-bold text-5xl my-2 flex'>
                        <Counting target={1900}></Counting>+
                    </div>
                    <div className='flex font-semibold text-xl'>Patients</div>

                </div>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={stuffImage} alt="" />
                    <div className='font-bold text-5xl my-2 flex'>
                        <Counting target={300}></Counting>+
                    </div>
                    <di className='flex font-semibold text-xl'>Total Stuffs</di>
                </div>
            </div>
        </div>
    );
};

export default CountDown;