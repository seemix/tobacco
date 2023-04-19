import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Dialog, DialogContent } from '@mui/material';

import ProductCard from './ProductCard';
import { getProductsByCategory } from '../../../store/product';
import { hideProductForm, showProductForm } from '../../../store/appearance';
import ProductForm from './ProductForm';
import { getCategoryById } from '../../../store/category';
const ProductsAdmin = () => {
    const dispatch = useDispatch();
    const { productFormModal } = useSelector(state => state.appearanceStore);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCategoryById(id));
        dispatch(getProductsByCategory(id));
    }, [dispatch, id]);
    const { currentCategory } = useSelector(state => state.categoryStore);
    const { products } = useSelector(state => state.productStore);
    return (
        <div>
            <h2>{currentCategory?.name}
                <Button onClick={()=>dispatch(showProductForm(currentCategory.id))}>+ Add new product </Button>
            </h2>
            <Dialog
                maxWidth={'xs'}
                open={productFormModal}
                onClose={() => dispatch(hideProductForm())}
            >
                <DialogContent style={{ borderRadius: 0 }}>
                    <ProductForm id={currentCategory?.id}/>
                </DialogContent>
            </Dialog>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products &&
                    products.map(item => <ProductCard key={item.id} product={item}/>)
                }
            </div>
        </div>
    );
};

export default ProductsAdmin;