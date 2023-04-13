import React, { useState } from 'react';
import {
    Paper,
    Box,
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

const AddEditForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const [pic, setPic] = useState('none');
    const [pastedLink, setPastedLink] = useState();
    const [file, setFile] = useState();
    const handleChange = (event) => {
        setPic(event.target.value);
        if (event.target.value !== 'link') {
            setPastedLink(null);
        } else {
            const val = watch('link');
            setPastedLink(val);
        }
    }
    const fileChange = (e) => {
        // setFile(e.target.files[0]);
        const pict = e.target.files[0];
        console.log(pict);
        setPastedLink(URL.createObjectURL(pict));
    }
    const saveForm = (data) => {
        if (pic !== 'link') data.link = null;
        console.log(data);
    }
    console.log(file);
    return (
        <>
            <Box className={'modal_box'}>
                <Paper style={{ padding: '20px' }}>
                    <h2>Add/Edit category</h2>
                    <div
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '15px' }}>
                        <form onSubmit={handleSubmit(saveForm)}>
                            <div style={{ margin: '10px' }}>
                                <TextField
                                    {...register('categoryName')}
                                    label={'category name'}
                                    fullWidth
                                />
                            </div>
                            <div style={{ margin: '10px' }}>
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
                                               onChange={fileChange}
                                        />
                                    </Button>
                                </div>
                            }
                            <div style={{ minHeight: 330, margin: '15px' }}>
                                {pastedLink && <img src={pastedLink} alt={'pasted'} width={300}/>}
                            </div>
                            <div>
                                <DialogActions>
                                    <Button variant={'contained'}>Cancel</Button>
                                    <Button variant={'contained'} type={'submit'}>Submit</Button>
                                </DialogActions>
                            </div>
                        </form>
                    </div>
                </Paper>
            </Box>
        </>
    )
};

export default AddEditForm;