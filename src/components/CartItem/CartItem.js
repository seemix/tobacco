import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';
import './CartItem.css';

const CartItem = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <Card className={'cart_card'}>
                <div style={{ textAlign: 'center' }}><h4>Item description & name</h4></div>
                <div className={'cart_item_wrapper'}>
                    <div>
                        <div><img
                            src={'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322685/hookah-smoking.jpg'}
                            width={'200'} alt={'img'}/>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ textAlign: 'center' }}><big><b>500Kr.</b></big></div>
                        <div>
                            <Button onClick={() => setCount(count => count - 1)}><big>-</big></Button>
                            <TextField size={'small'} style={{ width: '40px' }}
                                       className={'TextField-without-border-radius'} value={count}/>
                            <Button onClick={() => setCount(count => count + 1)}><big>+</big></Button>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <Button fullWidth>remove</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CartItem;