import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';
import './CartItem.css';
import { showPicture } from '../../services/show-picture.service';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/order';

const CartItem = ({ product }) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const reduceCount = () => {
        if (count > 1) setCount(count => count - 1);
    }
    const img = showPicture(product);

    return (
        <div>
            <Card className={'cart_card'}>
                <div style={{ textAlign: 'center' }}><h4>{product.name}</h4></div>
                <div className={'cart_item_wrapper'}>
                    <div>
                        <div><img
                            src={img}
                            alt={'img'}/>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ textAlign: 'center' }}><big><b>{product.price} Kr.</b></big></div>
                        <div>
                            <Button onClick={reduceCount}><big>-</big></Button>
                            <TextField size={'small'} style={{ width: '44px' }}
                                       className={'TextField-without-border-radius'} value={count}/>
                            <Button onClick={() => setCount(count => count + 1)}><big>+</big></Button>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <Button fullWidth onClick={() => dispatch(removeItem(product))}>remove</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CartItem;