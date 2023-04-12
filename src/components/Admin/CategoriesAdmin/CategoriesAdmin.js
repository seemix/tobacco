import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/category';
import SingleCategoryAdmin from './SingleCategoryAdmin/SingleCategoryAdmin';

const CategoriesAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])
    const { categories } = useSelector(state => state.categoryStore);
    return (
        <div>
            <h2>Categories</h2>
            {
                categories.map((category, index) => <SingleCategoryAdmin category={category} key={index}/>)
            }
        </div>
    );
};

export default CategoriesAdmin;