import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../store/product';
import ItemCard from '../ItemCard/ItemCard';

const Category = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProductsByCategory(id));
    }, [dispatch, id]);
    const { categories } = useSelector(state => state.categoryStore);
    const currentCat = categories.filter(item => item.id === +id);
    const { products } = useSelector(state => state.productStore);
    return (
        <div className={'main_container'}>
            {
                currentCat &&
                <h2>{currentCat.map(item => item.name.toUpperCase())}</h2>
            }
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
                {products &&
                    products.map(item => <ItemCard key={item.id} product={item}/>)
                }
            </div>

        </div>
    );
};

export default Category;