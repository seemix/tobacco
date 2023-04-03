import React from 'react';

import './Header.css';
import logo from './tob2.png'

const Header = () => {
    return (
        <div className={'header_wrapper'}>
            <div className={'header_container'}>
                <div>
                    <img src={logo} alt="logo" height={'70'}/>
                </div>
                <div className={'menu_wrapper'}>
                    <a href="#" className={'menu_link'}>Home</a>
                    <a href="#" className={'menu_link'}>About us</a>
                    <a href="#" className={'menu_link'}>Products</a>
                    <a href="#" className={'menu_link'}>Contacts</a>
                </div>
                <div className={'icons_wrapper'}>
                    <div>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                        >
                            <path
                                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"/>
                        </svg>
                    </div>
                    <div>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="2em"
                            width="2em"
                        >
                            <path
                                d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;