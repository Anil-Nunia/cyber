import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logonav from '../assets/image/png/Logon.png'
import Imgheader from '../assets/image/png/imgheader1s.png'
import Imagepistl from '../assets/image/png/imgpistl.png'
import { Link } from 'react-router-dom'
import { Twiter } from './Icon'
import { Insta } from './Icon'
import { Discod } from './Icon'

const Navs = () => {
    return (
        <div className='bgimg position-relative'>
            <Container className='custom-container position-relative z_index'>
                <div className='d-flex align-items-center justify-content-between py-2'>
                    <img src={Logonav} alt="#" className='z_img '/>
                    <label for="iconbox">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <input type="checkbox" id='iconbox' hidden/>
                    <ul className='d-flex align-items-center gap-lg-3 mb-0 ps-0 nav-lg-screen gap-links'>
                        <li className='position-relative navlink1s'><Link className='nav_link navlink2s position-relative'>About</Link></li> 
                        <li className='position-relative navlink1s '><Link className='nav_link navlink2ss position-relative'>CryptoStraps</Link></li> 
                        <li className='position-relative navlink1s'><Link className='nav_link navlink2s position-relative'>Team</Link></li> 
                        <li className='position-relative navlink1s'><Link className='nav_link navlink2s position-relative'>Faq</Link></li> 
                        <li className='position-relative navlink1s'><Link className='nav_link navlink2ss position-relative'>Light Paper</Link></li> 
                    </ul>
                    <div className='d-flex align-items-center d-none d-xl-block'>
                        <span className='nav_twt'> <Twiter /> </span>
                        <span className='px-2 ms-1 me-2 nav_ins'> <Insta/></span>
                        <span className='nav_dis'><Discod /></span>
                    </div>
                </div>

                <Row>
                    <Col lg={6} data-aos="fade-up-right" data-aos-delay="100">
                        <div className='pt-lg-5 mt-md-5'>
                            <img src={Imgheader} alt="#" className='logonav1ss'/>
                            <p className='webhr'>Web3 Gaming Reimagined</p>
                            <div className='d-flex py-5'>
                                <button className='btn_get'>Get Started</button>
                                <button className='btn_learn'>Learn More</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='pt-lg-5' data-aos="fade-up-left" data-aos-delay="100">
                        <img src={Imagepistl} alt="#" className='w-100' />
                    </Col>
                </Row>
            </Container>
            <span className='ellipse1s ellips'></span>
            <span className='ellipse2s ellips'></span>
            <span className='ellipse3s ellips'></span>
            <span className='ellipse4s ellips'></span>
        </div>
    )
}

export default Navs