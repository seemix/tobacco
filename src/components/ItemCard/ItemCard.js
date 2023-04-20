import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './ItemCard.css';
import { showPicture } from '../../services/show-picture.service';

const ItemCard = ({ product }) => {
    const img = showPicture(product);
    return (
        <div className={'card_wrapper'}>
            <Card>
                <CardMedia
                    className={'gray_scale'}
                    component={'img'}
                    alt={product.picture}
                    width="300"
                    height={'180'}
                    image={img}
                />
                <div className={'card_content'}>
                    <h3>{product.name}</h3>
                    <div className={'price_wrapper'}>
                        {(product.oldPrice !== 0) &&
                            <span className={'old_price'}>{product.oldPrice} Kr.</span>
                        }
                        <span
                            className={product.oldPrice === 0 ? 'price standard_price' : 'price'}>{product.price} Kr.
                        </span>
                    </div>
                    <Link to={`/product/${product.id}`}>
                        <Button variant={'outlined'} fullWidth>Read more</Button>
                    </Link>
                    <Button variant={'contained'}>
                        <ShoppingCartIcon/> Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;