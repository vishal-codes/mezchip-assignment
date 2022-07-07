import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CartItems from './components/CartItems/CartItems';
import NavbarComp from './components/Navbar/NavbarComp';
import Stepper from './components/Stepper/Stepper';
import Features from './components/Features/Features';
import PromoModal from './components/PromoModal/PromoModal';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <NavbarComp />
            <Stepper />
            <CartItems handleShow={handleShow} />
            <Features />
            <PromoModal {...{ handleClose, showModal }} />
        </>
    );
};

export default App;
