import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import './Home.css'

function Home() {
  return (
    <div className='mainContent'>
      <section className='bannerSlider d-flex align-items-center'>
        <Container>
          <Row className='align-items-center'>
            <Col
              sm={12}
              md={{ span: 8, offset: 2 }}
            >
              <h1 className='text-center mb-5'>All in One Personal Portfolio for <strong>Developer</strong></h1>
            </Col>
            <Col
              sm={12}
              md={4}
            >
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
            <Col
              sm={12}
              md={4}
            >
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
            <Col
              sm={12}
              md={4}
            >
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
      <section className='experienceWrappper'>
        <Container>
          <Row>
            <Col
              sm={12}
              md={6}
            >
              <div className='experienceColWrapper'>
                <div className='experienceColInner'>
                  <span className='experienceNum'>4</span>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='experienceText'>
                  <p>Years Experience Working</p>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
            >
              <div className='experienceContentWrap'>
                <h2 className='mb-4'>Great Experience</h2>
                <div className='experienceRunningBar'>
                  <p>From tree make green multiply, great greater is. Fruit fowl blessed. Unto of man greater spirit you’ll beginning.</p>
                  <div className='progressBar mobilebar'>
                    <div className='progressBarContent'>
                      <span>Mobile Designe</span>
                      <span>80%</span>
                    </div>
                    <div className='barMbl barBg'>&nbsp;</div>
                  </div>
                  <div className='progressBar mobilebar'>
                    <div className='progressBarContent'>
                      <span>Coding</span>
                      <span>70%</span>
                    </div>
                    <div className='coding barBg'>&nbsp;</div>
                  </div>
                  <div className='progressBar mobilebar'>
                    <div className='progressBarContent'>
                      <span>Illustration</span>
                      <span>60%</span>
                    </div>
                    <div className='Illustration barBg'>&nbsp;</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='educationWrapper'>
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
            >
              <div className='educationBtn'>
                <h2>Education</h2>
                <Button variant="primary btnPrimary">Download Resume</Button>
              </div>
              <div className='educationDetailRow'>
                <div className='educationImg'>
                  <FontAwesomeIcon icon={faBehance} />
                </div>
                <div className='educationInfo'>
                  <div className='educationDate'>
                    2019-2020
                  </div>
                  <div className='educationAcadmy'>
                    Behance
                  </div>
                </div>
                <div className='educationContent'>
                  <p>Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast every forth place.</p>
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