import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/category';
import SingleCategoryAdmin from './SingleCategoryAdmin/SingleCategoryAdmin';
import { Button, Dialog, DialogContent } from '@mui/material';
import AddEditForm from './AddEditForm/AddEditForm';
import { hideCategoryEdit, showCategoryEdit } from '../../../store/appearance';

const CategoriesAdmin = () => {
    const dispatch = useDispatch();
    const { categoryEditModal } = useSelector(state => state.appearanceStore);
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])
    const { categories } = useSelector(state => state.categoryStore);
    return (
        <div>
            <h2>Categories <Button onClick={() => dispatch(showCategoryEdit())}> + Add new</Button></h2>
            <Dialog
                maxWidth={'xs'}
                open={categoryEditModal}
                onClose={() => dispatch(hideCategoryEdit())}
            >
                <DialogContent style={{ borderRadius: 0}}>
                <AddEditForm/>
                </DialogContent>
            </Dialog>
            {
                categories.map((category, index) => <SingleCategoryAdmin category={category} key={index}/>)
            }
        </div>
    );
};

export default CategoriesAdmin;