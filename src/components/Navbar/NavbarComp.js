import React from 'react';
import { BiSearch } from 'react-icons/bi';

import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import './NavbarComp.css';

const NavbarComp = () => {
    return (
        <Navbar className='navbarShadow' expand='lg' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href='#home'>
                    guarented{' '}
                    <span
                        className='cPink'
                        style={{
                            fontSize: '50px',
                            lineHeight: '0',
                            position: 'relative',
                            left: '-6px',
                            bottom: '-6px',
                        }}
                    >
                        .
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-md-5 me-5'>
                        <Nav.Link href='#furniture'>Furniture</Nav.Link>
                        <Nav.Link href='#appliances'>Appliances</Nav.Link>
                        <Nav.Link href='#packages'>Packages</Nav.Link>
                        <Nav.Link href='#faq'>FAQ</Nav.Link>
                    </Nav>
                    <Form className='d-flex ms-md-5 me-5'>
                        <FormControl
                            type='search'
                            placeholder='Search the website'
                            className='rounded-0 rounded-start formWidth'
                            aria-label='Search'
                        />
                        <Container className='searchIconContainer'>
                            <BiSearch
                                size={28}
                                style={{
                                    fill: '#ffffff',
                                }}
                            />
                        </Container>
                    </Form>
                    <Nav className='ms-md-5'>
                        <Nav.Link href='#login'>Login</Nav.Link>
                        <Nav.Link style={{ color: '#ea1d63' }} href='#cart'>
                            Cart
                            <span
                                className='cPink'
                                style={{
                                    fontSize: '50px',
                                    lineHeight: '0',
                                    position: 'relative',
                                    left: '-2px',
                                    top: '-10px',
                                }}
                            >
                                .
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
