import React, { useState } from 'react'
import { Button, Form, Image, Offcanvas } from 'react-bootstrap';
import { } from 'react-router-dom';

function Signinform() {
    const [ifSignin, setSignin] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); setSignin(true);}
    const handleShow = () => setShow(true);

    const handleChoice = () =>{
        setSignin(false)
    }
    return (
        <>
            {
                ifSignin? ( <div>
                    <Button id="signin-button" className="rounded text-center" onClick={handleShow}>Sign In</Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end" className="p-0 " style={{ width: "500px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='d-flex flex-column align-items-center justify-content-center'> <Image className="text-center mb-5" src="logo2.png" width={"120"} />
                            <Form>
                                <h3 className="text-center">Welcome back</h3>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control type="email" className="p-2 pl-5 text-bold" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" className='p-2 ' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mb-2 sign" id="signin-submit">
                                    Sign in
                                </Button>
                                <small className="text-center"> Don't have an account?
                                    <Button to="/signup" onClick={handleChoice} className="sign-alternate">Get started</Button>
                                </small>
                            </Form>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>)
                    :( <div>  <Button id="signin-button" className="rounded text-center" onClick={handleShow}>Sign In</Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end" className="p-0 " style={{ width: "500px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='d-flex flex-column align-items-center justify-content-center'> <Image className="text-center mb-5" src="logo2.png" width={"120"} />
                            <Form>
                                <h3 className="text-center">Sign Up</h3>
                                <p>Create your Inorder account and get access to the best daily planner app out there!</p>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control type="email" className="p-2 pl-5 text-bold" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" className='p-2 ' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" className='p-2 ' placeholder=" Confirm password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="date" className='p-2 ' placeholder="DOB" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mb-2 sign" id="signin-submit">
                                    Sign up
                                </Button>
                                <small className="text-center"> Already have an account?
                                    <Button to="/signup" onClick={handleChoice} className="sign-alternate">Sign in</Button>
                                </small>
                            </Form>
                        </Offcanvas.Body>
                    </Offcanvas>
                    </div>)
            }

        </>
    )
}

export default Signinform
