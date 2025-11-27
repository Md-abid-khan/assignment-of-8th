import React from 'react';

const Booked = ({bookmark,cancelAppointment}) => {
    return (
        <div className='flex flex-col items-center gap-5 bg-white rounded-2xl w-200'>
                <div className='flex justify-around items-center gap-50 p-5 '>
                    <div>
                        <div>{bookmark.name}</div>
                        <p>{bookmark.education}</p>
                    </div>
                    <div>
                        Appointment Fee:{bookmark.fee}Taka + VAT
                    </div>
                </div>
                <button onClick={() => {   cancelAppointment(bookmark.id) }} className='btn w-8/10 rounded-2xl mb-5 border-2 border-red-300 text-red-500'>
                    Cancel Appointment
                </button>
            </div>
    );
};

export default Booked;