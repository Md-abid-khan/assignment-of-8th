import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

    const ChangeFavicon = (iconUrl) => {
        const favicon = document.querySelector("link[rel='icon']");
        favicon.href = iconUrl;
    };

    useEffect(() => {
        document.title = `Doc-Tab`;

    }, []
)
    useEffect(() => {
        ChangeFavicon('/public/doctor-icon-stethoscope-nurse-logo-260nw-2481104725.webp')
    }, [])

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;