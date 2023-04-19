import React, { useEffect, useState } from 'react';
import { Button, DialogActions, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideProductForm } from '../../../store/appearance';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createProduct, deleteImage, setProductForUpdate, updateProduct } from '../../../store/product';
import { config } from '../../../config/config';

const ProductForm = ({ id }) => {
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [picSelect, setPicSelect] = useState('none');
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [preview, setPreview] = useState(null);
    const dispatch = useDispatch();
    const { productForUpdate } = useSelector(state => state.productStore);
    useEffect(() => {
        if (productForUpdate) setValue(productForUpdate.description);
    }, [])
    const handleClose = () => {
        dispatch(hideProductForm());
        dispatch(setProductForUpdate(null));
    }
    const removeImage = () => {
        dispatch(deleteImage(productForUpdate.picture));
    }
    const setUploadFile = (e) => {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    const handleChange = (event) => {
        setPreview(null);
        switch (event.target.value) {
            case 'none':
                setPicSelect('none');
                break;
            case 'link':
                setPicSelect('link');
                setValue('link', null);
                break;
            case 'upload':
                setPicSelect('upload');
        }
    };
    const saveForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', productForUpdate.id)
        formData.append('categoryId', id)
        formData.append('name', e.target.name.value);
        formData.append('description', value);
        formData.append('oldPrice', e.target.oldPrice.value);
        formData.append('price', e.target.price.value);
        if (picSelect === 'link') formData.append('pictureLink', e.target.pictureLink.value);
        formData.append('image', file);
        if(productForUpdate) {
            dispatch(updateProduct(formData));
          //  console.log(formData);
        } else {
            dispatch(createProduct(formData));
        }
        handleClose();
    }
    return (
        <>
            <h2>Product Form</h2>
            <form onSubmit={saveForm}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        defaultValue={productForUpdate?.name}
                        required
                        name={'name'}
                        fullWidth
                        className={'TextField-without-border-radius'}
                        label={'Product name'}
                    />
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
                    <div style={{ margin: '0 auto' }}>
                        <TextField
                            defaultValue={productForUpdate?.oldPrice}
                            name={'oldPrice'}
                            style={{ width: '100px', margin: '15px' }}
                            className={'TextField-without-border-radius'}
                            label={'old price'}
                        />
                        <TextField
                            defaultValue={productForUpdate?.price}
                            required
                            name={'price'}
                            style={{ width: '100px', margin: '15px' }}
                            className={'TextField-without-border-radius'}
                            label={'price'}
                        />
                        {!productForUpdate?.picture && <>
                            <RadioGroup row name={'pic_selector'}
                                        onChange={handleChange}
                            >
                                <FormControlLabel value={'none'} control={<Radio/>} label={'none'}/>
                                <FormControlLabel value={'link'} control={<Radio/>} label={'link'}/>
                                <FormControlLabel value={'upload'} control={<Radio/>} label={'upload'}/>
                            </RadioGroup>
                        </>
                        }
                    </div>


                    {
                        picSelect === 'link' &&
                        <TextField size={'small'} className={'TextField-without-border-radius'} fullWidth
                                   name={'pictureLink'}
                                   defaultValue={productForUpdate?.pictureLink}
                                   onChange={(e) => setPreview(e.target.value)}

                        />
                    }
                    {productForUpdate?.picture &&
                        <img src={`${config.BACKEND_URL}products/${productForUpdate.picture}`} width={350} alt={'pic'}/>

                    }
                    {productForUpdate?.picture && !confirmDelete && <>
                        <Button fullWidth onClick={() => setConfirmDelete(true) }>Remove image</Button></>
                    }

                    {picSelect === 'upload' &&
                        <Button fullWidth component="label">
                            Upload File
                            <input type="file"
                                   accept="image/*"
                                   hidden
                                   onChange={setUploadFile}
                            />
                        </Button>
                    }
                    <div>
                        {confirmDelete && <>
                            Confirm deleting picture:
                            <Button onClick={() => setConfirmDelete(false)}>Cancel</Button>
                            <Button onClick={removeImage}> Confirm </Button></>
                        }
                    </div>
                    <div style={{ padding: '0 20px' }}>
                        {preview && <img src={preview} alt={''} width={350} style={{ margin: '0 auto' }}/>}
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type={'submit'}>Save</Button>
                        </DialogActions>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductForm;