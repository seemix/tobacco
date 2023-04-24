import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Switch, Table, TableCell, TableRow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { config } from '../../../../config/config';

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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'space-between', width: '100%' }}>
                        <div>{date}</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <PersonIcon/>
                            <div>{order.customerName} {order.customerSurname}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneAndroidIcon/>
                            <div>{order.customerPhone}</div>
                        </div>

                        <div>{order.shipping && <LocalShippingIcon color={'success'}/>}</div>
                    </div>
                    <Typography></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table size={'small'}>
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
                    </Table>
                    <div style={{marginLeft:'auto'}}>
                        Completed<Switch name={'completed'} checked={order.completed}/>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
        ;
};

export default SingleOrder;