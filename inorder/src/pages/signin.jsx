import React from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import '../styles/signin.css'

function signin() {
  return (
    <Container fluid className='intro-pages'>
      <Row>
        <Col md={6}>
        <p id="header-text"><span>The best</span> way to get things in order.</p>
        </Col>
        <Col md={4} id ="form-div" className='form-div  col-md-4 rounded py-4 mx-2 my-5'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>klk
    </Container>
  )
}

export default signin
