import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../../store/order';
import SingleOrder from './SingleOrder/SingleOrder';

const Orders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch])
    const { response } = useSelector(state => state.orderStore);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div><h2>Orders</h2>
                {response &&

                    response.orders.map(order => <SingleOrder key={order._id} order={order}/>)

                }
            </div>
        </div>
    );
};

export default Orders;