import React from 'react'
import { Container } from 'react-bootstrap'
import Solanaimg from '../assets/image/png/imgsola.png'
import Unrealimg from '../assets/image/png/imgunreal.png'
const Solana = () => {
    return (
        <div className='bgimghero d-flex justify-content-center align-items-center min-vh-70'>

            <Container>
                <div className='d-flex flex-wrap justify-content-center gap-5 align-items-center py-5' data-aos="zoom-in" data-aos-duration='1000' data-aos-delay='1000'>
                    <img src={Solanaimg} alt="#" className='sola me-lg-3 me-0'  />
                    <img src={Unrealimg} alt="#" className='unreal' />
                </div>
            </Container>

        </div>
    )
}

export default Solana