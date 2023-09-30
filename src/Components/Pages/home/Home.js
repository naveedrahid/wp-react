import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Form, Image, Modal, Row, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useProgressBars from '../../utils/useProgressBars'
import './Home.css'
import { getHomeData } from '../../apiServices/Homw.Services';


function Home() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const progressBars = useProgressBars();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHomeData('/posts');
        setPosts(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
<ul className='mt-5 pt-5'>
  {posts.map(post => (
    <li key={post.id}>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </li>
  ))}
</ul>


    
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
      <section className='optimizeCode d-flex align-items-center'>
        <Container>
          <h2 className='text-center px-3'>Code Optimization</h2>
          <p className='text-center px-3'>
            Optimized for a smaller build size, faster dev compilation and dozens of other improvements.<br />
            Optimized for a smaller build size, faster dev compilation and dozens of other improvements.
          </p>
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
                    {progressBars.map((bar, index) => (
                      <div key={index}>
                        {bar.label}
                        <ProgressBar
                          variant={bar.variant}
                          now={bar.progress}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='latestDesing'>
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
            >
              <div className='latestDesingWrapper'>
                <div className='latestDesingHeading text-center'>
                  <p>GRAPHIC DESIGNER, WEBDESIGNER & WEBFLOW EXPERT</p>
                  <h2>My Latest Design</h2>
                </div>
                <Tabs
                  defaultActiveKey="wordpress"
                  id="developer-profile"
                  className="mb-3 justify-content-center"
                >
                  <Tab
                    eventKey="wordpress"
                    title="WordPress"
                  >
                    <Row className='tabsRow'>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab
                    eventKey="react"
                    title="React Js"
                  >
                    <Row className='tabsRow'>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab
                    eventKey="laravel"
                    title="Laravel"
                  >
                    <Row className='tabsRow'>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab
                    eventKey="html"
                    title="HTML CSS"
                  >
                    <Row className='tabsRow'>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <div className='tabsImg'>
                          <Image
                            src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                            fluid
                            onClick={handleShow}
                            className='w-100'
                          />
                          <h3>NFT Dashboard Application Development.</h3>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
                {/* <Button variant="primary">
                  Launch static backdrop modal
                </Button> */}

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  fullscreen={'md-down'}
                  size="xl"
                  className='modalwrapper'
                >
                  <Modal.Header closeButton />
                  <Modal.Body className='modaBodyProjects'>
                    <Row>
                      <Col
                        sm={12}
                        md={6}
                      >
                        <div className='projectSLider'>
                          <Carousel
                            indicators={false}
                          >
                            <Carousel.Item>
                              <Image
                                src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                                fluid
                                onClick={handleShow}
                                className='w-100'
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <Image
                                src={process.env.PUBLIC_URL + '/assets/images/portfolio-large.jpg'}
                                fluid
                                onClick={handleShow}
                                className='w-100'
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={6}
                      >
                        <div className='projectSLiderContent'>
                          <h3>NFT Dashboard Application Development.</h3>
                          <p>Through a wide variety of mobile applications, we’ve developed a unique visual system.</p>
                        </div>
                      </Col>
                      <Col
                        sm={12}
                        md={12}
                      >
                        <div className='projectSLiderDesc d-flex justify-content-between'>
                          <div className='project-col projectStrategy'>
                            <h4>Strategy</h4>
                            <p>A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua.</p>
                          </div>
                          <div className='project-col projectDesign'>
                            <h4>Design</h4>
                            <p>A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua.</p>
                          </div>
                          <div className='project-col projectUser'>
                            <h4>User Experience</h4>
                            <p>A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua.</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
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
              <div className='educationDetailRow'>
                <div className='educationImg'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className='educationInfo'>
                  <div className='educationDate'>
                    2019-2020
                  </div>
                  <div className='educationAcadmy'>
                    Linkedin
                  </div>
                </div>
                <div className='educationContent'>
                  <p>Which firmament dominion first rule and tree. The seas he i were cattle Under living. It may beast every forth place.</p>
                </div>
              </div>
              <div className='educationDetailRow'>
                <div className='educationImg'>
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='educationInfo'>
                  <div className='educationDate'>
                    2019-2020
                  </div>
                  <div className='educationAcadmy'>
                    Git Hub
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
      <section className='contactUs d-flex align-items-center'>
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
            >
              <div className='contactUsheading text-center'>
                <p>LET'S MEET!</p>
                <h2>Hire Me</h2>
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
            >
              <div className='contactInfo'>
                <div className='contactInfoImg'>
                  <Image
                    src={process.env.PUBLIC_URL + '/assets/images/lets-meet.jpg'}
                    fluid
                    className=''
                  />
                </div>
                <div className='contactInfoContent'>
                  <h4>Jone Kartik</h4>
                  <p>Designer & Photographer</p>
                  <p>I am available for freelance work. Connect with me via call in to my account.</p>
                  <p>Phone: +01234567890</p>
                  <p>Email: admin@example.com</p>
                  <p>FIND WITH ME</p>
                  <div className='contactFollow'>
                    <div className='iconInfo'>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className='iconInfo'>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='iconInfo'>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={8}
            >
              <div className='contactForm'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formEmail">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" required />
                      <Form.Control.Feedback type="invalid">
                        Please Add Your Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" required />
                      <Form.Control.Feedback type="invalid">
                        Please Add Phone Number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group
                    controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                    <Form.Control.Feedback type="invalid">
                      Please Add Your Email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" required />
                    <Form.Control.Feedback type="invalid">
                      Please Add Subject.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: '150px' }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='w-100'>
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </>
  )
}

export default Home