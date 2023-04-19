import React from 'react';
import { Button, Card, CardMedia } from '@mui/material';
import { Parser } from 'html-to-react'

import { config } from '../../../config/config';

import './ProductCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setProductForUpdate } from '../../../store/product';
import { showProductForm } from '../../../store/appearance';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    let img = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
    if(product.picture) {
        img = `${config.BACKEND_URL}product/${product?.picture}`;
    } else {
        if(product.pictureLink) {img = product.pictureLink;}
    }
    const editProduct = () => {
        dispatch(setProductForUpdate(product));
        dispatch(showProductForm(product.categoryId));
    }
    return (
        <div className={'product_card_wrapper'}>
            <Card>
                <CardMedia
                    className={'gray_scale'}
                    component={'img'}
                    alt={product.picture}
                    width="150"
                    height={'120'}
                    image={img}
                />
                <div className={'card_content'}>
                    <h4>{product.name}</h4>
                    <span> <small>{product.oldPrice} Kr.</small> {product.price} Kr.</span>
                    <small>
                        {Parser().parse(product.description)}
                    </small>
                    <div style={{ display: 'flex', justifyContent: 'right' }}>
                        <Button onClick={editProduct}><EditIcon/></Button>
                        <Button><DeleteForeverIcon/></Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;