import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';

import './ProductCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const ProductCard = ({ product }) => {
    return (
        <div className={'product_card_wrapper'}>
            <Card>
                <CardMedia
                    className={'gray_scale'}
                    component={'img'}
                    alt={product.picture}
                    width="150"
                    height={'120'}
                    image={product.picture}
                />
                <div className={'card_content'}>
                    <h4>{product.name}</h4>
                    <span> <small>{product.oldPrice} Kr.</small> {product.price} Kr.</span>
                    <small>
                        {product.description}
                    </small>
                    <div style={{ display: 'flex', justifyContent: 'right' }}>
                        <Button><EditIcon/></Button>
                        <Button><DeleteForeverIcon/></Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;