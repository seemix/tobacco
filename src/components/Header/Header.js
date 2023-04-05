import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';
import logo from './tob2.png'
import SearchBar from '../SearchBar/SearchBar';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';

const Header = () => {
    const [show, setShow] = useState(false);
    const [lang, setLang] = useState('EN');
    const [filteredLang, setFilteredLang] = useState(['DK', 'RU']);
    const languages = ['EN', 'DK', 'RU'];

    const handleClick = () => {
        setShow(!show);
    }
    const setLanguage = (lang) => {
        setLang(lang);
        setFilteredLang(languages.filter(item => item !== lang));
    }
    return (
        <div className={'header_wrapper'}>
            <div className={'burger_icon'}>
                <MenuIcon fontSize={'large'} style={{color: 'rgba(109, 109, 109)', cursor: 'pointer', marginTop: '5px'}}/>
            </div>
                <div>
                    <img src={logo} alt="logo" className={'logo'}/>
                </div>

                <nav className={'menu_wrapper'}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contacts</a></li>
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
                <nav id={'lang'} className={'menu_wrapper'} style={{minWidth: '70px'}}>
                    <ul>
                        <li>
                            <a href="#" className={'menu_parent'}>{lang}<i className={'arrow_right'}></i> </a>
                            <ul style={{ width: '80px' }}>
                                {
                                    filteredLang.map(item => <li style={{ borderBottom: 0 }} key={item}>
                                        <a href="#" onClick={() => setLanguage(item)}>{item}</a>
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
                    <div className={!show ? 'hide_element' : 'show_element'}><SearchBar setShow={setShow}/></div>
                    <div onClick={handleClick} className={show ? 'hide_element' : 'show_element'}>
                        <SearchIcon/>
                    </div>
                </div>
        </div>
    );
};

export default Header;