import React from 'react'
import Navbar from "../components/navbar";
import {Link} from "react-router-dom"
import { Container, Row, Col,Button } from "react-bootstrap"
const HomePage = () => {
  return (
    <div id ="home-page">
      <Container>
        <Row>
          <Col md ={5}>
             <p id ="header-text"><span>The best</span> way to get things in order.</p>
             <p>Regain Clarity and Calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are on what device you use)</p>
              <Link to ="">Watch in action</Link>
              <Link to ="" id = "get-started" class ="rounded"> Get Started - It's Free!</Link>
          </Col>
          <Col md ={7}>
            see me right
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
