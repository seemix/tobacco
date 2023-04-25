import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsByCategory } from '../../store/product';
import ItemCard from '../ItemCard/ItemCard';
import { config } from '../../config/config';

const Category = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProductsByCategory(id));
    }, [id, dispatch]);
    const { categories } = useSelector(state => state.categoryStore);
    const currentCat = categories.filter(item => item._id === id)[0];
    const { products } = useSelector(state => state.productStore);

    return (
        <div style={{marginTop: '80px'}}>
            <div className={'image_container'}
                 style={{ backgroundImage: `url(${config.BACKEND_URL}/category/${currentCat?.picture})` }}>
                <div className={'image_overlay'}></div>
                <h2>{currentCat?.name.toUpperCase()}</h2>
            </div>
            <div className={'items_wrapper'}>
                    {products &&
                        products.map(item =><ItemCard key={item._id} product={item}/>)
                    }

            </div>
        </div>
    );
};

export default Category;