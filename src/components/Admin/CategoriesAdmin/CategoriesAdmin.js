import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reorder } from 'framer-motion';
import { Button, Dialog, DialogContent } from '@mui/material';

import { categoriesReorder, getAllCategories, saveCategoriesOrder } from '../../../store/category';
import SingleCategoryAdmin from './SingleCategoryAdmin/SingleCategoryAdmin';
import AddEditForm from './AddEditForm/AddEditForm';
import { hideCategoryEdit, showCategoryEdit } from '../../../store/appearance';

const CategoriesAdmin = () => {
    const reOrder = (newOrder) => {
        dispatch(categoriesReorder(newOrder));
    };
    const dispatch = useDispatch();
    const { categoryEditModal } = useSelector(state => state.appearanceStore);
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])
    const { categories, showReorderButton } = useSelector(state => state.categoryStore);
    return (
        <div>
            <h2>
                Categories
            </h2>
            <h2><Button onClick={() => dispatch(showCategoryEdit())}> + Add new category</Button>
                {showReorderButton &&
                    <Button onClick={() => dispatch(saveCategoriesOrder(categories))} color={'success'}>
                        Save order</Button>}</h2>
            <Dialog
                maxWidth={'xs'}
                open={categoryEditModal}
                onClose={() => dispatch(hideCategoryEdit())}
            >
                <DialogContent style={{ borderRadius: 0 }}>
                    <AddEditForm/>
                </DialogContent>
            </Dialog>
            <Reorder.Group values={categories} onReorder={(newOrder) => reOrder(newOrder)} as={'ol'}>
                {categories &&
                    categories.map((category, index) => <Reorder.Item value={category}
                                                                      key={category.id}
                                                                      whileDrag={{ scale: 1.05 }}>
                        <SingleCategoryAdmin category={category} key={index}/></Reorder.Item>)
                }
            </Reorder.Group>
        </div>
    );
};
export default CategoriesAdmin;