import React, { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    DialogActions

} from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddEditForm.css';
import { useDispatch } from 'react-redux';
import { hideCategoryEdit } from '../../../../store/appearance';
import { createCategory } from '../../../../store/category';

const AddEditForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [pic, setPic] = useState('none');
    const [pastedLink, setPastedLink] = useState();
    const handleChange = (event) => {
        setPic(event.target.value);
        if (event.target.value !== 'link') {
            setPastedLink(null);
        } else {
            const val = watch('link');
            setPastedLink(val);
        }
    }

    const im = watch('image');
    useEffect(() => {
        if (im) setPastedLink(URL.createObjectURL(im[0]));
    }, [im])
    const saveForm = (data) => {
        if (pic !== 'link') data.link = null;
        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('name', data.categoryName);
        dispatch(createCategory(formData));
    }
    return (
        <>
            {/*<Box className={'modal_box'}>*/}
            {/*    <Paper className={'paper_box'} style={{ borderRadius: 0 }}>*/}
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
                                <FormLabel id={'radio'}>
                                    Category image
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby={'radio'}
                                    value={pic}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="none" control={<Radio/>} label="None"/>
                                    <FormControlLabel value="link" control={<Radio/>} label="Link"/>
                                    <FormControlLabel value="upload" control={<Radio/>} label="Upload"/>
                                </RadioGroup>
                            </div>
                            {pic === 'link' &&
                                <div>
                                    <TextField
                                        label={'paste image link'}
                                        size={'small'}
                                        fullWidth
                                        onInput={e => setPastedLink(e.target.value)}
                                        {...register('link')}
                                    />
                                </div>
                            }
                            {pic === 'upload' &&
                                <div>
                                    <Button component="label">
                                        Upload File
                                        <input type="file"
                                               accept="image/*"
                                               hidden
                                            // onChange={fileChange}
                                               {...register('image')}
                                        />
                                    </Button>
                                </div>
                            }
                            <div style={{ margin: '0 auto' }}>
                                {pastedLink && <> <img src={pastedLink} alt={'pasted'} width={300}/>
                                </>}
                            </div>
                            <Button onClick={() => setPastedLink(null)}>remove</Button>
                            <div>
                                <DialogActions>
                                    <Button variant={'contained'} onClick={() => dispatch(hideCategoryEdit())}>Cancel
                                    </Button>
                                    <Button variant={'contained'} type={'submit'}>Submit</Button>
                                </DialogActions>
                            </div>
                        </form>
                    </div>
                {/*</Paper>*/}
            {/*</Box>*/}

        </>
    )
};

export default AddEditForm;