import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { getItemFromLS } from '../../Components/LocalStorage';
import Chart from '../../Components/Chart/Chart';
import Booked from './Booked';

const MyBookings = () => {
    const data = useLoaderData();
    const notified = (msg) => toast(msg);

    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        const LsItems = getItemFromLS();
        const convertedData = LsItems.map(item => parseInt(item));
        const selectedItems = data.filter(d => convertedData.includes(d.id));
        setAppointments(selectedItems);
    },[data]);

    const cancelAppointment = (id)=>{
        const cancelItems = appointments.filter(book=>book.id!==id);
        setAppointments(cancelItems);
        notified(`Appointment Cancel`);
        const StoredItem = localStorage.getItem("bookMarks")
        const storedItemParse = JSON.parse(StoredItem);
        const particularStoredItems = storedItemParse.find(item => item == id)
        const removedId = storedItemParse.filter(book => book !== particularStoredItems);
        const stringyRemoveId = JSON.stringify(removedId)
        localStorage.setItem("bookMarks", stringyRemoveId)

    }

    if (appointments.length === 0) {
        return [<div className='flex flex-col items-center my-10'>
            <h2 className='text-3xl font-bold'>  You have not booked your appointment yet   </h2>
            <p className='my-5'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <button className='btn bg-blue-600 border-blue-700'>  <Link to={"/"}> Book An Appointment </Link>  </button>
        </div>]
    }
    return (
        <div>
            <div>
            <div className='flex flex-col items-center bg-blue-300 mx-60 p-10 rounded-2xl mt-10'>
                <Chart appointments={appointments}></Chart>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-10 font-bold text-2xl'>My Today Appointments</h1>
                <p className='my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                <div className='flex flex-col items-center gap-10 p-5 m-5 ' >
                    {
                        appointments.map(bookmark => <Booked key={bookmark.id} cancelAppointment={cancelAppointment} bookmark={bookmark}></Booked>)
                    }
                </div>

            </div>

        </div>
        </div>
    );
};

export default MyBookings;