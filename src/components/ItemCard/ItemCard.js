import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './ItemCard.css';

const ItemCard = ({ product }) => {
    return (
        <div className={'card_wrapper'}>
            <Card>
                <CardMedia
                    className={'gray_scale'}
                    component={'img'}
                    alt={product.picture}
                    width="300"
                    height={'180'}
                    image={product.picture}
                />
                <div className={'card_content'}>
                    <h3>{product.name}</h3>
                    {/*<div>*/}
                    {/*    <small>{*/}
                    {/*        product.description*/}
                    {/*    }</small>*/}
                    {/*</div>*/}
                    <div className={'price_wrapper'}>
                        <span className={'old_price'}>{product.oldPrice} Kr.</span>
                        <span className={'price'}>{product.price} Kr.</span>
                    </div>
                    <Button variant={'outlined'}>Read more</Button>
                    <Button variant={'contained'}>
                        <ShoppingCartIcon/> Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;