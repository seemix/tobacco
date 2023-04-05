import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <div><Header/></div>
            <div><Outlet/></div>
        </>
    );
};

export default Layout;