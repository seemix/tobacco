import React, { useState } from 'react';
import { Button, Card, FormControlLabel, Switch, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config/config';
import { showCart } from '../../store/appearance';

const OrderForm = () => {
    const [showAddress, setShowAddress] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { products, total } = useSelector(state => state.orderStore);
    const dispatch = useDispatch();
    const setAddress = () => {
        setShowAddress(!showAddress);
    }
    const handleForm = (data) => {
        console.log(data);
    }

    return (
        <div className={'main_container'}>
            <h2>Checkout your order</h2>
            <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                {products.length > 0 &&

                    <div>
                        <Card style={{ padding: '20px', width: '300px' }}>
                            {
                                products.map(item => <div key={item.id}>
                                    <div><i>{item.name} x {item.count}</i></div>
                                    <p style={{ textAlign: 'right' }}>{item.price * item.count} {config.CURRENCY}</p>
                                </div>)
                            }
                            <div style={{ borderTop: '1px solid gray' }}>
                                <p style={{ textAlign: 'center' }}><big><b>Total: {total} {config.CURRENCY}</b></big>
                                </p>
                            </div>
                        </Card>
                        <Button fullWidth onClick={() => dispatch(showCart())}>Edit order</Button>
                    </div>
                }
                <div>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'name'}
                                {...register('name', {
                                    required: 'This field is required', pattern: {
                                        value: '',
                                        message: 'Bad format'
                                    }
                                })}
                                error={!!errors.name}
                                helperText={errors?.name ? errors.name.message : null}
                            />
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'surname'}
                                {...register('surname',{
                                    required: 'This field is requered', pattern: {
                                        value: '',
                                        message: 'Bad format'
                                    }
                                })}
                            />
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'phone number'}
                                {...register('phone')}
                            />
                            <FormControlLabel control={ <Switch
                                checked={showAddress}
                                onChange={setAddress}
                            />} label={'ship my order'}/>
                            {showAddress &&
                                <TextField
                                    className={'TextField-without-border-radius'}
                                    multiline
                                    rows={4}
                                    label={'shipping address'}
                                    {...register('address')}
                                />
                            }
                            <Button type={'submit'} variant={'contained'}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default OrderForm;