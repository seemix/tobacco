import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';

import './ItemCard.css';

const ItemCard = ({ image, index }) => {
    return (
        <div className={'card_wrapper'}>
            <Card className={'card'}>
                <CardMedia
                    className={'gray_scale'}
                    component={'img'}
                    alt={image}
                    width="300"
                    height={'180'}
                    image={image}
                />
                <div className={'card_content'}>
                    <h3>Item {index}</h3>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <Button variant={'contained'}>Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;