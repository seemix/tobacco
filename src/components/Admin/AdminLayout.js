import React from 'react';
import { useSelector } from 'react-redux';
import MainAdmin from './MainAdmin';
import { Navigate } from 'react-router-dom';

const AdminLayout = () => {
    const { auth } = useSelector(state => state.authStore);
    console.log(auth);
    return (
        <div>
            <h2>Admin wrapper</h2>
            {auth ? <MainAdmin/> : <Navigate to={'/login'}/>}
        </div>
    );
};

export default AdminLayout;