import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Dashboard() {

  return (
    <div className='d-flex'>
        <div id ="side-bar" ></div>
        <Container fluid>
            <Row>
                <Col lg={3} id ="to-do" className='p-3 mr-4'> 
                <h4 className='mt-1 text-left'> Todo List</h4>
               <div className='mt-2'>
                <div className='d-flex'>
                <h5 className = "mr-5">Today</h5>
                <p className='plus-minus' >+</p>
                </div>
                   
                </div>     
               
                <div></div>
                </Col>
                <Col lg={9}></Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Dashboard
