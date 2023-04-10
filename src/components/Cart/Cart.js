import React from 'react';

import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { hideCart } from '../../store/appearance';
import { Button } from '@mui/material';

const Cart = () => {
    const { showCart } = useSelector(state => state.appearanceStore);
    const dispatch = useDispatch();
    return (
        <div className={showCart ? 'cart_wrapper show_cart' : 'cart_wrapper'}>
            <div style={{ cursor: 'pointer' }} onClick={() => dispatch(hideCart())}>
                <CloseIcon fontSize={'large'} style={{position: 'absolute', top: '20px', left: '20px'}}/>
            </div>
            <h2>Cart</h2>
            <p>44444444444444</p>
            <p>44444444444444</p>
            <p>44444444444444</p>
            <p>44444444444444</p>
            <Button variant={'contained'} sx={{width: '100%' }}>
                Checkout
            </Button>
        </div>
    );
};

export default Cart;