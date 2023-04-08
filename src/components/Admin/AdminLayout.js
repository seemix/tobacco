import React from 'react';
import { useDispatch } from 'react-redux';
import Login from './Login/Login';

const AdminLayout = () => {
    // const dispatch = useDispatch();
    return (
        <div>
            <h2>Admin</h2>
            <Login/>
        </div>
    );
};

export default AdminLayout;