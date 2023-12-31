import React from 'react'
import Navbar from "../components/navbar";
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
const HomePage = () => {
  return (
    <div className="intro-pages">
      <Container>
        <Row>
          <Col lg={5} id='left-div'>
            <p id="header-text"><span>The best</span> way to get things in order.</p>
            <p>Regain Clarity and Calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are on what device you use)
            </p>
            <Link to="">Watch in action
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
            </Link>
            <Link to="" id="get-started" class="rounded"> Get Started - It's Free!</Link>

            <div id="featured-on">
              <h5>
                Featured On
              </h5>
            </div>
          </Col>
          <Col  lg={7} className="pl-5 d-flex justify-content-between">
                    <img id ="animation1" src="animation.png"  alt="" />
                    <img id='animation2' src="animation3.png" alt=""/>
                    <img id='animation3' src="animation2.png" alt="" />
            

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
