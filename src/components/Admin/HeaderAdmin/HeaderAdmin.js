import React from 'react';
import logo from '../../Header/tob2.png';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const HeaderAdmin = () => {
    const { user, auth } = useSelector(state => state.authStore);
    return (
        <div className={'header_wrapper'}>
            <div>
                <img src={logo} alt="logo" className={'logo'}/>
            </div>
            <nav className={'menu_wrapper'}>
                <ul>
                    <li><NavLink to={'/'}>Main</NavLink></li>
                    <li><NavLink to={'/admin/orders'}>Orders</NavLink></li>
                    <li><NavLink to={'/admin/categories'}>Categories</NavLink></li>
                    <li><NavLink to={'/'}>Products</NavLink></li>
                </ul>
            </nav>
            <div>
                {auth ? user : ''}
                <Avatar>{user[0]}</Avatar>
            </div>
        </div>
    );
};

export default HeaderAdmin;