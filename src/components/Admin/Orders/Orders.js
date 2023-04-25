import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../../store/order';
import SingleOrder from './SingleOrder/SingleOrder';
import Pagination from '@mui/material/Pagination'
import './Orders.css';

const Orders = () => {
    const dispatch = useDispatch();
    const params = { paqe: 1 }
    // const handlePage = (event, page) => {
    //     params.page = page;
    //     dispatch(getAllOrders(params));
    // }
    useEffect(() => {
        dispatch(getAllOrders(params));
    }, [dispatch])
    const { response } = useSelector(state => state.orderStore);
    return (
        <div className={'orders_wrapper'}>
            <div><h2>Orders</h2>
                {response &&
                    response.orders.map(order => <SingleOrder key={order._id} order={order}/>)
                }
            </div>
            {/*{response.pages && response.pages > 1 &&*/}
            {/*    <Pagination shape={'rounded'} count={response?.pages || 1} onChange={handlePage}/>*/}
            {/*}*/}
        </div>
    );
};

export default Orders;