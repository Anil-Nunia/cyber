import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imgrct from '../assets/image/png/imgrct.png'

const What = () => {
  return (
      <div className='bg-hero-imgs'>
          <Container className='custom-container'>
              <Row className='py-5 my-lg-5 align-items-center'>
                  <Col lg={6}>
                          <p className='Whatis what2ndis '>What is <span className='fps_color position-relative line3s'>CyberFPS</span></p>
                          <p className='ecosystem'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                          <p className='mode'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                  </Col>
                  <Col lg={6}>
                      <span>
                          <img src={Imgrct} alt="#"  className='w-100'/>
                      </span>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default What