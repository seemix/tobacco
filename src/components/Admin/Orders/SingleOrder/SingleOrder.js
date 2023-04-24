import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableRow
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { config } from '../../../../config/config';
import './SingleOrder.css';

const SingleOrder = ({ order }) => {
    const date = new Date(order.createdAt).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
    return (
        <div style={{ margin: '20px' }}>
            <Accordion className={!order.completed ? 'uncompleted' : ''}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={'order_top_wrapper'}>
                        <div>{date}</div>
                        <div className={'inside_wrapper'}>
                            <PersonIcon/>
                            <div>{order.customerName} {order.customerSurname}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneAndroidIcon/>
                            <div>{order.customerPhone}</div>
                        </div>

                        <div>{order.shipping && <LocalShippingIcon color={'success'}/>}</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'}>
                        <TableBody>
                            {
                                order.products.map(item =>
                                    <TableRow key={item._id}>
                                        <TableCell>{item.product.name} </TableCell>
                                        <TableCell>x{item.count}</TableCell>
                                        <TableCell>{item.product.price} {config.CURRENCY}</TableCell>
                                    </TableRow>)
                            }
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell><b>Total:</b></TableCell>
                                <TableCell><b><big>{order?.total} {config.CURRENCY}</big></b></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div style={{ marginLeft: 'auto' }}>
                        Completed<Switch name={'completed'} checked={order.completed}/>
                    </div>
                    <div>
                        {order?.address && <> <LocationOnIcon/> {order.address}</>}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default SingleOrder;