import React from 'react';
import { Card } from '@mui/material';

import './SingleCategoryAdmin.css';
const SingleCategoryAdmin = ({category}) => {
    return (
        <>
         <Card>
           <div style={{display: 'flex'}}>
               <div className={'admin_cat_picture'} style={{ backgroundImage: `url(${category.picture})`}}>
                   <img src={category.picture} alt="123" width={540}/>
               </div>
               <div><h3>{category.name}</h3></div>

           </div>
         </Card>
        </>
    );
};

export default SingleCategoryAdmin;