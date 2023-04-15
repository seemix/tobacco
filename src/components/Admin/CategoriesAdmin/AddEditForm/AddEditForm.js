import React, { useState } from 'react';
import {
    TextField,
    Button,
    DialogActions

} from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddEditForm.css';
import { useDispatch } from 'react-redux';
import { hideCategoryEdit } from '../../../../store/appearance';
import { createCategory } from '../../../../store/category';

const AddEditForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [pastedLink, setPastedLink] = useState(null);
    const [file, setFile] = useState(null);
    const handleChange = (event) => {
        setFile(event.target.files[0]);
        setPastedLink(URL.createObjectURL(event.target.files[0]));
    }
    const removeFile = () => {
        setPastedLink(null);
        setFile(null);
    }
    const saveForm = (data) => {
        const formData = new FormData();
        formData.append('name', data.categoryName);
        formData.append('image', file);
        dispatch(createCategory(formData));
    }
    return (
        <>
            <h2>Add/Edit category</h2>
            <div className={'wrapper'}>
                <form onSubmit={handleSubmit(saveForm)}>
                    <div>
                        <TextField
                            {...register('categoryName', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[a-zA-Z]{3,15}$/,
                                    message: 'Bad format'
                                }
                            })}
                            error={!!errors.categoryName}
                            helperText={errors?.categoryName ? errors.categoryName.message : null}
                            label={'category name'}
                            fullWidth
                        />
                    </div>
                    <div>
                        <Button fullWidth component="label">
                            Upload File
                            <input type="file"
                                   accept="image/*"
                                   hidden
                                   {...register('image')}
                                   onChange={handleChange}
                            />
                        </Button>
                    </div>
                    <div style={{ margin: '0 auto' }}>
                        {pastedLink && <> <img src={pastedLink} alt={'pasted'} width={300}/>
                        </>}
                    </div>
                    {file &&
                        <Button fullWidth onClick={() => removeFile()}>remove</Button>
                    }
                    <div>
                        <DialogActions>
                            <Button variant={'contained'} onClick={() => dispatch(hideCategoryEdit())}>Cancel
                            </Button>
                            <Button variant={'contained'} type={'submit'}>Submit</Button>
                        </DialogActions>
                    </div>
                </form>
            </div>

        </>
    )
};

export default AddEditForm;