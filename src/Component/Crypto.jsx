import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Crpimg from '../assets/image/png/Crpimg.png'
const Crypto = () => {
  return (
      <div className='bg-black'>
          <Container className='py-5 custom-container'>
              <Row className='py-5 align-items-center'>
                  <Col lg={5} className='mb-5 mb-lg-0'>
                      <img src={Crpimg} alt="#"  className='w-100'/>
                  </Col>
                  <Col className='col-1'></Col>
                  <Col lg={6} >
                      <h1 className='crps position-relative line4s'>CryptoStraps </h1>
                      <p className='studio'>CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Crypto