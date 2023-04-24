import React, { useState } from 'react';
import { Button, Card, FormControlLabel, Switch, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config/config';
import { showCart } from '../../store/appearance';
import { Navigate } from 'react-router-dom';
import './OrderForm.css';

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
            <div className={'checkout_wrap'}>
                {products.length === 0 && <Navigate to={'/'}/>}
                <div>
                    <Card className={'checkout_card'}>
                        <h3>Your order</h3>
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
                <div>
                    <h3 style={{marginBottom: '20px'}}>Fill the form to finish yor order</h3>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div className={'checkout_form_wrapper'}>
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'name'}
                                {...register('name', {
                                    required: 'This field is required', pattern: {
                                        value: /^[A-Z][a-z]{1,20}$/,
                                        message: 'Bad format'
                                    }
                                })}
                                error={!!errors.name}
                                helperText={errors?.name ? errors.name.message : null}
                            />
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'surname'}
                                {...register('surname', {
                                    required: 'This field is requered', pattern: {
                                        value: /^[A-Z][a-z]{1,30}(-[A-Z][a-z]{1,30})?$/,
                                        message: 'Bad format'
                                    }
                                })}
                                error={!!errors.surname}
                                helperText={errors?.surname ? errors.surname.message : null}
                            />
                            <TextField
                                className={'TextField-without-border-radius'}
                                label={'phone number'}
                                {...register('phone',{
                                    required: 'This field is required', pattern: {
                                        value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                        message: 'Bad format!'
                                    }
                                })}
                                error={!!errors.phone}
                                helperText={errors?.phone ? errors.phone.message : null}
                            />
                            <FormControlLabel control={<Switch
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