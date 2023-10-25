import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Accordnimg1 from '../assets/image/png/Accordimg1.png'
import Accordnimg2 from '../assets/image/png/Accordnimg2.png'

const Faq = () => {
  return (
    <div className='bg-black'>
      <Container className='py-5 custom-container'>
        <div className='d-flex justify-content-center pb-lg-5 mb-sm-5'>
          <p className='faq linefaq position-relative pb-2'>Faq</p>
        </div>

        <Accordion className='mx-auto pb-5'>
          <Accordion.Item eventKey="0" >
            <img src={Accordnimg1} alt="#" className='Accrdnimg1' />
            <img src={Accordnimg2} alt="#" className='Accrdnimg2' />
            <Accordion.Header>Dui lectus auctor fermentum potenti enim. ?</Accordion.Header>
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <img src={Accordnimg1} alt="#" className='Accrdnimg1' />
            <img src={Accordnimg2} alt="#" className='Accrdnimg2' />
            <Accordion.Header>Placerat eros faucibus aliquam nunc, mattis</Accordion.Header>
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <img src={Accordnimg1} alt="#" className='Accrdnimg1' />
            <img src={Accordnimg2} alt="#" className='Accrdnimg2' />
            <Accordion.Header>Lorem nunc nunc risus viverra a</Accordion.Header>
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <img src={Accordnimg1} alt="#" className='Accrdnimg1' />
            <img src={Accordnimg2} alt="#" className='Accrdnimg2' />
            <Accordion.Header>In aliquet fusce id dictumst id</Accordion.Header>
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <img src={Accordnimg1} alt="#" className='Accrdnimg1' />
            <img src={Accordnimg2} alt="#" className='Accrdnimg2' />
            <Accordion.Header>Elementum pellentesque nisi, sagittis, </Accordion.Header>
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      </Container>
    </div>
  )
}

export default Faq