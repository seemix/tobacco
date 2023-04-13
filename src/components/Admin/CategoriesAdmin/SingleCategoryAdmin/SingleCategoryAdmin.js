import React from 'react';
import { Button, Card } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import './SingleCategoryAdmin.css';

const SingleCategoryAdmin = ({ category }) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ minWidth: '800px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div className={'admin_cat_picture'} style={{ backgroundImage: `url(${category.picture})` }}>
                        <img src={category.picture} alt="123" width={540}/>
                    </div>
                    <div><h3>{category.name}</h3></div>
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