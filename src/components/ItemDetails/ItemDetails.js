import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Parser } from 'html-to-react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../store/product';
import { Button, Card } from '@mui/material';
import { showPicture } from '../../services/show-picture.service';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const ItemDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);
    const { singleProduct } = useSelector(state => state.productStore);
    let img;
    if (singleProduct) img = showPicture(singleProduct);
    return (
        <div className={'main_container'}>
            {singleProduct &&
                <div>
                    <div style={{margin: '20px 0'}}>Poducts /
                        <Link to={`../../category/${singleProduct.categoryId}`}>  {singleProduct.category.name} </Link> /
                        {singleProduct.name}
                    </div>
                    <Card style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'stretch',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <img src={img} width={700} alt="pic"/>
                        </div>
                        <div style={{ width: '450px', padding: '25px' }}>
                            <h3>
                                {singleProduct.name}
                            </h3>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <div className={'price_wrapper'}>
                                    {(singleProduct.oldPrice !== 0) &&
                                        <span className={'old_price'}>{singleProduct.oldPrice} Kr.</span>
                                    }
                                    <span
                                        className={singleProduct.oldPrice === 0 ? 'price standard_price' : 'price'}>
                                        {singleProduct.price} Kr.
                                </span>
                                </div>
                                <Button variant={'contained'} fullWidth>
                                    <ShoppingCartIcon/> Add to cart</Button>
                                <Button fullWidth><ShoppingCartCheckoutIcon/> Already in cart</Button></div>
                            {Parser().parse(singleProduct.description)}

                        </div>
                    </Card>
                </div>
            }
        </div>
    );
};

export default ItemDetails;