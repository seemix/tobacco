import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../../store/product';
import ProductCard from './ProductCard';
import { Button, Dialog, DialogContent } from '@mui/material';
import { hideProductForm, showProductForm } from '../../../store/appearance';
import ProductForm from './ProductForm';

const ProductsAdmin = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { productFormModal } = useSelector(state => state.appearanceStore);
    useEffect(() => {
        dispatch(getProductsByCategory(id));
    }, [id, dispatch]);
    const { categories } = useSelector(state => state.categoryStore);
    const currentCat = categories.filter(item => item.id === +id)[0];
    const { products } = useSelector(state => state.productStore);
    return (
        <div>
            <h2>{currentCat?.name} <Button onClick={()=>dispatch(showProductForm())}>+ Add new product </Button></h2>
            <Dialog
                maxWidth={'xs'}
                open={productFormModal}
                onClose={() => dispatch(hideProductForm())}
            >
                <DialogContent style={{ borderRadius: 0 }}>
                    <ProductForm/>
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