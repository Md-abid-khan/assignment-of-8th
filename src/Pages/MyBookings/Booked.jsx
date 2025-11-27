import React from 'react';

const Booked = ({ bookmark, cancelAppointment }) => {
    return (
        <div className='flex flex-col gap-5 items-center bg-amber-400 p-10 rounded-2xl w-full'>
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