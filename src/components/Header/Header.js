import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

import './Header.css';
import logo from './tob2.png'
import SearchBar from '../SearchBar/SearchBar';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import { closeMenu, openMenu, setLanguage, showHideItem } from '../../store/appearance';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { openedMenu, showElement, language, filteredLang } = useSelector(state => state.appearanceStore);
    const dispatch = useDispatch();

    return (
        <div className={'header_wrapper'}>
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
                            <li><a href="#">Category1</a></li>
                            <li><a href="#">Category2</a></li>
                            <li><a href="#">Category3</a></li>
                            <li><a href="#">Category4</a></li>
                            <li><a href="#">Category5</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <nav id={'lang'} className={'menu_wrapper'} style={{ minWidth: '70px' }}>
                <ul>
                    <li>
                        <a href="#" className={'menu_parent'}>{language}<i className={'arrow_right'}></i> </a>
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
                <div>
                    <CartIcon/>
                </div>
                <div className={!showElement ? 'hide_element' : 'show_element'}><SearchBar setShow={showElement}/></div>
                <div onClick={() => dispatch(showHideItem())} className={showElement ? 'hide_element' : 'show_element'}>
                    <SearchIcon/>
                </div>
            </div>
        </div>
    );
};

export default Header;