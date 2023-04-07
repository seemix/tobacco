import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Category = () => {
    const { id } = useParams();
    const { categories } = useSelector(state => state.categoryStore);
    const currentCat = categories.filter(item => item.id === +id);
    return (
        <div style={{ marginTop: '70px' }}>
            {
                currentCat &&
                <h2>{currentCat.map(item => item.name + '-' + item.id)}</h2>
            }
        </div>
    );
};

export default Category;