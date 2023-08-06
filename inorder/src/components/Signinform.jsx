import React, { useState } from 'react'
import { Button, Form, Image, Offcanvas } from 'react-bootstrap';
import { } from 'react-router-dom';
import Axios from 'axios'

function Signinform() {
    const [ifSignin, setSignin] = useState(true);
    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // next variable is to validate if the password ans dconfirmation are the same;
    const [isPasswordSame, setIsPasswordSame] = useState(false);

    const handleClose = () => { setShow(false); setSignin(true); }
    const handleShow = () => setShow(true);

    const handleChoice = (choice) => {
        setSignin(choice)
    }
    const validatePassword = (givenPassword) => {
        if (givenPassword.length >= password.length) {
            if (password == givenPassword) {
                setIsPasswordSame(true);
            }
            else {
                setIsPasswordSame(false);
            }
        }
    }
    const signUp = async (e) => {
        e.preventDefault();

        // const {user} = await Axios.post("/api/users/signin",{
        //     email,
        //     password,
        // });
    }
    return (
        <>
            {
                ifSignin ? (<div>
                    <Button id="signin-button" className="rounded text-center" onClick={handleShow}>Sign In</Button>

                    <Offcanvas show={show} onHide={handleClose} placement="end" className="p-0 " style={{ width: "500px" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='d-flex flex-column align-items-center justify-content-center'> <Image className="text-center mb-5" src="logo2.png" width={"120"} />
                            <Form className='text-center'>
                                <h3 className="text-center">Welcome back</h3>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control type="email" className="p-2 pl-5 text-bold" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" className='p-2 ' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mb-2 sign" id="signin-submit">
                                    Sign in
                                </Button>
                                <small className="text-center"> Don't have an account?
                                    <Button to="/signup" onClick={() => handleChoice(false)} className="sign-alternate">Get started</Button>
                                </small>
                            </Form>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>)
                    : (<div>  <Button id="signin-button" className="rounded text-center" onClick={handleShow}>Sign In</Button>

                        <Offcanvas show={show} onHide={handleClose} placement="end" className="p-0 " style={{ width: "500px" }}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='d-flex flex-column align-items-center justify-content-center'> <Image className="text-center mb-2" src="logo2.png" width={"100"} />
                                <Form onSubmit={signUp}>
                                    <h3 className="text-center">Sign Up</h3>
                                    <p>Create your Inorder account and get access to the best daily planner app out there!</p>
                                    <Form.Group className='mb-2' controlId='formBasicFirstName'>
                                        <Form.Control type="text" className="p-2" required placeholder='First Name' onChange={(e) => { setFirstName(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className='mb-2' controlId='formBasicLastName'>
                                        <Form.Control type="text" className="p-2 " required placeholder='Last name' onChange={(e) => { setLastName(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Control type="email" className="p-2" required placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />

                                    </Form.Group>

                                    <Form.Group className="mb-1" controlId="formBasicPassword">
                                        <Form.Control type="password" className='p-2 ' required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Control type="password" className='p-2 ' required placeholder=" Confirm password" onChange={(e) => { validatePassword(e.target.value) }} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="mb-2 sign" id="signin-submit" onClick={signUp}>
                                        Sign up
                                    </Button>
                                    <small className="text-center"> Already have an account?
                                        <Button type="submit" onClick={() => handleChoice(true)} className="sign-alternate"> Sign in</Button>
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
