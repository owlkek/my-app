import React, {Component} from 'react'
import { Container, Nav, Tab, Row, Col, Image } from 'react-bootstrap'
import Design from '../Pages/Design'
import Review from '../Pages/Review'
import Footer from '../Components/Footer'

export default class About extends Component{
    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col lg={3} md={12} sm={12}> 
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Обзор</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Дизайн</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Версии Ghibli</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Возможности и оснащение</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col lg={9} md={12}  sm={12}> 
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Review/>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Design/>

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Image src="https://cdn.motor1.com/images/mgl/6gXgr/s1/maserati-ghibli-ribelle.jpg" thumbnail />


                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <Image src="https://www.maserati.com/mediaObject/sites/international/Models/MY19/ADAS-MY19/169-1920/Maserati-MY19-ADAS-EU/resolutions/res-l1200x10000/Maserati-MY19-ADAS-EU.jpg" thumbnail />

                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
                <Footer />
              
            </Container>
        )
    }
}