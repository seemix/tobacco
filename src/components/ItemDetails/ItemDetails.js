import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Parser } from 'html-to-react'
import { Button, Card } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';

import { getProductById } from '../../store/product';
import { showPicture } from '../../services/show-picture.service';
import { showCart } from '../../store/appearance';
import { addProductToCart } from '../../store/order';
import { config } from '../../config/config';
import './ItemDetails.css';

const ItemDetails = () => {
    const [showButton, setShowButton] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);
    const { singleProduct } = useSelector(state => state.productStore);
    const { products } = useSelector(state => state.orderStore);
    useEffect(() => {
        const inCart = products.findIndex(obj => obj.id === singleProduct.id);
        if (inCart !== -1) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [products, singleProduct]);
    let img;
    if (singleProduct) img = showPicture(singleProduct);
    return (
        <div className={'main_container'}>
            {singleProduct &&
                <div>
                    <div className={'path'}>Products /
                        <Link to={`../../category/${singleProduct.categoryId}`}>  {singleProduct.category.name} </Link>
                        / {singleProduct.name}
                    </div>
                    <Card className={'card_details'}>
                        <div>
                            <img src={img} width={700} alt="pic"/>
                        </div>
                        <div style={{ width: '450px', padding: '25px' }}>
                            <h3>
                                {singleProduct.name}
                            </h3>
                            <div className={'details_wrapper'}>
                                <div className={'price_wrapper'}>
                                    {(singleProduct.oldPrice !== 0) &&
                                        <span className={'old_price'}>{singleProduct.oldPrice} {config.CURRENCY}</span>
                                    }
                                    <span
                                        className={singleProduct.oldPrice === 0 ? 'price standard_price' : 'price'}>
                                        {singleProduct.price} {config.CURRENCY}
                                </span>
                                </div>
                                {!showButton && <>
                                    <Button variant={'contained'} fullWidth
                                            onClick={() => dispatch(addProductToCart({ count: 1, ...singleProduct }))}>
                                        <ShoppingCartIcon/> Add to cart
                                    </Button></>
                                }
                                {showButton &&
                                    <Button fullWidth onClick={() => dispatch(showCart())}><ShoppingCartCheckoutIcon/>
                                        Already in cart</Button>
                                }
                            </div>
                            {Parser().parse(singleProduct.description)}

                        </div>
                    </Card>
                </div>
            }
        </div>
    );
};

export default ItemDetails;