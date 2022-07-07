import React from 'react';
import Row from 'react-bootstrap/Row';

import './CartItems.css';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';

const CartItems = ({ handleShow }) => {
    return (
        <div>
            <Row className='justify-content-center mw-100 mx-auto'>
                <LeftDiv />
                <RightDiv handleShow={handleShow} />
            </Row>
        </div>
    );
};

export default CartItems;
