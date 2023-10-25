
import { Container } from 'react-bootstrap'
import Groupimg from '../assets/image/png/Groupimg.png'
import Groupicon from '../assets/image/png/Groupicon.png'
import Imgdgif from '../assets/image/png/imgd.gif'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Gameplay = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className='py-5 custom-container'>
        <div className='d-flex align-item-center justify-content-center py-lg-5'>
          <p className='cybr1st cyberfp2nd position-relative line1s'>CyberFPS <span className='gmpy2nd position-relative line2s'>Gameplay</span></p>
        </div>
        <Button variant="primary" onClick={handleShow}>
          <span className='position-relative'><img src={Groupimg} alt="#" className='w-100' />
            <img src={Groupicon} alt="#" className='groupicon' />
          </span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={Imgdgif} alt="#" className='w-100'/></Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default Gameplay