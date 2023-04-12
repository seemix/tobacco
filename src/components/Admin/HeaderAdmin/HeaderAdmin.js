import React from 'react';
import logo from '../../Header/tob2.png';
import { Navigate, NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../../store/auth';

const HeaderAdmin = () => {
    const { user, auth, status } = useSelector(state => state.authStore);
    const dispatch = useDispatch();
    return (
        <div className={'header_wrapper'}>
            {
                status === 'logout' && <Navigate to={'/login'}/>
            }
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
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div>{auth ? user : ''}</div>
                <Avatar>{user[0]}</Avatar>
                <div style={{ cursor: 'pointer' }}>
                    <LogoutIcon onClick={() => dispatch(logout())}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdmin;