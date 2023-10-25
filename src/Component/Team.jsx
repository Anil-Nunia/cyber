import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Vector1img from '../assets/image/png/Vector1img.png'
import Vector2img from '../assets/image/png/Vector2img.png'
import Vector3img from '../assets/image/png/Vector3img.png'
import Vector4img from '../assets/image/png/Vector4img.png'
const Team = () => {
  return (
      <div>
          <Container className='py-5 my-lg-5 custom-container'>
             
              <Row className='py-lg-5'>
                  <div className='d-flex align-items-center justify-content-center'>
                      <p className='team mb-5 lineteam position-relative'>Team</p>
                  </div>
                  <Col lg={3}>
                     
                      <img src={Vector1img} alt="#" className='w-100 Vect1img' />
                          <p className='collin mb-0 pt-3 mb-1'>Collin</p>
                          <p className='founder pb-4'>Founder</p>
                     
                  </Col>
                  <Col lg={3}>
                     
                      <img src={Vector2img} alt="#" className='w-100 Vect2img' />
                          <p className='collin mb-0 pt-3 mb-1'>Pharaox
                              </p>
                          <p className='founder pb-4'>Founder</p>
                      
                  </Col>
                  <Col lg={3}>
                    
                      <img src={Vector3img} alt="#" className='w-100 Vect3img' />
                          <p className='collin mb-0 pt-3 mb-1'>Zach
                              </p>
                          <p className='founder pb-4'>CM</p>
                      
                  </Col>
                  <Col lg={3}>
                     
                          <img src={Vector4img} alt="#" className='w-100 Vect4img' />
                          <p className='collin mb-0 pt-3 mb-1'>Arlen
                              </p>
                          <p className='founder pb-4'>CM</p>
                     
                  </Col>
              </Row>
          </Container>

    </div>
  )
}

export default Team