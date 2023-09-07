import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

function Home() {
  return (
    <div className='mainContent'>
        <section className='bannerSlider d-flex align-items-center'>
          <Container>
            <Row className='align-items-center'>
              <Col xs={12} md={{span:8, offset:2}}>
                <h1 className='text-center mb-5'>All in One Personal Portfolio for <strong>Developer</strong></h1>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className='devServices'>
                  <div className='devServicesIcon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div className='devServicesInfo'>
                    <h2>Fast Performance</h2>
                    <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className='devServices'>
                  <div className='devServicesIcon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div className='devServicesInfo'>
                    <h2>Fast Performance</h2>
                    <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className='devServices'>
                  <div className='devServicesIcon'>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div className='devServicesInfo'>
                    <h2>Fast Performance</h2>
                    <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  )
}

export default Home