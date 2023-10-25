import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Solanaimg from '../assets/image/png/imgsola.png'
import Unrealimg from '../assets/image/png/imgunreal.png'
const Solana = () => {
  return (
      <div className='bgimghero'>
          <Container className='py-lg-5 custom-container'>
              <Row className='py-5 align-items-center justify-content-center'>
                  <Col lg={6} className='d-flex align-items-end py-lg-5'>
                      <img src={Solanaimg} alt="#" className='sola'/>
                  </Col>
                  <Col lg={5} className='d-flex align-content-lg-start my-5'>
                      <img src={Unrealimg} alt="#" className='unreal'/>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Solana