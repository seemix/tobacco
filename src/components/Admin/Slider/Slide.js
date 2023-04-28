import React from 'react';
import { Button, Card } from '@mui/material';
import './Slide.css'
import { config } from '../../../config/config';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Slide = ({slide}) => {
    return (
        <div className={'single_cat_wrapper'}>
            <Card style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
                <div className={'slider_picture'}
                     style={{ backgroundImage: `url(${config.BACKEND_URL}/slider/${slide.slide})` }}>
                </div>
                <div>
                    <Button onClick={() => alert('')}><EditIcon/></Button>
                </div>
                <div>
                    <Button onClick={() => alert()}><DeleteForeverIcon/></Button>
                </div>
            </Card>
        </div>

    )
};

export default Slide;