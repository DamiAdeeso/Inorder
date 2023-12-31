import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Dashboard() {

    todayList= {
        task1:"pickup",
        task2:"dropoff",

       
 }

  return (
    <div className='d-flex'>
        <div id ="side-bar" ></div>
        <Container fluid>
            <Row>
                <Col lg={3}id ="to-do" className='p-3 mr-4'> 
                <h4 className='mt-1 text-left '> To-do List</h4>
               <div className='mt-2'>
                <div className='d-flex time-frames rounded pt-3 pb-1 px-2'>
                <h5 className = "mr-5">Today</h5>
                <p className='plus-minus' >+</p>
                </div>
                {
                    (todayList.map((item)=>(
                        <div>item.task1</div>
                    )))
                }
                   <div>

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
