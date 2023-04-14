import React from 'react';
import { Button, Card } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import './SingleCategoryAdmin.css';
import { config } from '../../../../config/config';

const SingleCategoryAdmin = ({ category }) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Card style={{margin: '15px'}}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div className={'admin_cat_picture'}>
                        <img src={`${config.BACKEND_URL}category/${category.picture}`} alt="123" width={500}/>
                        <h3>{category.name}</h3>
                    </div>
                    {/*<div></div>*/}
                    <div>
                        <Button><EditIcon color={'info'}/></Button>
                    </div>
                    <div>
                        <Button><DeleteForeverIcon color={'error'}/></Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SingleCategoryAdmin;