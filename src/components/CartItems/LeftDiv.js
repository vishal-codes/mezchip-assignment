import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import items from '../../dummyCartItems';

const LeftDiv = () => {
    return (
        <Col md='auto' className='me-4 p-4 rounded-3 customBoxShadow'>
            {items.map((item) => (
                <Row key={item.id} className='mb-4 mt-2 ms-auto'>
                    <Col md='auto'>
                        <img
                            className='rounded'
                            src={item.imgURL}
                            alt='product'
                        />
                    </Col>
                    <Col className='d-flex'>
                        <Col className='ms-4' md='auto'>
                            <Row>{item.name}</Row>
                            <Row className='mt-2 cGray fontSize8'>
                                {item.price}
                            </Row>
                            <Row className='mt-3 counter'>
                                - &nbsp; 1 &nbsp; +
                            </Row>
                        </Col>
                        <Col className='ms-5' md='auto'>
                            <Row className='cGray'>Tenure</Row>
                            <Row className='mt-2'>{item.tenure}</Row>
                        </Col>
                        <Col className='ms-5' md='auto'>
                            <Row className='cGray'>Deposit</Row>
                            <Row className='mt-2'>{item.deposit}</Row>
                            <Row className='fontSize7 cGreen'>
                                Fully Refundable
                            </Row>
                        </Col>
                        <Col className='ms-5 me-5' md='auto'>
                            <Row className='cGray'>Total</Row>
                            <Row className='mt-2'>{item.total}</Row>
                        </Col>
                    </Col>
                </Row>
            ))}
            <Row className='mx-auto mt-5'>
                <Col>
                    <Button className='me-5 px-5' variant='outline-danger'>
                        Continue Shopping
                    </Button>
                </Col>
                <Col>
                    <p className='m-0 mt-3 text-end me-3'>Need help ?</p>
                </Col>
            </Row>
        </Col>
    );
};

export default LeftDiv;
