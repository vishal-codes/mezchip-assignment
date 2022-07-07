import React from 'react';

const Stepper = () => {
    return (
        <div className='d-flex flex-row p-3 mt-3 justify-content-center'>
            <p
                style={{
                    color: '#ea1d63',
                    borderBottom: '2px solid #ea1d63',
                    marginRight: '16px',
                }}
            >
                CART
            </p>
            <p className='cGray'>---</p>
            <p className='cGray' style={{ margin: '0 16px' }}>
                DELIVERY
            </p>
            <p className='cGray'>---</p>
            <p className='cGray' style={{ margin: '0 16px' }}>
                PAYMENT
            </p>
        </div>
    );
};

export default Stepper;
