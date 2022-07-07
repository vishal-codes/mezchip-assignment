import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';
import { BsLightningFill } from 'react-icons/bs';

import './Features.css';

const Features = () => {
    return (
        <div className='d-flex flex-row p-3 mt-5 mb-5 w-75 mx-auto justify-content-between'>
            <div className='featureDiv'>
                <GiReceiveMoney size={55} className='align-self-center mb-4' />
                <p className='text-center title'>MOST AFFORDABLE</p>
                <p className='text-center text-wrap'>
                    Find the best exclusive range of products
                </p>
            </div>
            <div className='featureDiv'>
                <VscTools size={55} className='align-self-center mb-4' />
                <p className='text-center title'>FREE SERVICE</p>
                <p className='text-center text-wrap'>
                    Find the best exclusive range of products
                </p>
            </div>
            <div className='featureDiv'>
                <BsLightningFill
                    size={55}
                    className='align-self-center  mb-4'
                />
                <p className='text-center title'>FREE DELIVERY</p>
                <p className='text-center text-wrap'>
                    Find the best exclusive range of products
                </p>
            </div>
        </div>
    );
};

export default Features;
