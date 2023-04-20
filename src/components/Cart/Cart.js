import React, { useState } from 'react';

import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { hideCart } from '../../store/appearance';
import { Button } from '@mui/material';
import CartItem from '../CartItem/CartItem';
import { removeAllItems } from '../../store/order';

const Cart = () => {
    const { cart } = useSelector(state => state.appearanceStore);
    const { products, total } = useSelector(state => state.orderStore);
    const dispatch = useDispatch();
    const [emptyCart, setEmptyCart] = useState(false);
    const confirmEmptyCart = () => {
        dispatch(removeAllItems());
        setEmptyCart(false);
    }
    return (
        <div className={cart ? 'cart_wrapper show_cart' : 'cart_wrapper'}>
            <div style={{ cursor: 'pointer' }} onClick={() => dispatch(hideCart())}>
                <CloseIcon fontSize={'large'} className={'close_icon'}/>
            </div>
            <div className={'inside_wrapper'}>
                <h3>Shopping cart</h3>
                <div className={'items_wrapper'}>
                    {
                        products.map(item => <CartItem key={item.id} product={item}/>)
                    }
                    {products.length > 0 && !emptyCart &&
                        <Button fullWidth onClick={()=>setEmptyCart(true)}>remove all</Button>
                    }
                    {emptyCart && <>
                        Remove all items?
                        <Button onClick={() => setEmptyCart(false)}>Cancel</Button>
                        <Button onClick={confirmEmptyCart}>Confirm</Button>
                    </>}
                </div>
            </div>
            <div className={'bottom_wrapper'}>
                <div className={'total_wrapper'}>
                    {products.length > 0 &&
                        <big>
                            Total price is: <span className={'price'}>{total} Kr.</span>
                        </big>
                    }
                </div>
                <div style={{ margin: '0 auto' }}>
                    <Button variant={'contained'} style={{ padding: '5px 50px' }}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Cart;