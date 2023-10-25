import React from 'react'
import { Container } from 'react-bootstrap'
import Footrlogo from '../assets/image/png/footrlogo.png'
import { Logo1s } from './Icon'
import { Logo2s } from './Icon'
import { Logo3s } from './Icon'
const Ftr = () => {
  return (
      <div className='footrheroimg position-relative'>
          <hr className='line' />
          <Container className='pt-4 mt-3 custom-container'>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                  <img src={Footrlogo} alt="#" />
                  <div className='d-flex align-items-center py-4 mb-3'>
                      <span className='lg1'><Logo1s /></span>
                      <span className='px-4 lg2'> <Logo2s /></span>
                      <span className='lg3'> <Logo3s /></span>
                  </div>
                  <p className='cybrftr py-4 mb-0'>© Cyber FPS 2022</p>
              </div>
          </Container>
    </div>
  )
}

export default Ftr