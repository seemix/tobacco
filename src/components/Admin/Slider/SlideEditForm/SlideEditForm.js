import React from 'react';
import { Button, DialogActions, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSlideEdit } from '../../../../store/slider';

const SlideEditForm = () => {
    const dispatch = useDispatch();
    return (
        <>
            <h2>Add/Edit Slide</h2>
            <div className={'wrapper'}>
                <TextField className={'TextField-without-border-radius'}
                           label={'slide text'}
                           multiline
                           rows={4}
                />
                <Button fullWidth component={'label'}>Upload image</Button>
                <DialogActions>
                    <Button variant={'contained'} onClick={() => dispatch(closeSlideEdit())}>Cancel
                    </Button>
                    <Button variant={'contained'} type={'submit'}>Submit</Button>
                </DialogActions>
            </div>
        </>
    );
};

export default SlideEditForm;