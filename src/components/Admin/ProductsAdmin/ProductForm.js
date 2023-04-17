import React, { useState } from 'react';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { hideProductForm } from '../../../store/appearance';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

const ProductForm = () => {
    const [value, setValue] = useState('description');
    const [file, setFile] = useState(null);
    const [picSelect, setPicSelect] = useState('none');
    const [preview, setPreview] = useState(null);
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const handleClose = () => {
        dispatch(hideProductForm());
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
                setValue('link',null);
                break;
            case 'upload':
                setPicSelect('upload');
        }
    };
   // console.log(preview);
    const saveForm = (data) => {
        console.log(data);
    }
    return (
        <>
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit(saveForm)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        fullWidth
                        className={'TextField-without-border-radius'}
                        label={'Product name'}
                        {...register('name')}
                    />
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
                    <div style={{ margin: '0 auto' }}>
                        <TextField
                            style={{ width: '100px', margin: '15px' }}
                            className={'TextField-without-border-radius'}
                            label={'old price'}
                            {...register('oldPrice')}
                        />
                        <TextField
                            style={{ width: '100px', margin: '15px' }}
                            className={'TextField-without-border-radius'}
                            label={'price'}
                            {...register('price')}
                        />

                        <RadioGroup row name={'pic_selector'}
                                    onChange={handleChange}
                        >
                            <FormControlLabel value={'none'} control={<Radio/>} label={'none'}/>
                            <FormControlLabel value={'link'} control={<Radio/>} label={'link'}/>
                            <FormControlLabel value={'upload'} control={<Radio/>} label={'upload'}/>
                        </RadioGroup>
                    </div>
                    {
                        picSelect === 'link' &&
                        <TextField size={'small'} className={'TextField-without-border-radius'} fullWidth
                                   onChange={(e) => setPreview(e.target.value)}

                        />
                    }
                    {picSelect === 'upload' &&
                        <Button fullWidth component="label">
                            Upload File
                            <input type="file"
                                   accept="image/*"
                                   hidden
                                   {...register('image')}
                                   onChange={setUploadFile}
                            />
                        </Button>
                    }
                    <div>
                        {preview && <img src={preview} alt={'preview'} width={350}/>}
                        <Button type={'submit'}>Save</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProductForm;