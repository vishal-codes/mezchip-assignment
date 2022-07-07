import React from 'react';
import { GiPresent } from 'react-icons/gi';

import Col from 'react-bootstrap/Col';

const RightDiv = ({ handleShow }) => {
    return (
        <Col md='auto' className='p-3 px-4 rounded-3 customBoxShadow'>
            <div className='promoDiv cPink'>
                <GiPresent size={25} />
                <p className='fontSize8 m-0 ms-2 mt-2'>Have a promo code?</p>
            </div>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='cGray marginBottom-7'>Monthly Rent</p>
                <p className='marginBottom-7'>Rs 19000</p>
            </div>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='cGray marginBottom-7'>Security Deposit</p>
                <p className='marginBottom-7'>Rs 1600</p>
            </div>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='cGray marginBottom-7'>GST</p>
                <p className='marginBottom-7'>Rs 2000</p>
            </div>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='cGray marginBottom-7'>Coupon Discount</p>
                <p className='cGreen marginBottom-7'>- Rs 9000</p>
            </div>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='cGray marginBottom-7'>Delivery</p>
                <p className='cGreen marginBottom-7'>Free</p>
            </div>
            <p className='cGray marginBottom-7'>
                ---------------------------------------
            </p>
            <div className='d-flex justify-content-between align-items-center fontSize8'>
                <p className='marginBottom-7'>Total Payable</p>
                <p className='marginBottom-7'>Rs 13600</p>
            </div>
            <div className='d-flex w-100 mt-3'>
                <button className='orderButton' onClick={handleShow}>
                    PLACE ORDER
                </button>
            </div>
        </Col>
    );
};

export default RightDiv;
