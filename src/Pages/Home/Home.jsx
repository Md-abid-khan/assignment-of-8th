import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctor/Doctors';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Doctors data={data}></Doctors>
        </div>
    );
};

export default Home;