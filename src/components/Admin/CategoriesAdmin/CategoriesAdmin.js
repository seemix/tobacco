import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/category';
import SingleCategoryAdmin from './SingleCategoryAdmin/SingleCategoryAdmin';
import { Button, Modal } from '@mui/material';
import AddEditForm from './AddEditForm/AddEditForm';

const CategoriesAdmin = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])
    const { categories } = useSelector(state => state.categoryStore);
    return (
        <div>
            <h2>Categories <Button onClick={() => setOpen(true)}> + Add new</Button></h2>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <AddEditForm/>
            </Modal>
            {
                categories.map((category, index) => <SingleCategoryAdmin category={category} key={index}/>)
            }
        </div>
    );
};

export default CategoriesAdmin;