import React from 'react';

import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { hideCart } from '../../store/appearance';
import { Button } from '@mui/material';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { showCart } = useSelector(state => state.appearanceStore);
    const dispatch = useDispatch();
    return (
        <div className={showCart ? 'cart_wrapper show_cart' : 'cart_wrapper'}>

            <div style={{ cursor: 'pointer' }} onClick={() => dispatch(hideCart())}>
                <CloseIcon fontSize={'large'} className={'close_icon'}/>
            </div>
            <div className={'inside_wrapper'}>
                <h3>Shopping cart</h3>
                <div className={'items_wrapper'}>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
            </div>
            <div className={'bottom_wrapper'}>
                <div className={'total_wrapper'}>
                    <big>Total price is: <span className={'price'}>224Kr.</span>
                    </big>
                </div>
                <div style={{margin: '0 auto'}}>
                    <Button variant={'contained'} style={{padding: '5px 50px'}}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Cart;