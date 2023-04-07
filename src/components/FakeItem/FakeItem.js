import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const FakeItem = ({ image, index }) => {
    return (
        <div className={'card_wrapper'}>
            <Card >
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
                    {/*<div>*/}
                    {/*    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error eveniet, in, libero*/}
                    {/*        neque nisi optio porro</small>*/}
                    {/*</div>*/}
                    <div className={'price_wrapper'}>
                        <span className={'old_price'}>$1020</span>
                        <span className={'price'}>$999</span>
                    </div>
                    <Button variant={'outlined'}>Read more</Button>
                    <Button variant={'contained'} >
                        <ShoppingCartIcon/> Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default FakeItem;