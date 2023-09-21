import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

function Home() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const secondSection = document.getElementsByClassName('greatExperience')[0]; // Access the first element
    if (secondSection) {
      const rect = secondSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        incrementCounter();
      }
    }
  };


  return (
    <div className='mainContent'>
      <section className='bannerSlider d-flex align-items-center'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6}>
              <h1>Howdy, I'm Ramsay</h1>
            </Col>
          </Row>
          <Row>
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
      <section className='greatExperience'>
        <Container>
        <Col xs={12} sm={6} md={6}>
          <h2>Counter: {count}</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
          <h2>sdadasdas</h2>
        </Col>
        <Col xs={12} sm={6} md={6}>

        </Col>
        </Container>
      </section>
    </div>
  )
}

export default Home