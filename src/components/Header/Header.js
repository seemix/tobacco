import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from './tob2.png'
import SearchBar from '../SearchBar/SearchBar';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import { closeMenu, openMenu, setLanguage, showCart, showHideItem } from '../../store/appearance';
import { getAllCategories } from '../../store/category';
import Cart from '../Cart/Cart';

const Header = () => {
    const { openedMenu, cart, showElement, language, filteredLang } = useSelector(state => state.appearanceStore);
    const { categories } = useSelector(state => state.categoryStore);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);
    return (
        <div className={'header_wrapper'}>
            <Backdrop open={cart}/>
            <div className={'burger_icon'}>
                {
                    !openedMenu ? <MenuIcon onClick={() => dispatch(openMenu())} fontSize={'large'}
                                            style={{
                                                color: 'rgba(109, 109, 109)',
                                                cursor: 'pointer',
                                                marginTop: '5px'
                                            }}/>
                        : <CloseIcon
                            onClick={() => dispatch(closeMenu())} fontSize={'large'}
                            style={{ color: 'rgba(109, 109, 109)', cursor: 'pointer', marginTop: '5px' }}/>

                }
            </div>
            <div>
                <img src={logo} alt="logo" className={'logo'}/>
            </div>
            <nav className={!openedMenu ? 'menu_wrapper' : 'menu_wrapper show_menu'}>
                <ul>
                    <li><NavLink to={'/'} onClick={() => dispatch(closeMenu())}>Home</NavLink></li>
                    <li><NavLink to={'/about'} onClick={() => dispatch(closeMenu())}>About us</NavLink></li>
                    <li><NavLink to={'/contacts'} onClick={() => dispatch(closeMenu())}>Contacts</NavLink></li>
                    <li><a href="#" className={'menu_parent'}>Products <i className={'arrow_right'}></i> </a>
                        <ul>
                            {categories &&
                                categories.map(cat => <li key={cat.id}><NavLink
                                    to={`category/${cat.id}`}>{cat.name}</NavLink></li>)
                            }

                        </ul>
                    </li>

                </ul>
            </nav>
            <nav id={'lang'} className={'menu_wrapper'} style={{ minWidth: '70px' }}>
                <ul>
                    <li>
                        <a href="#" className={'menu_parent'}>{language} <i className={'arrow_right'}></i></a>
                        <ul style={{ width: '80px' }}>
                            {
                                filteredLang.map(item => <li style={{ borderBottom: 0 }} key={item}>
                                    <a href="#" onClick={() => dispatch(setLanguage(item))}>{item}</a>
                                </li>)
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={'icons_wrapper'}>
                <div onClick={() => dispatch(showCart())} style={{ cursor: 'pointer' }}>
                    <Badge badgeContent={2} color={'secondary'} style={{ top: '3px', zIndex: -1 }}>
                        <CartIcon/>
                    </Badge>
                </div>
                <div className={!showElement ? 'hide_element' : 'show_element'}><SearchBar setShow={showElement}/></div>
                <div onClick={() => dispatch(showHideItem())} className={showElement ? 'hide_element' : 'show_element'}>
                    <SearchIcon/>
                </div>
            </div>
            <Cart/>
        </div>
    );
};

export default Header;