import React from 'react';

import loader from './6-dots-rotate.svg';
const Loader = () => {
    return (
        <div>
            <div className="loader">
                <img src={loader} alt="loder"/>
            </div>
        </div>
    );
};

export default Loader;