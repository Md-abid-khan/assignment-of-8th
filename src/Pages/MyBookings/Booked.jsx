import React from 'react';

const Booked = ({ bookmark, cancelAppointment }) => {
    return (
        <div className='flex flex-col gap-5 items-center bg-amber-400 p-10 rounded-2xl'>
            <div className='flex items-center gap-60'>
                <div className='flex flex-col gap-4'>
                    <div>{bookmark.name}</div>
                    <p>{bookmark.education}</p>
                </div>
                <div>
                    Appointment Fee:{bookmark.fee}Taka + VAT
                </div>
            </div>
            <button onClick={() => { cancelAppointment(bookmark.id) }} className='btn w-9/10 rounded-2xl bg-red-400 text-red-600 border-red-700 '>
                Cancel Appointment
            </button>
        </div>
    );
};

export default Booked;

// flex flex-col items-center gap-5 bg-white rounded-2xl w-200
// flex justify-around items-center gap-50 p-5 
// w-8/10 rounded-2xl mb-5 border-2 border-red-300 text-red-500