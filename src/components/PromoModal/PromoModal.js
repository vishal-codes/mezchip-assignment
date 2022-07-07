import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GiPresent } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

const PromoModal = ({ handleClose, showModal }) => {
    return (
        <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton className='border-0' />
            <Modal.Body className='d-flex flex-column justify-content-center cPink'>
                <GiPresent size={120} className='align-self-center mb-3' />
                <p className='w-50 mx-auto cBlack text-center mb-3'>
                    You and your friend get 30% off upto 500 on your next months
                    rent
                </p>
                <p className='w-50 cGray mx-auto text-center mb-3'>
                    Your promo code
                </p>
                <p className='w-50 fs-2 mx-auto text-center mb-0'>ANDNYD2S</p>
            </Modal.Body>
            <Modal.Footer className='d-flex flex-column justify-content-center'>
                <p className='w-50 cGray mx-auto text-center mb-3'>Share on</p>
                <div className='w-75 d-flex flex-row justify-content-between'>
                    <Button variant='light'>
                        <FaFacebookF style={{ fill: '#1da1f2' }} size={23} />
                    </Button>
                    <Button variant='light'>
                        <BsWhatsapp style={{ fill: '#00de46' }} size={23} />
                    </Button>
                    <Button variant='light'>
                        <AiOutlineTwitter
                            style={{ fill: '#1da1f2' }}
                            size={25}
                        />
                    </Button>
                    <Button variant='light'>
                        <MdEmail style={{ fill: '#e2aa30' }} size={25} />
                    </Button>
                    <Button variant='light'>
                        <GrLinkedinOption
                            style={{ fill: '#1da1f2' }}
                            size={25}
                        />
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default PromoModal;
